import Symbol from './Symbol.js';

export default class Reel {
  constructor(reelContainer, idx, initialSymbols) {
    // console.log("reelConatiner",reelContainer,"\nidx",idx,"\ninitialSymbols=",initialSymbols);

    this.reelContainer = reelContainer;
    this.idx = idx;

    this.symbolContainer = document.createElement('div');
    this.symbolContainer.classList.add('icons');
    this.reelContainer.appendChild(this.symbolContainer);

    this.animation = this.symbolContainer.animate([
      { transform: 'none', filter: 'blur(0)' },
      { filter: 'blur(2px)', offset: 0.5 },
      { transform: `translateY(-${((Math.floor(this.factor) * 10) / (3 + Math.floor(this.factor) * 10)) * 100}%)`, filter: 'blur(0)' },
    ], {
      duration: this.factor * 1000,
      easing: 'ease-in-out',
    });
    this.animation.cancel();

    initialSymbols.forEach((symbol) => this.symbolContainer.appendChild((new Symbol(symbol)).img));
    // console.log("symbolContainer",symbolContainer);
  }

  get factor() {
    return (1 + Math.pow(this.idx / 2, 2));
  }

  renderSymbols(currentSymbols, nextSymbols) {
    const fragment = document.createDocumentFragment();

    for(let i = 3; i < 3 + Math.floor(this.factor) * 10; i++) {
      const icon = new Symbol(i >= 10 * Math.floor(this.factor) - 2 ? nextSymbols[i - Math.floor(this.factor) * 10] : undefined);
      fragment.appendChild(icon.img);
    }

    this.symbolContainer.appendChild(fragment);
  }

  sound(src) {
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
}

  spin() {
    const animationPromise = new Promise(resolve => this.animation.onfinish = resolve);
    const timeoutPromise = new Promise(resolve => setTimeout(resolve, this.factor * 1000));
    const spin_reel_tune = require(`../assets/sound/reel_spin_2_c.mp3`);
    const spin_stop_tune = require(`../assets/sound/step_stop_3.mp3`);
    const spin_reel = new this.sound(spin_reel_tune);
    const spin_stop = new this.sound(spin_stop_tune);

    spin_reel.play();

    this.animation.play();

    return Promise.race([animationPromise, timeoutPromise]).then(() => {
      if (this.animation.playState !== 'finished') this.animation.finish();

      const max = this.symbolContainer.children.length - 3;
      
      for(let i = 0; i < max; i++) {
        this.symbolContainer.firstChild.remove();
      }
      spin_stop.play();
    });
  }
}
