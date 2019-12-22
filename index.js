function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for(let i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
}
// 添加顶点函数
// 当调用这个函数并传入顶点A和B时，函数会先查找顶点A的邻接表，将顶点B添加到列表中，然后再查找顶点B的邻接表，将顶点A加入列表。最后，这个函数会将边数加1
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
// 打印所有顶点及其相邻顶点列表
function showGraph() {
    for(let i = 0; i < this.vertices; ++i) {
        console.log(i + '->');
        for(let j = 0; j < this.vertices; ++j) {
            if(this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + '');
            }
            console.log('');
        }
    }
}
function dfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);  // 添加到队尾
    while(queue.length > 0) {
        var v = queue.shift();  // 从队首移除
        if(this.adj[v] != undefined) {
            console.log('visited vertex: ' + v);
        }
        for(let w in this.adj[v]) {
            if(!this.marked[w]) {
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

// 测试
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0)