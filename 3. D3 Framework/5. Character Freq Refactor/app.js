// write your code here!
var countBtn = d3.select('#countBtn');
var resetBtn = d3.select('#resetBtn');
var width = 600;
var height = 300;
var barPadding = 10;

// count leter buttons
countBtn.on('click', function(){
  d3.event.preventDefault();
  var input = d3.select('input');
  var text = input.property('value');
  var barWidth = width / getFrequencies(text).length - barPadding;

  var letters =  d3.select('svg')
    .attr("width", width)
    .attr("height", height)
    .selectAll('g')
    .data(getFrequencies(text), d=> d.character);

letters
    .attr("fill", "orange")
    .exit()
    .remove();

var letterEnter = letters
   .enter()
     .append('g')

letterEnter.append('rect');
letterEnter.append('text');

letterEnter
  .attr("fill", "green")
   .merge(letters)
    .select('rect')
    .attr("width", barWidth)
    .attr("height", d=> d.count/10 * height)
    .attr("y", d=> height - d.count/10 * height)
    .attr("x", function(d,i){
      return (barWidth + barPadding) * i;
    });

letterEnter
  .merge(letters)
  .select('text')
  .attr("x", function(d,i){
    return (barWidth + barPadding) * i + barWidth/2;
  })
  .attr("text-anchor", "middle")
  .attr("y", d=> height - d.count * 30 -10 )
  .text(d=>d.character)


   d3.select('#phrase')
     .text('Analysis of: ' + text);

   d3.select("#count")
     .text("New characters: (" + letters.enter().nodes().length + ")")

     input.property("value", "");
});


// reset button
resetBtn.on('click', function(){
  d3.event.preventDefault();
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
