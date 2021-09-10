(this.webpackJsonpmaze=this.webpackJsonpmaze||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r,s=n(1),a=n.n(s),i=n(9),o=n.n(i),c=n(8),d=n(5),l=n(2);!function(e){e[e.renderRunner=0]="renderRunner",e[e.refresh=1]="refresh",e[e.toggle=2]="toggle",e[e.hint=3]="hint"}(r||(r={}));var h=n(13),p=n(3),u=n(4),j=function(){function e(t){Object(p.a)(this,e),this.size=t,this.adjacentList={},this.visited=[],this.answer={},this.solutionPath=[];for(var n=1;n<=Math.pow(this.size,2);n++)this.addVertex(n);this.createMaze()}return Object(u.a)(e,[{key:"addVertex",value:function(e){this.adjacentList[e]||(this.adjacentList[e]=[])}},{key:"addEdge",value:function(e,t){this.adjacentList[e]&&this.adjacentList[t]&&(this.adjacentList[e].push(t),this.adjacentList[t].push(e))}},{key:"depthFirstRecursive",value:function(e){var t,n=this,r={},s=[],a=-1/0;!function e(i,o,c){r[i]=!0;var d=[].concat(Object(h.a)(c),[i]);o+1>a&&(a=o+1,t=i,s=d),n.adjacentList[i].forEach((function(t){if(!r[t])return e(t,o+1,d)}))}(e,0,[]),t&&(this.answer={end:t,count:a-1},this.solutionPath=s)}},{key:"createPath",value:function(e){for(var t=[e],n=!0;n;){var r=t[t.length-1];if(this.visited.includes(r))n=!1;else{var s=this.returnVertex(r,t);0!==s?(t.push(s),this.addEdge(r,s)):(t[0]%this.size!==1?1!==t[0]&&this.addEdge(t[0],t[0]-1):this.addEdge(t[0],t[0]-this.size),n=!1)}}this.visited=[].concat(Object(h.a)(this.visited),t)}},{key:"returnVertex",value:function(e,t){var n=this.findNeighbor(e).filter((function(e){return 0!==e})).filter((function(e){return!t.includes(e)}));return 0===n.length?0:n[Math.floor(Math.random()*n.length)]}},{key:"createMaze",value:function(){for(var e in this.adjacentList)for(;0===this.adjacentList[e].length;)this.createPath(parseInt(e));this.depthFirstRecursive(1)}},{key:"findNeighbor",value:function(e){var t=e<=this.size?0:e-this.size,n=e>Math.pow(this.size,2)-this.size?0:e+this.size,r=e%this.size===1?0:e-1;return[t,e%this.size===0?0:e+1,r,n]}}]),e}(),m={graph:new j(8),position:1,pacManForward:"right",infoIsToggle:!0,step:0,showHint:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.renderRunner:return Object(l.a)(Object(l.a)({},e),{},{position:t.payload.position,pacManForward:t.payload.pacManForward,step:t.payload.count+1});case r.refresh:return Object(l.a)(Object(l.a)({},e),{},{graph:new j(t.payload.size),position:1,pacManForward:"right",step:0,showHint:!1});case r.toggle:return Object(l.a)(Object(l.a)({},e),{},{infoIsToggle:!t.payload.isToggle});case r.hint:return Object(l.a)(Object(l.a)({},e),{},{showHint:!t.payload.showHint});default:return e}},f=Object(c.a)({maze:b}),v=n(7),g=n(6),O=(n(22),n(23),n(0));var z=function(e){return Object(O.jsxs)("div",{className:"modal ".concat(e.currentPosition===e.end?"show":null),children:[Object(O.jsx)("h2",{children:"Congratulations!"}),Object(O.jsx)("button",{onClick:e.restart,className:"modal__btn",children:"RESTART"})]})};n(25);var x=function(e){return Object(O.jsxs)("div",{className:"pacman pacman--".concat(e.maze.pacManForward),style:e.maze.position===e.maze.graph.answer.end?{width:"100%",height:"100%"}:{},children:[Object(O.jsx)("div",{className:"pacman__eye"}),Object(O.jsx)("div",{className:"pacman__mouth"})]})};n(26),n(27);var y=function(e){return Object(O.jsxs)("div",{className:"modeSelector__container",children:[Object(O.jsx)("div",{onClick:function(){return e.clicked("easy",8)},className:"modeSelector__btn",children:Object(O.jsx)("button",{className:"easy"===e.mode.level?"actived":"",children:"Easy"})}),Object(O.jsx)("div",{onClick:function(){return e.clicked("normal",10)},className:"modeSelector__btn ",children:Object(O.jsx)("button",{className:"normal"===e.mode.level?"actived":"",children:"Normal"})}),Object(O.jsx)("div",{onClick:function(){return e.clicked("hard",20)},className:"modeSelector__btn",children:Object(O.jsx)("button",{className:"hard"===e.mode.level?"actived":"",children:"Hard"})}),Object(O.jsx)("div",{onClick:function(){return e.refresh()},className:"modeSelector__btn",children:Object(O.jsx)("button",{className:"refresh",children:Object(O.jsx)("i",{className:"fas fa-redo"})})})]})},w=function(e){return e.children};var k=function(e){return Object(O.jsxs)(w,{children:[Object(O.jsxs)("div",{children:["\u5df2\u4f7f\u7528\u6b65\u6578:",e.usedStep]}),Object(O.jsxs)("div",{children:["\u6700\u4f73\u6b65\u6578:",e.count]}),Object(O.jsx)("button",{onClick:e.hintToggler,children:"\u63d0\u793a"})]})};var A=function(e){var t=function(t,n){var r=e.maze.position,s=e.maze.graph.adjacentList[r];e.maze.position!==e.maze.graph.answer.end&&e.renderRunner(t,n,r,s,e.maze.step)};return Object(O.jsxs)(w,{children:[Object(O.jsx)("div",{onClick:function(){return t(-e.size,"up")},children:"\u2191"}),Object(O.jsx)("div",{onClick:function(){return t(-1,"left")},children:"\u2190"}),Object(O.jsx)("div",{onClick:function(){return t(e.size,"down")},children:"\u2193"}),Object(O.jsx)("div",{onClick:function(){return t(1,"right")},children:"\u2192"})]})},N=function(e,t,n,s,a){return s.includes(n+e)?{type:r.renderRunner,payload:{position:n+e,pacManForward:t,count:a}}:{type:"HIT_DEAD_END"}},C=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"gameboard__console",children:[Object(O.jsx)("div",{onClick:function(){return e.props.infoToggler(e.props.maze.infoIsToggle)},className:"toggler",children:this.props.maze.infoIsToggle?Object(O.jsx)("i",{className:"fas fa-sort-up"}):Object(O.jsx)("i",{className:"fas fa-sort-down"})}),Object(O.jsxs)("div",{className:"gameboard__console__info ".concat(this.props.maze.infoIsToggle?"":"hide"),children:[Object(O.jsx)("div",{className:"modeselector",children:Object(O.jsx)(y,{clicked:this.props.modeClicker,refresh:this.props.initGame,mode:this.props.mode})}),Object(O.jsx)("div",{className:"calculator",children:Object(O.jsx)(k,{count:this.props.maze.graph.answer.count,usedStep:this.props.maze.step,hintToggler:function(){return e.props.hintToggler(e.props.maze.showHint)}})})]}),Object(O.jsx)("div",{className:"gameboard__console__controller",children:Object(O.jsx)(A,{renderRunner:this.props.renderRunner,size:this.props.mode.size,maze:this.props.maze})})]})}}]),n}(a.a.Component),_=Object(d.b)((function(e){return{maze:e.maze}}),{infoToggler:function(e){return{type:r.toggle,payload:{isToggle:e}}},renderRunner:N,hintToggler:function(e){return{type:r.hint,payload:{showHint:e}}}})(C),L=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).keydownListener=function(t){var n=e.props.maze.position,r=e.props.maze.graph.adjacentList[n];switch(t.code){case"ArrowLeft":e.props.renderRunner(-1,"left",n,r,e.props.maze.step);break;case"ArrowRight":e.props.renderRunner(1,"right",n,r,e.props.maze.step);break;case"ArrowDown":e.props.renderRunner(e.props.mode.size,"down",n,r,e.props.maze.step);break;case"ArrowUp":e.props.renderRunner(-e.props.mode.size,"up",n,r,e.props.maze.step)}},e.renderPacAndTarget=function(t){return t===e.props.maze.position?Object(O.jsx)(x,{maze:e.props.maze}):t===e.props.maze.graph.answer.end&&e.props.maze.graph.answer.end!==e.props.maze.position?Object(O.jsx)("div",{className:"target"}):null},e.renderMaze=function(){var t=[];for(var n in e.props.maze.graph.adjacentList)t.push(e.renderWall(n,e.props.maze.graph.adjacentList[n]));return t.map((function(t,n){var r=null;return e.props.maze.showHint&&(r=!!e.props.maze.graph.solutionPath.includes(n+1)),Object(O.jsx)("div",{className:"".concat(e.props.mode.level," ").concat(r?"hint":""," vertex ").concat(t.join(" ")),children:e.renderPacAndTarget(n+1)},n+1)}))},e.initGame=function(){var t;e.props.refresh(e.props.mode.size),null===(t=document.querySelector("body"))||void 0===t||t.addEventListener("keydown",e.keydownListener)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e;null===(e=document.querySelector("body"))||void 0===e||e.addEventListener("keydown",this.keydownListener)}},{key:"componentDidUpdate",value:function(e){var t;(e.mode.level!==this.props.mode.level&&this.initGame(),this.props.maze.position===this.props.maze.graph.answer.end)&&(null===(t=document.querySelector("body"))||void 0===t||t.removeEventListener("keydown",this.keydownListener))}},{key:"renderWall",value:function(e,t){var n=this,r=[];return t.forEach((function(t){t===parseInt(e)+1&&r.push("right"),t===parseInt(e)-1&&r.push("left"),t===parseInt(e)+n.props.mode.size&&r.push("bottom"),t===parseInt(e)-n.props.mode.size&&r.push("top")})),r}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"gameboard",children:[Object(O.jsxs)("div",{className:"gameboard__playground",children:[Object(O.jsx)(z,{currentPosition:this.props.maze.position,end:this.props.maze.graph.answer.end,restart:this.initGame}),Object(O.jsx)("div",{className:"gameboard__playground__maze",children:this.renderMaze()})]}),Object(O.jsx)(_,{mode:this.props.mode,modeClicker:this.props.modeClicker,initGame:this.initGame})]})}}]),n}(a.a.Component),R=Object(d.b)((function(e){return{maze:e.maze}}),{renderRunner:N,refresh:function(e){return{type:r.refresh,payload:{size:e}}}})(L);n(28),n(29);var E=function(){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsxs)("h2",{className:"footer__title",children:["\xa9 Designed by ",Object(O.jsx)("i",{className:"fab fa-github"}),Object(O.jsx)("a",{href:"https://github.com/ChiuWeiChung",children:" Rick Chiu"})]}),Object(O.jsxs)("div",{className:"footer__utilities",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("i",{className:"fab fa-react"})," React with Redux"]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAdtJREFUWEftlj1IHFEQx3+z+NGJnRgsLFIEbCR3a5EgfpSpLoVFOiORswmkU+8KFbynRLEJBLwUsbOS2Cik0kAwhRu0CoIEbFIFwd5wE9w1e7snK7vGRYt93fuYNz/+M/PeCCVHucMhGUCmQKZApkCmQKbA/VZA2U30UQqDofNB+8a9y4PX/4YmL7EBpp0d6k7eY7HCfP6nb192RlB9B9IRvDMFANnD5J5GgodBuR6gMQSqcyzaXlguLmocFwqo1cPC4x/uVml/FpUBRL9g7FlK+2Mgq0DTP9NkDUlNh3yAqE5Kmrqo9P7yAALdlrKO8OIqc5KWLBYA/VTyXy9VKmAxj9ITFZLbVwCtYuyi73DmoJ3zP2/AGgd9kL4CrgcpYnLVkLOS0wlaBJmJXwWNuHFCULe5WopeXnwAXqWXhGHo36gus2C/9ZenvnVjtRyBtrpaJXqKkykQRDkBmcDkPnvV8f0j6GhKADrn1bxzDDysU9ReYvrW3HnZqaKMpwGwick/d524UjdPojxCdBtjL/kwZWcL5VkaAGfUdJhF+yCq7pl2Cgif0kzCU0SLVOyNEMTr7VbaOgooK8H3IFkSxvheA07PUA79ufAEaPm/hyhS15tvJFPg5n4iLf8COnQH0CgXaW8AAAAASUVORK5CYII=",alt:"",style:{width:"20%"}})," TypeScript "]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("i",{className:"fab fa-font-awesome-flag"})," FontAwesome "]})]})]})},M=function(e){Object(v.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={mode:{level:"easy",size:8}},e.setMode=function(t,n){var r=Object(l.a)({},e.state.mode);r.level=t,r.size=n,e.setState({mode:r})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"Container",children:[Object(O.jsx)("h1",{className:"title",children:"Maze Runner"}),Object(O.jsx)(R,{mode:this.state.mode,modeClicker:this.setMode}),Object(O.jsx)(E,{})]})})}}]),n}(a.a.Component),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.b,F=Object(c.c)(f,S());o.a.render(Object(O.jsx)(d.a,{store:F,children:Object(O.jsx)(M,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0e085079.chunk.js.map