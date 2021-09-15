
interface List {
  [key: number]: number[];
}
interface Answer {
  [key: string]: number
}

class Graph {
  adjacentList: List = {};
  visited: number[] = [];
  answer: Answer = {};
  solutionPath: number[] = []

  constructor(public size: number) {
    for (let i = 1; i <= this.size ** 2; i++) {
      this.addVertex(i);
    }
    this.createMaze();
  }

  addVertex(vertex: number): void {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  addEdge(v1: number, v2: number): void {
    if (this.adjacentList[v1] && this.adjacentList[v2]) {
      this.adjacentList[v1].push(v2);
      this.adjacentList[v2].push(v1);
    }
  }

  //圖遍歷 method
  depthFirstRecursive(start: number) {
    let visitedObj: { [key: number]: boolean } = {};
    let finalPath: number[] = [];
    let max = -Infinity;
    let finalVertex: number | undefined;
    const dfs = (vertex: number, count: number, pth: number[]) => {
      visitedObj[vertex] = true;
      let newPath = [...pth, vertex];
      if (count + 1 > max) {
        max = count + 1;
        finalVertex = vertex;
        finalPath = newPath
      }
      this.adjacentList[vertex].forEach(el => {
        if (!visitedObj[el]) return dfs(el, count + 1, newPath)
      })
    }
    dfs(start, 0, []);

    if (finalVertex) {
      this.answer = { end: finalVertex, count: max - 1, }
      this.solutionPath = finalPath
    }
  }

  createPath(key: number): void {
    const path = [key];
    let keepgoing = true;
    while (keepgoing) {
      let currentVertex = path[path.length - 1];
      // 若目前位置尚未被拜訪過
      if (!this.visited.includes(currentVertex)) {
        // 回傳下一個隨機路徑
        let nextVertex = this.returnVertex(currentVertex, path);
        // 若下一個隨機路徑尚未被拜訪
        if (nextVertex !== 0) {
          path.push(nextVertex);
          this.addEdge(currentVertex, nextVertex);
        } else {
          // 若下一個隨機路徑已被拜訪，則將起始點與左側位置連接
          if (path[0] % this.size !== 1) {
            if (path[0] !== 1) {
              this.addEdge(path[0], path[0] - 1)
            }
          } else {
            this.addEdge(path[0], path[0] - this.size)
          }
          keepgoing = false;
        }
      } else {
        // 若目前位置已被拜訪
        keepgoing = false;
      }
    }
    this.visited = [...this.visited, ...path];
  }

  returnVertex(vertex: number, path: number[]): number {
    //  確認目前位置所擁有的鄰居們
    const neighborArr = this.findNeighbor(vertex)
    const allDirection = neighborArr.filter((el: number | null): boolean => el !== 0);
    //  篩選出未被拜訪的鄰居們
    const newDirection = allDirection.filter((el) => !path.includes(el));
    // 若目前位置的所有鄰居都被拜訪過，則回傳0
    if (newDirection.length === 0) return 0;
    // 若仍有鄰居尚未被拜訪，則隨機回傳一個鄰居
    const nextVertex = newDirection[Math.floor(Math.random() * newDirection.length)];
    return nextVertex;
  }

  findNeighbor(v: number): any[] {
    let top = v <= this.size ? 0 : v - this.size;
    let bottom = v > this.size ** 2 - this.size ? 0 : v + this.size;
    let left = v % this.size === 1 ? 0 : v - 1;
    let right = v % this.size === 0 ? 0 : v + 1;
    return [top, right, left, bottom]
  }

  createMaze(): void {
    for (let key in this.adjacentList) {
      while (this.adjacentList[key].length === 0) {
        this.createPath(parseInt(key));
      }
    }
    this.depthFirstRecursive(1)
  }

}


export default Graph