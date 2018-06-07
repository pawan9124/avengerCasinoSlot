import Reel from './Reel.js';
import Symbol from './Symbol.js';
import payLine from './payLine.js';

let isBackgroundMusicPlay = true;
let backgroundMusicTune = require(`../assets/sound/background.mp3`);
let backgroundMusic = new sound(backgroundMusicTune);
backgroundMusic.volume(.2);

function  sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
    this.volume = function(param){
      this.sound.volume = param;
    }    
}


export default class Slot {
  constructor(domElement) {
    Symbol.preload();
    // this.playBackgroundMusic(true);

    this.currentSymbols = [
      ['death_star', 'death_star', 'death_star'],
      ['death_star', 'death_star', 'death_star'],
      ['death_star', 'death_star', 'death_star'],
      ['death_star', 'death_star', 'death_star'],
      ['death_star', 'death_star', 'death_star'],
    ];

    this.nextSymbols = [
      ['death_star', 'death_star', 'death_star'],
      ['death_star', 'death_star', 'death_star'],
      ['death_star', 'death_star', 'death_star'],
      ['death_star', 'death_star', 'death_star'],
      ['death_star', 'death_star', 'death_star'],
    ]

    this.container = domElement;

    console.log("domElement==>",domElement);

    this.reels = Array.from(this.container.getElementsByClassName('reel')).map((reelContainer, idx) => new Reel(reelContainer, idx, this.currentSymbols[idx]));

    this.banner = document.getElementById('banner');
    banner.src = require('../assets/banner.png');

    this.myVideo = document.getElementById('myVideo');
    myVideo.src = require('../assets/background.mp4');
    
    this.spinButton = document.getElementById('spin');
    this.spinButton.addEventListener('click', () => {this.spin()});

    this.increaseLevel = document.getElementById('increaseLevel');
    this.increaseLevel.addEventListener('click', () => this.increaseLevelCount());

    this.decreaseLevel = document.getElementById('decreaseLevel');
    this.decreaseLevel.addEventListener('click', () => this.decreaseLevelCount());

    this.increaseValue = document.getElementById('increaseValue');
    this.increaseValue.addEventListener('click', () => this.increaseValueCount());

    this.decreaseValue = document.getElementById('decreaseValue');
    this.decreaseValue.addEventListener('click', () => this.decreaseValueCount());

    this.id_1 = document.getElementById('1');
    this.id_1.addEventListener('click', () => payLine.displayLine1());

    this.id_2 = document.getElementById('2');
    this.id_2.addEventListener('click', () => payLine.displayLine2());

    this.id_3 = document.getElementById('3');
    this.id_3.addEventListener('click', () => payLine.displayLine3());

    this.id_4 = document.getElementById('4');
    this.id_4.addEventListener('click', () => payLine.displayLine4());

    this.id_5 = document.getElementById('5');
    this.id_5.addEventListener('click', () => payLine.displayLine5());

    this.id_6 = document.getElementById('6');
    this.id_6.addEventListener('click', () => payLine.displayLine3());

    this.id_7 = document.getElementById('7');
    this.id_7.addEventListener('click', () => payLine.displayLine2());

    this.id_8 = document.getElementById('8');
    this.id_8.addEventListener('click', () => payLine.displayLine1());

    this.id_9 = document.getElementById('9');
    this.id_9.addEventListener('click', () => payLine.displayLine4());

    this.id_10 = document.getElementById('10');
    this.id_10.addEventListener('click', () => payLine.displayLine5());

    this.id_11 = document.getElementById('11');
    this.id_11.addEventListener('click', () => payLine.displayLine6());

    this.id_12 = document.getElementById('12');
    this.id_12.addEventListener('click', () => payLine.displayLine7());

    this.id_13 = document.getElementById('13');
    this.id_13.addEventListener('click', () => payLine.displayLine8());

    this.id_14 = document.getElementById('14');
    this.id_14.addEventListener('click', () => payLine.displayLine9());

    this.id_15 = document.getElementById('15');
    this.id_15.addEventListener('click', () => payLine.displayLine10());

    this.id_16 = document.getElementById('16');
    this.id_16.addEventListener('click', () => payLine.displayLine6());

    this.id_17 = document.getElementById('17');
    this.id_17.addEventListener('click', () => payLine.displayLine7());

    this.id_18 = document.getElementById('18');
    this.id_18.addEventListener('click', () => payLine.displayLine8());

    this.id_19 = document.getElementById('19');
    this.id_19.addEventListener('click', () => payLine.displayLine9());

    this.id_20 = document.getElementById('20');
    this.id_20.addEventListener('click', () => payLine.displayLine10());

    //**********************************************************************
    //to sync the images in the game 
    this.decreaseValue.src = require('../assets/icons/minus.png');
    this.increaseValue.src = require('../assets/icons/add.png'); 
    
    this.decreaseLevel.src = require('../assets/icons/minus.png');
    this.increaseLevel.src = require('../assets/icons/add.png');    

    this.id3 = document.getElementById('id3');
    id3.src = require('../assets/icons/Avengers-Black-Widow-icon.png');

    this.id2 = document.getElementById('id2');
    id2.src = require('../assets/icons/Avengers-Hulk-icon.png');

    this.id1 = document.getElementById('id1');
    id1.src = require('../assets/icons/Avengers-Iron-Man-icon (1).png');

    this.id4 = document.getElementById('id4');
    id4.src = require('../assets/icons/Avengers-Loki-icon.png');

    this.id5 = document.getElementById('id5');
    id5.src = require('../assets/icons/Avengers-Captain-America-icon.png');

     this.id6 = document.getElementById('id6');
    id6.src = require('../assets/icons/Avengers-Black-Widow-icon.png');

    this.id7 = document.getElementById('id7');
    id7.src = require('../assets/icons/Avengers-Hulk-icon.png');

    this.id8 = document.getElementById('id8');
    id8.src = require('../assets/icons/Avengers-Iron-Man-icon (1).png');

    this.id9 = document.getElementById('id9');
    id9.src = require('../assets/icons/Avengers-Loki-icon.png');

    this.id10 = document.getElementById('id10');
    id10.src = require('../assets/icons/Avengers-Captain-America-icon.png');

    this.id11 = document.getElementById('id11');
    id11.src = require('../assets/icons/Comics-Avengers-icon.png');

    this.id12 = document.getElementById('id12');
    id12.src = require('../assets/icons/Avengers-Hawkeye-icon.png');

    this.id13 = document.getElementById('id13');
    id13.src = require('../assets/icons/Avengers-Nick-Fury-icon.png');

    this.id14 = document.getElementById('id14');
    id14.src = require('../assets/icons/Avengers-Thor-icon.png');

    this.id15 = document.getElementById('id15');
    id15.src = require('../assets/icons/Avengers-War-Machine-icon.png');

    this.id16 = document.getElementById('id16');
    id16.src = require('../assets/icons/Comics-Avengers-icon.png');

    this.id17 = document.getElementById('id17');
    id17.src = require('../assets/icons/Avengers-Hawkeye-icon.png');

    this.id18 = document.getElementById('id18');
    id18.src = require('../assets/icons/Avengers-Nick-Fury-icon.png');

    this.id19 = document.getElementById('id19');
    id19.src = require('../assets/icons/Avengers-Thor-icon.png');

    this.id20 = document.getElementById('id20');
    id20.src = require('../assets/icons/Avengers-War-Machine-icon.png');

    this.spinImage = document.getElementById('spinImage');
    spinImage.src = require('../assets/icons/captain-america-shield-metal-base1.png');

    this.autoPlayCheckbox = document.getElementById('autoplay');
  }

playBackgroundMusic(flag){
   console.log("Flag",flag);
   if(flag === true){
    console.log("Flag","true");
    backgroundMusic.play();
   }
  else{
    console.log("flag false")
   backgroundMusic.stop();
  }
    
  }

  spin() {

    let totalAmount = parseInt(document.getElementById("displayBet").value);
    if(totalAmount === 0){
      alert("Your balance is low. Please Add.");
      return;
    }

    this.onSpinStart();

    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
    ];

    console.log("Reels",reels);

    return Promise.all(this.reels.map(reel => {
      reel.renderSymbols(this.currentSymbols[reel.idx], this.nextSymbols[reel.idx]);
      return reel.spin();
    })).then(() => this.onSpinEnd());
  }

  onSpinStart() {
    this.spinButton.disabled = true;
    this.playBackgroundMusic(false);
    document.getElementById("displayWin").value =  0;
    document.getElementById("spinImage").classList.add("spinImageCircle");
    var childDivs = document.getElementById('border').getElementsByTagName('img');
      for( let i=0; i< childDivs.length; i++ ){
        console.log("childDivs[i]",childDivs[i]);
        childDivs[i].classList.remove("glowBackground");
      }
      document.getElementById("displayWin").classList.remove("glowBackground");
    console.log('SPIN START');
  }

  onSpinEnd() {
    this.spinButton.disabled = false;
    this.playBackgroundMusic(true);
    let betAmount = parseInt(document.getElementById("totalWager").value);
    let totalAmount = parseInt(document.getElementById("displayBet").value);
    console.log("TotalAmount1",totalAmount);
    totalAmount = totalAmount - betAmount;
    console.log('CurrentSymbols',this.currentSymbols);
    console.log('nextSymbols',this.nextSymbols);
    let winAmount = payLine.calculateWin(this.nextSymbols);
     if(winAmount !== '' && winAmount !== undefined && winAmount > 0){
      totalAmount = totalAmount + winAmount;
      document.getElementById("displayWin").classList.add("glowBackground");
      console.log("winAmount2",winAmount);
     }
     console.log("TotalAmount2",totalAmount);
     document.getElementById("displayBet").value =  totalAmount;
     document.getElementById("displayWin").value =  winAmount;
     document.getElementById("spinImage").classList.remove("spinImageCircle");

    if (this.autoPlayCheckbox.checked) return window.setTimeout(() => this.spin(), 5000);
  }

  increaseLevelCount() {
    let wagerCount = parseInt(document.getElementById('wagerInput').value);
    let getAmount = parseInt(document.getElementById('totalWager').value);
    let getValue = parseFloat(document.getElementById('levelInput').value);
        getValue = getValue * 10;
    let totalAmount = getAmount;
    if(wagerCount < 10){
      wagerCount += 1;
    }
    totalAmount = wagerCount * getValue;
    document.getElementById('totalWager').value =  totalAmount;
    document.getElementById('wagerInput').value = wagerCount;
  }
  decreaseLevelCount() {
    let wagerCount = parseInt(document.getElementById('wagerInput').value);
    let getAmount = parseInt(document.getElementById('totalWager').value);
    let getValue = parseFloat(document.getElementById('levelInput').value);
        getValue = getValue * 10;
    let totalAmount = getAmount;
    if(wagerCount > 1)
    wagerCount -= 1;
    totalAmount = wagerCount * getValue;
    document.getElementById('totalWager').value =  totalAmount;
    document.getElementById('wagerInput').value = wagerCount;
  }

  increaseValueCount(){
    let wagerCount = parseInt(document.getElementById('wagerInput').value);
    let getAmount = parseInt(document.getElementById('totalWager').value);
    let levelCount = parseFloat(document.getElementById('levelInput').value);
    levelCount = levelCount * 10;
    let totalAmount = getAmount;
    if(levelCount < 10){
      levelCount += 1;
    }
    totalAmount = wagerCount * levelCount;
    levelCount = levelCount/10;
    document.getElementById('totalWager').value =  totalAmount;
    document.getElementById('levelInput').value = levelCount;
  }
   decreaseValueCount(){
    let wagerCount = parseInt(document.getElementById('wagerInput').value);
    let getAmount = parseInt(document.getElementById('totalWager').value);
    let levelCount = parseFloat(document.getElementById('levelInput').value);
    levelCount = levelCount * 10;
     let totalAmount = getAmount;
    if(levelCount > 1){
      levelCount -= 1;
    }
    totalAmount = wagerCount * levelCount;
    levelCount = levelCount/10;
    document.getElementById('totalWager').value =  totalAmount;
    document.getElementById('levelInput').value = levelCount;
  }
}
