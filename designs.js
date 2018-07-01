// Select color input
// Select size input
var height,width,color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
   event.preventDefault();
   a = $('#inputHeight').val();
   b = $('#inputWeight').val();
   makeGrid(a,b);
})
function makeGrid(a,b) {
  $('tr').remove();
//console.log('Height:'+ height + 'and width:' + width);
// Your code goes here!
for (var i = 1; i <= a; i++) {
     $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
     for (var j = 1; j <= b; j++) {
       $('#table' + i).append('<td></td>');
}
}
$('td').click(function addColor(){
  color=$('#colorPicker').val();
  if($(this).attr('style')){
    $(this).removeAttr('style');
  }else{
    $(this).attr('style','background-color:' + color);
  }
})
}
