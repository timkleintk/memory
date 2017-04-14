var plaatjes = [];
var count = 0;
var rp = [];
var randomized = [];
var naam;
var hiders;
var selected = [];
var gevonden = [];
var images = document.getElementsByTagName('img');
var av;
if (document.getElementById('av')) {av = document.getElementById('av').value} else {av = 42}

function startMemo() {
  document.getElementById('hider').innerHTML = "";
  for (i=0; i<av; i++) {
    new plaatje("hider", i);
  }
  
  
  for (i=1; i<(0.5 * av + 1); i++) { //aantal setjes
    plaatjes.push(i);
    plaatjes.push(i);
  }
  randomizer();
  for (i=0; i<av; i++) {
    new plaatje(randomized[i], i);
  }
  check();
}

function geklikt(lv) {
  if (lv.src != "http://timklein.tk/games/memory/doorzichtig.png") {
    //console.log(lv.src);
    lv.src = "http://timklein.tk/games/memory/doorzichtig.png";
    selected.push(lv);
    if (selected[0] && selected[1] && document.getElementById("p" + selected[0].id.substr(1)).src  == document.getElementById("p" + selected[1].id.substr(1)).src) {
      gevonden.push(selected[0]);
      gevonden.push(selected[1]);
      selected.shift();
      selected.shift();
    } else
    if (selected.length > 2) {
      selected[0].src = "http://timklein.tk/games/memory/achterkant.jpg";
      selected[1].src = "http://timklein.tk/games/memory/achterkant.jpg";
      selected.shift();
      selected.shift();
    }
  }
}

function randomizer() {
  for (i = 0; i < av; i++) { //aantal kaartjes totaal
    rp[Math.floor(Math.random()*1000)] = plaatjes[i];
  }
  for (i=0; i<1000; i++) {
    if (rp[i]) {
      randomized.push(rp[i]);
    }
  }
}

function plaatje(id, num) {
  if (id == "hider") {
    this.image = new Image();
    this.image.src = "http://timklein.tk/games/memory/achterkant.jpg";
//    this.image.class = "logo";
    this.image.addEventListener("click", function() {geklikt(this)});
    this.image.id = "h" + num;
    this.image.className = "plaatje";
  document.getElementById('hider').appendChild(this.image);
  }else {
    this.image = new Image();
    this.image.src = "http://timklein.tk/games/memory/plaatje" + id + ".jpg";
    document.getElementById('wrapper').appendChild(this.image);
    this.image.id = "p" + num;
    this.image.className = "plaatje";
  }
}

function check() {
  if (randomized.length != av) {
    randomized = [];
    rp = [];
    plaatjes = [];
    while (images.length > 0) {
      images[0].parentNode.removeChild(images[0]);
    }
    startMemo();
  }
}

function restart() {
  while (gevonden[0]) {
    gevonden[0].src = "http://timklein.tk/games/memory/achterkant.jpg";
    gevonden.shift();
  }
  while (selected[0]) {
    selected[0].src = "http://timklein.tk/games/memory/achterkant.jpg";
    selected.shift();
  }
  randomized = [];
  rp = [];
  plaatjes = [];
  while (images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
  }
  av = document.getElementById('av').value;
  sizeChange(av);
  startMemo();
}

function sizeChange(size) {
  console.log("hoi" + size);
  var x;
  switch (size) {
    case "16":
      x = 416;
      console.log("16");
      break;
    case "20":
      x = 520;
      break;
    case "24":
    case "30":
    case "36":
      x = 624;
      break;
    case "28":
    case "42":
      x = 728;
      break;
  }
  document.getElementById('hider').style.width = x +"px";
  document.getElementById('wrapper').style.width = x +"px";
}