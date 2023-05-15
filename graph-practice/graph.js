class Graph {
  constructor(verticesNum) {
    this.verticesNum = verticesNum;
    this.adjList = new Map();
  }
  /* initializes new map value with key vertex
   with empty array (lists of adj vertices); */
  addVertex(vertex) {
    this.adjList.set(v, []);
  }
  // adds adj vertex to each other
  // NOTE: this assumes undirected graph
  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1)
  }
  printGraph() {
    let keys = this.adjList.keys();
    for (let i of key) {
      let values = this.adjList.get(i);
      let conc = '';
      for (let j of values) {
        conc += `{i} `;
      }
      console.log(`${i}->${conc}`);
    }
  }
  breadthSearch(startVertex) {
    let visited = {};
    let q = [];
    visited[startVertex] = true;
    q.push(startVertex);

    while(q.length !== 0) {
      let vertex = q.shift();
      let vertexList = this.adjList.get(vertex);
      for (let i in vertexList) {
        let adj = vertexList[i];
        if (!visited[adj]) {
          visited[adj] = true;
          q.push(adj);
        }
      }
    }
  }
}
