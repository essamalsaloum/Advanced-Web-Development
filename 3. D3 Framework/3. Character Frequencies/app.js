// write your code here!
var countBtn = d3.select('#countBtn');
var resetBtn = d3.select('#resetBtn');
var word = [];


// count leter buttons
countBtn.on('click', function(){
  d3.event.preventDefault();
  var input = d3.select('input');
  var text = input.property('value');

  var letters =  d3.select('#letters')
    .selectAll('.letter')
    .data(getFrequencies(text), d=> d.character);

  letters
        .classed('new', false)
      .exit()
      .remove();

  letters
      .enter()
      .append('div')
         .classed('letter', true)
         .classed('new', true)
      .merge(letters)
         .style("width","20px")
         .style("line-height", "20px")
         .style("margin-right", "5px")
         .style("height", d=> d.count * 20 + "px")
         .text(c => c.character);

   d3.select('#phrase')
     .text('Analysis of: ' + text);

   d3.select("#count")
     .text("New characters: (" + letters.enter().nodes().length + ")")

     input.property("value", "");
});


// reset button
resetBtn.on('click', function(){
  d3.event.preventDefault();
  word = [];
  d3.select('#letters')
    .text('');
  d3.select('#count')
    .text('');
  d3.select('#phrase')
    .text('');
})


//helper function to calculate Frequency
function getFrequencies(str){
  var sorted = str.split('').sort();
  var data = [];
  sorted.forEach(function(letter, i){
    var last = data[data.length - 1];
    if(last && last.character === letter) last.count++;
    else data.push({ character: letter, count: 1});
  })
  return data;
}
