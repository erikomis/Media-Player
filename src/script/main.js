const inputRange = document.getElementById("duracao");
const time = document.getElementById("time");
const audio = document.getElementById("audio");

let musicas = [
  "../../src/Musicas/01-Heavydirtysoul.mp3",
  "../../src/Musicas/02-StressedOut.mp3",
  "../../src/Musicas/03-Ride.mp3",
  "../../src/Musicas/04-FairlyLocal.mp3",
  "../../src/Musicas/05-TearInMyHeart.mp3",
  "../../src/Musicas/06-LaneBoy.mp3",
  "../../src/Musicas/07-TheJudge.mp3",
  "../../src/Musicas/08-Doubt.mp3",
  "../../src/Musicas/09-Polarize.mp3",
  "../../src/Musicas/10-WeDon'tBelieveWhat'sOnTV.mp3",
  "../../src/Musicas/11-MessageMan.mp3",
];

let quantidadeDemusicas = 0;
function criaLista() {
  let musicas = [
    "Heavydirtysoul",
    "stressed out",
    "ride",
    "Fairly Local",
    "Tear in my Heart",
    "Lane boy",
    "The judge",
    "Dout",
    "Polarize",
    " We Don't Believe What's On TV",
    "Message Man",
  ];

  for (let i = 0; i < musicas.length; i++) {
    let lista = document.getElementById("lista").innerHTML;
    lista = lista + `<li>${i + 1}. ${musicas[i]}</li>`;
    document.getElementById("lista").innerHTML = lista;
  }
}

function avancar() {
  if (quantidadeDemusicas < 10) {
    quantidadeDemusicas += 1;
    console.log(quantidadeDemusicas);
    audio.setAttribute("src", musicas[quantidadeDemusicas]);
    console.log(musicas[quantidadeDemusicas]);
    fazAparecerBotaoDePause();
    fazSumirBotaoDePlay();
    audio.play();
  } else {
    quantidadeDemusicas = 0;
    audio.setAttribute("src", musicas[1]);
    fazAparecerBotaoDePause();
    fazSumirBotaoDePlay();
    audio.play();
  }
}

function retroceder() {
  if (quantidadeDemusicas > 0) {
    quantidadeDemusicas -= 1;
    console.log(quantidadeDemusicas);
    audio.setAttribute("src", musicas[quantidadeDemusicas]);
    console.log(musicas[quantidadeDemusicas]);
    fazAparecerBotaoDePause();
    fazSumirBotaoDePlay();
    audio.play();

    audio.play();
  } else {
    quantidadeDemusicas = 0;
    console.log(quantidadeDemusicas);
    audio.setAttribute("src", musicas[1]);
    console.log(musicas[quantidadeDemusicas]);
    fazAparecerBotaoDePause();
    fazSumirBotaoDePlay();
    audio.play();
  }
}

function play() {
  duracao();
  audio.play();
  fazAparecerBotaoDePause();
  fazSumirBotaoDePlay();
}

function pausar() {
  audio.pause();
  fazAparecerBotaoDePlay();
  FazSumirBotaoDePause();
}

function fazAparecerBotaoDePlay() {
  const play = document.getElementById("play");
  play.style.display = "inline-block";
}

function fazSumirBotaoDePlay() {
  const play = document.getElementById("play");
  play.style.display = "none";
}

function fazAparecerBotaoDePause() {
  const pause = document.getElementById("pausar");
  pause.style.display = "inline-block";
}

function FazSumirBotaoDePause() {
  const pause = document.getElementById("pausar");
  pause.style.display = "none";
}

function duracao() {
  const duracao = document.getElementById("duracao");
  duracao.audio.duracao();
}

inputRange.addEventListener("input", () => {
  audio.currentTime = inputRange.value;
});

function duracao() {
  setInterval(() => {
    inputRange.setAttribute("max", audio.duration);
    inputRange.value = audio.currentTime;

    let min = Math.floor(audio.currentTime / 60);
    let displayMin = (min < 10 ? "0" : "") + min;
    let sec = Math.round(audio.currentTime % 60);
    let displaySec = (sec < 10 ? "0" : "") + sec;
    time.innerHTML = `${displayMin} : ${displaySec}`;
  }, 400);
}

criaLista();
