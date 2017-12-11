
// add note when button is clicked
d3.select("#addnote")
    .on('click', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');

      d3.select('.preview').classed("hide",true);
    });


// remove all notes when button is clicked
d3.select("#removeall")
    .on('click',function(){
      d3.event.preventDefault();
          d3.selectAll('.note').remove();
    })


// create random styling (in this case font color changes randomly)
d3.select("#feelinglucky")
    .on('click',function(){
      d3.event.preventDefault();
      d3.selectAll('.note').style('color',function(){
        //get a different value for the color (no letters included)
        var test = "#" + Math.floor(Math.random()*899999 + 100000);
        return test;
      });
    })


// for preview on input
var preview = d3.select('.preview');

d3.select('input')
  .on('input', function(){
      var note = d3.event.target.value;
      preview.text(note)
        .classed("hide", note ==="");
  })
