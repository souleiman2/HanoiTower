var canvas = document.getElementById('board');
var ctx = canvas.getContext("2d");
var clear = window.getComputedStyle(canvas).getPropertyValue('background-color');
var width = nbrepieces * 6;
var height = nbrepieces;
var tiles_width = canvas.width/width;
var tiles_height = tiles_width;
var answer = "";

function afficherPieces() {

  for (var a = 0; a<nbrepics; a++){
    for(var i = 0; i<pics[a].length ;i++){
      for (var j = 0; j<pics[a][i].length;j++){

        if (pics[a][i][j] == 1){
          ctx.beginPath();
          ctx.rect(tiles_width * j + a*(width/3)*tiles_width , canvas.height - (tiles_height*(i+1)), tiles_width, tiles_height);//pos_x, pos_y, taille_x, taille_y
          ctx.fillStyle = "blue";
          ctx.fill();

        }
        else{
          ctx.beginPath();
          ctx.rect(tiles_width * j + a*(width/3)*tiles_width , canvas.height - (tiles_height*(i+1)), tiles_width, tiles_height);//pos_x, pos_y, taille_x, taille_y
          ctx.fillStyle = clear;
          ctx.fill();
        }

      }
    }
  }

}
function findOther(twoLetters){
  if (twoLetters.indexOf("A") == -1){
    return "A";
  }else if (twoLetters.indexOf("B") == -1) {
    return "B";
  }else if (twoLetters.indexOf("C") == -1){
    return "C";
  }
}

function solution_hanoi(old, rendu, arrive){
  if (rendu == arrive){
    return old;
  }else{
    new_array = old.split(/;/);
    other = "";
    for (var i = 0; i<new_array.length;i++){
      if (i == 0){
        other = findOther(new_array[i]);
        old = new_array[i][0] + other + ";" + new_array[i] + ";" + other + new_array[i][1]

      }else{
        if (other == new_array[i][1]){
          other = findOther(new_array[i]);
          old += ";" + new_array[i] + ";" + other + new_array[i][0];
        }else{
          other = findOther(new_array[i]);
          old += ";" + new_array[i] + ";" + other + new_array[i][1];
        }
      }
    }

    return solution_hanoi(old, rendu+1, arrive);
  }


}
function place(letter){
  switch (letter) {
    case "A":
      return 0;
    case "B":
      return 1;
    case "C":
      return 2;
  }
}

function move(answer, index){

  if (index < answer.length){
    var start = place(answer[index][0]);
    var end = place(answer[index][1]);
    for(var i = 0; i<pics[start][pics[start].length -1].length; i++){
      ctx.beginPath();
      ctx.rect(tiles_width * i + start*(width/3)*tiles_width , canvas.height - (tiles_height*(pics[start].length)), tiles_width, tiles_height);//pos_x, pos_y, taille_x, taille_y
      ctx.fillStyle = clear;
      ctx.fill();
    }
    pics[end].push(pics[start].pop());

    afficherPieces();
  }else{
    clearInterval(move);
  }


}




function main() {

  answer = solution_hanoi("AC", 1, nbrepieces).split(/;/);
  afficherPieces();

  var index = 0;
  setInterval(function(){ move(answer, index++) }, 900);
}
main();
