
interface List {
  [key: number]: number[];
}
interface Answer {
  [key: string]: number;
}

class Graph {
  adjacentList: List = {};
  visited: number[] = [];
  answer:Answer={}

  constructor(public size: number) {
    for (let i = 1; i <= this.size ** 2; i++) {
      this.addVertex(i);
    }
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

  depthFirstRecursive(start: number) {
    let visitedObj: { [key: number]: boolean } = {};
    let result: number[] = [];
    let max = -Infinity;
    let finalVertex ;
    const dfs = (vertex: number,count:number) => {
      visitedObj[vertex] = true;
      result.push(vertex);
      if(count+1>max) {
        max = count+1;
        finalVertex = vertex
      }
      this.adjacentList[vertex].forEach(el => {
        if (!visitedObj[el]) return dfs(el,count+1)
      })
    }
    dfs(start,0);
    // console.log(`max:${max} finalVertex:${finalVertex}`);
    if(finalVertex){
      this.answer = {start:0,end:finalVertex,count:max-1}
    }
    // console.log(result);
    // return result;
  }

  createPath(key: number): void {
    const path = [key];
    let keepgoing = true;
    while (keepgoing) {
      let currentVertex = path[path.length - 1];
      if (!this.visited.includes(currentVertex)) {
        // 若最後走到的位置尚未被拜訪過
        let nextVertex = this.returnVertex(currentVertex, path);
        if (nextVertex !== 0) {
          path.push(nextVertex);
          this.addEdge(currentVertex, nextVertex);
        } else {
          // 若最後走到的位置是死路，則須將起始點與左側位置連接
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
        // 若最後走到的位置已被拜訪過
        keepgoing = false;
      }
    }
    this.visited = [...this.visited, ...path];
  }

  returnVertex(vertex: number, arr: number[]): number {
    const neighborArr = this.findNeighbor(vertex)
    //  Define the possible direction Array
    const allDirection = neighborArr.filter((el: number | null): boolean => {
      return el !== 0
    });
    const newDirection = allDirection.filter((el) => {
      return !arr.includes(el);
    });

    // If Dead Road => return false
    if (newDirection.length === 0) return 0;
    // If Live Road => return random vertex
    const nextVertex = newDirection[Math.floor(Math.random() * newDirection.length)];
    return nextVertex;
  }

  createMaze(): void {
    for (let key in this.adjacentList) {
      while (this.adjacentList[key].length === 0) {
        this.createPath(parseInt(key));
      }
    }

    this.depthFirstRecursive(1)
  }

  findNeighbor(v: number): any[] {
    let top = v <= this.size ? 0 : v - this.size;
    let bottom = v > this.size ** 2 - this.size ? 0 : v + this.size;
    let left = v % this.size === 1 ? 0 : v - 1;
    let right = v % this.size === 0 ? 0 : v + 1;
    return [top, right, left, bottom]
  }
}


export default Graph