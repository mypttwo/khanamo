'use strict'

let minDistance = (distArr, sptArr) => {

	let min = Number.MAX_SAFE_INTEGER, min_index;

	for (let v = 0; v < distArr.length; v++)
		if (sptArr[v] == false && distArr[v] <= min)
			min = distArr[v], min_index = v;

	return min_index;
}

let dijkstra = (graph, src) => {
	let distArr = [];
	let sptArr = [];

	for (let i = 0; i < graph.length; i++) {
		distArr[i] = Number.MAX_SAFE_INTEGER;
		sptArr[i] = false;
	}

	distArr[src] = 0;

	for (let i = 0; i < graph.length - 1; i++) {
		let u = minDistance(distArr, sptArr);
		sptArr[u] = true;

		for (let v = 0; v < graph.length; v++) {
			if (!sptArr[v] &&
				graph[u][v] &&
				distArr[u] != Number.MAX_SAFE_INTEGER &&
				distArr[u] + graph[u][v] < distArr[v])
				distArr[v] = distArr[u] + graph[u][v];
		}
	}

	return distArr;
};

module.exports = dijkstra;