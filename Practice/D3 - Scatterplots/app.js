var width = 500;
var height = 500;
var padding = 30;

//Set y scale using extent that return [min,max]
var yScale = d3.scaleLinear()
              .domain(d3.extent(birthData2011, d=> d.lifeExpectancy))
              .range([height - padding, padding]);

//Set x scale using extent that return [min,max]
var xScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d=> d.births/ d.population))
                .range([padding, width-padding]);

var xAxis = d3.axisBottom(xScale)
                .tickSize(-width + 2 * padding)
                .tickSizeOuter(0);
var yAxis = d3.axisLeft(yScale)
                .tickSize(-width + 2 * padding)
                .tickSizeOuter(0);

var colorScale = d3.scaleLinear()
                    .domain(d3.extent(birthData2011, d=> d.population/ d.area))
                    .range(['lightgreen','black']);

var radiusScale = d3.scaleLinear()
                    .domain(d3.extent(birthData2011, d=> d.births))
                    .range([2, 40]);

d3.select('svg')
    .append("g")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(xAxis);

d3.select('svg')
    .append("g")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);

d3.select("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("circle")
  .data(birthData2011)
  .enter()
  .append("circle")
    .attr("cx", d => xScale(d.births / d.population))
    .attr("cy", d => yScale(d.lifeExpectancy))
    .attr("fill", d => colorScale(d.population / d.area))
    .attr("r", d => radiusScale(d.births));

//add label on x axis
d3.select("svg")
    .append("text")
    .attr("x", width/2)
    .attr("y", height - padding)
    .attr("dy", "1.5em")
    .style("text-anchor", "middle")
    .text("Births per Capita")

// add label on y axisLeft
d3.select("svg")
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", - height / 2)
      .attr("y", - 13 )
      .attr("dy", "1.5em")
      .style("text-anchor", "middle")
      .text("Population")
