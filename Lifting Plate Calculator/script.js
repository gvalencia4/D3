function updateBar() {
  d3.selectAll("circle")
    .style("fill", "deeppink")
    .style("stroke", "indigo")
    .style("stroke-width", function (data, index) {
      return index * 3;
    });
  d3.selectAll("rect")
    .style("fill", "indigo")
    .style("stroke", "deeppink")
    .style("stroke-width", "4");
  d3.selectAll("rect").style("opacity", function () {
    return Math.random();
  });
}
