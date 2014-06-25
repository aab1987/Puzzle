
var x = 2;
var y = 2;

/*for(i=1;i<3;i++) {
  x=document.getElementById("Data1"+i);
  x.innerHTML=[Data1, Data2,Data3,Data4, Data5,Data6,Data7,Data8,Data9] />
// Assuming your images are named [something]NUMBER.jpg
// You could instead use an array
}*/



function fill(x, y, text) {
    var rows=document.querySelectorAll("tr");
    var row = rows[y];
    var cells=row.querySelectorAll("td");
    var cell = cells[x];
    cell.innerHTML = text;

}

function read(x, y) {
    var rows=document.querySelectorAll("tr");
    var row = rows[y];
    var cells=row.querySelectorAll("td");
    var cell = cells[x];
    return cell.innerHTML;

}

window.addEventListener("load",function(event){
  var matches=document.querySelectorAll("td");

var array = _.shuffle(_.range(x,y));
  for (var i=0; i < array.length; i++) {
      matches[i].innerHTML = array[i];

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
  if (y>2) {y=2}
}
else if (event.keyIdentifier == "Left") {
  x-=1;
  if (x<0) {x=0}
}
else if (event.keyIdentifier == "Right") {
  x+=1;
  if (x>2) {x=2}
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
  for (var i=0; i<=2; i++){
    for (var j=0; j<=2; j++){
      var number = 3*i+j+1;
      if (number < 9){
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
