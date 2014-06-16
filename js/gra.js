var x = 3;
var y = 3;

function fill(x, y, text) {
    var rows=document.querySelectorAll("tr");
    var row = rows[y];
    var cells=row.querySelectorAll("td");
    var cell = cells[x];
    cell.innerText = text;

}

function read(x, y) {
    var rows=document.querySelectorAll("tr");
    var row = rows[y];
    var cells=row.querySelectorAll("td");
    var cell = cells[x];
    return cell.innerText;

}

window.addEventListener("load",function(event){
  var matches=document.querySelectorAll("td");

var array = _.shuffle(_.range(1,16));
  for (var i=0; i < array.length; i++) {
      matches[i].innerText = array[i];

}

    /*for (i=0; i<=3; i++){
      console.group("i: "+i);
      console.log("i: " +i);
    for (j=0; j<=3; j++){
      console.log("j: " + j);
      var number = 4*i+j+1;
      if (number < 16){
        fill(j,i,number);
      }
    }
    console.groupEnd();
  }*/




});

window.addEventListener("keydown",function(event){
  var old_x = x;
  var old_y = y;

  console.log(event);
  if (event.keyIdentifier == "Up") {
    y-=1;
    if (y<0)

      {y=0}
  }
else if (event.keyIdentifier == "Down") {
  y+=1;
  if (y>3) {y=3}
}
else if (event.keyIdentifier == "Left") {
  x-=1;
  if (x<0) {x=0}
}
else if (event.keyIdentifier == "Right") {
  x+=1;
  if (x>3) {x=3}
}

if(x != old_x || y != old_y){
  var text = read(x,y);
  fill(old_x, old_y, text);
  fill(x, y, "");
   console.log("zmiana pozycji")

} else {
  console.log("Pozycja nie zmieniła się");

}

console.log(" x: " + x + " y: " + y);
})


function isWon(){
  for (var i=0; i<=3; i++){
    for (var j=0; j<=3; j++){
      var number = 4*i+j+1;
      if (number < 16){
       if(number != parseInt(read(j, i),10)) { //zmienia zapis na liczbę dziesiętną
        return false; //funkcja przerwana
       }
      }
    }
  }
  return true;
}

window.addEventListener('keydown', function(){
  if(isWon()) {
    console.log("Yeah, wygrana!")

  }
  else {
      console.log("Próbuj dalej")

  }

})
