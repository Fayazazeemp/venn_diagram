import React from 'react'
import * as d3 from "d3";
import * as venn from "venn.js";


function getSetIntersections() {
    const areas = d3.selectAll(".venn_area").nodes().map(
        function (element) {
            return { sets: element.id.split(","),
                     size: parseFloat(element.value)};} );
    return areas;
}



var chart = venn.VennDiagram()
                 .width(600)
                 .height(500);

function draw() {
    d3.select("#venn").datum(getSetIntersections()).call(chart);
    
    var colours = ['black', 'red'];
    d3.selectAll("#venn .venn-circle path")
        .style("fill-opacity", .5)
        .style("stroke-width", 4)
        .style("stroke-opacity", .5)
        .style("stroke", function(d,i) { return colours[i]; });

    d3.selectAll("#venn .venn-circle text")
        .style("fill", function(d,i) { return colours[i]})
        .style("font-size", "32px")
        .style("font-weight", "500");
}



function Input() {
    return (
        <div  className="container">
            
<div>
    <table>
    <tr>
      <td>|A|</td>
      <td>
        <input class="input-mini venn_area" id="A" type="number"  />
      </td>
    </tr>
    <tr>
      <td>|B|</td>
      <td>
        <input class="input-mini venn_area" id="B" type="number"  />
      </td>
    </tr>
    <tr>
      <td>|A&B|</td>
      <td>
        <input class="input-mini venn_area" id="A,B" type="number"  />
      </td>
    </tr>
    </table>
    <button className="btn" onClick={draw}>Generate</button>
</div>
<div id="venn"></div>
<div></div>


        </div>
    )
}

export default Input
