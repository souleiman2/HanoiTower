var nbrepieces = parseInt(prompt("Veuillez rentrer le nombre de disk de hanoi que l'ordi doit solutionner (si votre nombre est plus grand que 10 il faudra attendre un bon bout et veuillez le faire plus grand que 0): ", "Number"));
var nbrepics = 3;
var pieces = [];

//creation de l'array pieces
for(var i=0; i<nbrepieces; i++) {
    pieces[i] = [];
    for(var j=0; j<nbrepieces*2; j++) {//pour que je puisse toujours centré les rectangles
        pieces[i][j] = 0;
    }
}

for (var i = 0; i<nbrepieces; i++){
  for (var j = nbrepieces - (i+1)  ; j<= nbrepieces + i ;j++){
    pieces[i][j] = 1;
  }
}


//creation de l'array pics (qui va contenir les 3 planches du jeu)
var pics = [];
for (var i = 0; i<nbrepics;i++){
  pics[i] = new Array();
  if (i == 0){
    for (var j = nbrepieces - 1; j>= 0;j--){
      pics[i].push(pieces[j]);
    }
  }
}
