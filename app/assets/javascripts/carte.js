 
var svg = d3.select('#container')
	.append("svg")
	.attr("width", "auto")
	.attr("height", "auto");

d3.json("/bayarea.geojson", function(data){
	var group  = svg.selectAll("g")
		.data(data.features)
		.enter()
		.append("g")

	var projection = d3.geo.mercator();
	var path = d3.geo.path().projection(projection);

	var areas = group.append("path")
		.attr("d", path)
		.attr("class", "area")
		.attr("fill", "steelblue");
});