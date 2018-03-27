import * as d3 from 'd3'

import { data } from './data'

// let svg = d3.select('svg')
// let width = svg.attr('width')
// let height = svg.attr('height')
// let g = svg.append('g').attr('transform', 'translate(0, 0)')
//
// let tree = d3.tree()
// .size([height, width])
// .nodeSize([70, 40])
//
// let cluster = d3.cluster()
// .size([height, width - 160])
//
// let stratify = d3.stratify()
// .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });
//
// // diagonal(对角线)
// const diagonal = function (d) {
//   return 'M' + d.y + ',' + d.x
//       + 'C' + (d.parent.y + 100) + ',' + d.x
//       + ' ' + (d.parent.y + 100) + ',' + d.parent.x
//       + ' ' + d.parent.y + ',' + d.parent.x;
// }
//
// const initNode = function (node) {
//   node.append("circle").attr("r", 5)
//   node.append("text")
//   .attr("dy", 3)
//   .attr("x", function (d) { return d.children ? -8 : 8; })
//   .style("text-anchor", function(d) {
//     return d.children ? "end" : "start"
//   })
//   .text(function(d) {
//     return d.data.name
//   })
// }
//
// const drawTree = function (root) {
//   let nodes = tree(root).descendants()
//   let links = tree(root).links()
//   console.log(nodes)
//   let node = g.selectAll('.node')
//   .data(nodes)
//   .enter().append('g')
//   .attr('class', function (d) {
//     return "node" + (d.children ? " node--internal" : " node--leaf")
//   })
//   .attr('transform', function (d) {
//     return "translate(" + d.y + "," + d.x + ")"
//   })
//   let link = g.selectAll(".link")
//     .data(root.descendants()).enter().append('path')
//     .attr('class', 'link')
//     .attr('d', function(d) {
//       if (d.parent) {
//         return "M" + d.y + "," + d.x
//             + "C" + (d.parent.y + 100) + "," + d.x
//             + " " + (d.parent.y + 100) + "," + d.parent.x
//             + " " + d.parent.y + "," + d.parent.x;
//       } else {
//         return "M" + d.y + "," + d.x
//           + "C" + 100 + "," + d.x
//           + " " + 100 + "," + 0
//           + " " + 0 + "," + 0;
//       }
//     })
//     initNode(node)
// }
//
// // const useCSv = function () {
// //   d3.csv("flare.csv", function(error, data) {
// //     if (error) throw error
// //     drawTree(stratify(data))
// //   })
// // }
// // useCSv()
// // 绘制
// let root = d3.hierarchy(data)
// console.log(root)
// drawTree(root)

var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height"),
g = svg.append("g").attr("transform", "translate(40, 0)");

var cluster = d3.cluster()
.size([height, height]);

var stratify = d3.stratify()
.parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

d3.json("data.json", function(error, data) {
if (error) throw error;
console.log(data)
var root =  d3.hierarchy(data)
// var root = stratify(data)
//   .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); });
console.log(root.descendants())
cluster(root);
var table = ``
var link = g.selectAll(".link")
  .data(root.descendants().slice(1))
.enter().append("path")
  .attr("class", "link")
  .attr("d", function(d) {
    return "M" + d.y + "," + d.x
        + "C" + (d.parent.y + 100) + "," + d.x
        + " " + (d.parent.y + 100) + "," + d.parent.x
        + " " + d.parent.y + "," + d.parent.x;
  });

var node = g.selectAll(".node")
  .data(root.descendants().reverse())
.enter().append("g")
  .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

node.append("p")
  .attr("class", "node-html")
  .html(table);

node.append("text")
  .attr("dy", 3)
  .attr("x", function(d) { return d.children ? -8 : 8; })
  .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
  .text(function(d) {
      return d.data.name;
  });
});
