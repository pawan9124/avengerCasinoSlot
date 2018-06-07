import valueJson from '../assets/json/value.json';

export default class payLine {
  
  static calculateWin(curr){
    console.log("CURRENT",curr);
    let level = parseFloat(document.getElementById('levelInput').value);
    const amount3 = this.caclulate3Line(curr,level);
    const amount2 = this.caclulate2Line(curr,level);
    const amount1 = this.caclulate1Line(curr,level);
    const amount4 = this.caclulate4Line(curr,level);
    const amount5 = this.caclulate5Line(curr,level);

     return (amount3 + amount2 + amount1 + amount4 + amount5);
     // console.log("amount3",amount3);
  }

  //for the line 3 calculation
static caclulate3Line(array,level){
    // if(((array[0][0] === array[1][1]) && ( array[0][0] === array[2][2]))
    //   ||((array[2][2] === array[3][1]) && ( array[2][2] === array[4][0]))){
      console.error("LINE 3 hit");
        let count = 3;
        let getCharacterImage = require(`../assets/symbols3/${array[2][2]}.gif`); 
        //counting the appeareance of the symbols
        // if(array[2][2] === array[1][1] && array[2][2] === array[0][0]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(3)");
            node3[0].src = getCharacterImage;

              if(array[2][2] === array[3][1]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
                node4[0].src = getCharacterImage;
                if(array[2][2] === array[4][0]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
                  node5[0].src = getCharacterImage;
                }
              }
        // }

        if(array[2][2] === array[3][1] && array[2][2] === array[4][0]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(3)");
            node3[0].src = getCharacterImage;

              if(array[2][2] === array[1][1]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
                node4[0].src = getCharacterImage;
                if(array[2][2] === array[0][0]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
                  node5[0].src = getCharacterImage;
                }
              }
        }
        

        let getValue = valueJson[array[0][0]][count];
        console.log("getValue",getValue,"level",level);

        let winAmount = getValue * level;

        console.log("totalCount",count,"Amount",winAmount);
        document.getElementById("id3").classList.add("glowBackground");
        document.getElementById("id6").classList.add("glowBackground");
        return winAmount;
        console.log("$(.demo)",$('.demo'));
    // }else{
    //   return 0;
    // }
  }

  //for the line 2 calculation
 static caclulate2Line(array,level){
    if(((array[0][0] === array[1][0]) && ( array[0][0] === array[2][0]))
      ||((array[2][0] === array[3][0]) && ( array[2][0] === array[4][0]))){
      console.error("LINE 2 hit");
        let count = 3;
        let getCharacterImage = require(`../assets/symbols3/${array[2][0]}.gif`); 
        //counting the appeareance of the symbols
        if(array[2][0] === array[0][0] && array[2][0] === array[1][0]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
          node3[0].src = getCharacterImage;

          if(array[2][0] === array[3][0]){
            count++;
            let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
            node4[0].src= getCharacterImage;
            if(array[2][0] === array[4][0]){
              count++;
              let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
              node5[0].src= getCharacterImage;
            }
          }
        }

        if(array[2][0] === array[3][0] && array[2][0] === array[4][0]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
            node3[0].src = getCharacterImage;

              if(array[2][0] === array[1][0]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
                node4[0].src = getCharacterImage;
                if(array[2][0] === array[0][0]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
                  node5[0].src = getCharacterImage;
                }
              }
        }

        let getValue = valueJson[array[0][0]][count];

        let winAmount = getValue * level;

        document.getElementById("id2").classList.add("glowBackground");
        document.getElementById("id7").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

  //for the line 1 calculation
 static caclulate1Line(array,level){
    if(((array[0][1] === array[1][1]) && ( array[0][1] === array[2][1]))
      ||((array[2][1] === array[3][1]) && ( array[2][1] === array[4][1]))){
      console.error("LINE 1 hit");
        let count = 3;
        let getCharacterImage = require(`../assets/symbols3/${array[2][1]}.gif`); 
        //counting the appeareance of the symbols
        if(array[2][1] === array[0][1] && array[2][0] === array[1][1]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
          node3[0].src = getCharacterImage;

          if(array[2][1] === array[3][1]){
            count++;
            let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
            node4[0].src= getCharacterImage;
            if(array[2][1] === array[4][1]){
              count++;
              let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
              node5[0].src= getCharacterImage;
            }
          }
        }

        if(array[2][1] === array[3][1] && array[2][0] === array[4][1]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
            node3[0].src = getCharacterImage;

              if(array[2][1] === array[1][1]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
                node4[0].src = getCharacterImage;
                if(array[2][0] === array[0][1]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
                  node5[0].src = getCharacterImage;
                }
              }
        }

        let getValue = valueJson[array[0][1]][count];

        let winAmount = getValue * level;

        document.getElementById("id1").classList.add("glowBackground");
        document.getElementById("id8").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

  //for the line 4 calculation
 static caclulate4Line(array,level){
    if(((array[0][2] === array[1][2]) && ( array[0][2] === array[2][2]))
      ||((array[2][2] === array[3][2]) && ( array[2][2] === array[4][2]))){
      console.error("LINE 4 hit");
        let count = 3;
        let getCharacterImage = require(`../assets/symbols3/${array[2][2]}.gif`); 
        //counting the appeareance of the symbols
        if(array[2][2] === array[0][2] && array[2][2] === array[1][2]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(3)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(3)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(3)");
          node3[0].src = getCharacterImage;

          if(array[2][2] === array[3][2]){
            count++;
            let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(3)");
            node4[0].src= getCharacterImage;
            if(array[2][1] === array[4][2]){
              count++;
              let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(3)");
              node5[0].src= getCharacterImage;
            }
          }
        }

        if(array[2][2] === array[3][2] && array[2][2] === array[4][2]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(3)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(3)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(3)");
            node3[0].src = getCharacterImage;

              if(array[2][2] === array[1][2]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(3)");
                node4[0].src = getCharacterImage;
                if(array[2][2] === array[0][2]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(3)");
                  node5[0].src = getCharacterImage;
                }
              }
        }

        let getValue = valueJson[array[0][2]][count];

        let winAmount = getValue * level;
        document.getElementById("id4").classList.add("glowBackground");
        document.getElementById("id9").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

  //for the line 5 calculation
 static caclulate5Line(array,level){
    if(((array[0][2] === array[1][1]) && ( array[0][2] === array[2][0]))
      ||((array[2][0] === array[3][1]) && ( array[2][0] === array[4][2]))){
      console.error("LINE 5 hit");
        let count = 3;
        let getCharacterImage = require(`../assets/symbols3/${array[2][0]}.gif`); 
        //counting the appeareance of the symbols
        if(array[2][0] === array[0][2] && array[2][0] === array[1][1]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(3)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
          node3[0].src = getCharacterImage;

          if(array[2][0] === array[3][1]){
            count++;
            let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
            node4[0].src= getCharacterImage;
            if(array[2][0] === array[4][2]){
              count++;
              let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(3)");
              node5[0].src= getCharacterImage;
            }
          }
        }

        if(array[2][0] === array[3][1] && array[2][0] === array[4][2]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(3)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
            node3[0].src = getCharacterImage;

              if(array[2][0] === array[1][1]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
                node4[0].src = getCharacterImage;
                if(array[2][0] === array[0][2]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(3)");
                  node5[0].src = getCharacterImage;
                }
              }
        }


        let getValue = valueJson[array[0][2]][count];

        let winAmount = getValue * level;
        document.getElementById("id10").classList.add("glowBackground");
        document.getElementById("id15").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

  static caclulate6Line(array,level){
    if(((array[2][1] === array[1][0]) && ( array[2][1] === array[0][0]))
      ||((array[2][1] === array[3][1]) && ( array[2][1] === array[4][1]))){
      console.error("LINE 6 hit");
        let count = 3;
        let getCharacterImage = require(`../assets/symbols3/${array[2][1]}.gif`); 
        //counting the appeareance of the symbols
        if(array[2][1] === array[1][0] && array[2][1] === array[0][0]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
          node3[0].src = getCharacterImage;

          if(array[2][1] === array[3][1]){
            count++;
            let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
            node4[0].src= getCharacterImage;
            if(array[2][1] === array[4][1]){
              count++;
              let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
              node5[0].src= getCharacterImage;
            }
          }
        }

        if(array[2][1] === array[3][1] && array[2][1] === array[4][1]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
            node3[0].src = getCharacterImage;

              if(array[2][1] === array[1][0]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
                node4[0].src = getCharacterImage;
                if(array[2][1] === array[0][0]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
                  node5[0].src = getCharacterImage;
                }
              }
        }


        let getValue = valueJson[array[0][2]][count];

        let winAmount = getValue * level;
        document.getElementById("id11").classList.add("glowBackground");
        document.getElementById("id16").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

  static caclulate7Line(array,level){
    if(((array[2][0] === array[1][0]) && ( array[2][0] === array[0][1]))
      ||((array[2][0] === array[3][0]) && ( array[2][0] === array[4][1]))){
      console.error("LINE 7 hit");
        let count = 3;
        let getCharacterImage = require(`../assets/symbols3/${array[2][0]}.gif`); 
        //counting the appeareance of the symbols
        if(array[2][0] === array[1][0] && array[2][0] === array[0][1]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
          node3[0].src = getCharacterImage;

          if(array[2][0] === array[3][0]){
            count++;
            let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
            node4[0].src= getCharacterImage;
            if(array[2][0] === array[4][1]){
              count++;
              let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
              node5[0].src= getCharacterImage;
            }
          }
        }

        if(array[2][0] === array[3][0] && array[2][0] === array[4][1]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
            node3[0].src = getCharacterImage;

              if(array[2][0] === array[1][0]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
                node4[0].src = getCharacterImage;
                if(array[2][0] === array[0][1]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
                  node5[0].src = getCharacterImage;
                }
              }
        }


        let getValue = valueJson[array[0][2]][count];

        let winAmount = getValue * level;
        document.getElementById("id12").classList.add("glowBackground");
        document.getElementById("id17").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

 static caclulate8Line(array,level){
    if(((array[2][1] === array[1][0]) && ( array[2][1] === array[0][1]))
      ||((array[2][1] === array[3][0]) && ( array[2][1] === array[4][1]))){
      console.error("LINE 8 hit");
        let count = 3;
        let getCharacterImage = require(`../assets/symbols3/${array[2][1]}.gif`); 
        //counting the appeareance of the symbols
        if(array[2][1] === array[1][0] && array[2][1] === array[0][1]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
          node3[0].src = getCharacterImage;

          if(array[2][1] === array[3][0]){
            count++;
            let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
            node4[0].src= getCharacterImage;
            if(array[2][1] === array[4][1]){
              count++;
              let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
              node5[0].src= getCharacterImage;
            }
          }
        }

        if(array[2][1] === array[3][0] && array[2][1] === array[4][1]){
          let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
            node1[0].src = getCharacterImage;

            let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
            node2[0].src = getCharacterImage;

            let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
            node3[0].src = getCharacterImage;

              if(array[2][1] === array[1][0]){
                count++;
                let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
                node4[0].src = getCharacterImage;
                if(array[2][1] === array[0][1]){
                  count++;
                  let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
                  node5[0].src = getCharacterImage;
                }
              }
        }


        let getValue = valueJson[array[0][2]][count];

        let winAmount = getValue * level;
        document.getElementById("id13").classList.add("glowBackground");
        document.getElementById("id18").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

 static caclulate9Line(array,level){
    if(((array[2][1] === array[1][1]) && ( array[2][1] === array[0][0]))
    ||((array[2][1] === array[3][1]) && ( array[2][1] === array[4][0]))){
    console.error("LINE 9 hit");
      let count = 3;
      let getCharacterImage = require(`../assets/symbols3/${array[2][1]}.gif`); 
      //counting the appeareance of the symbols
      if(array[2][1] === array[1][1] && array[2][1] === array[0][0]){
        let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
        node1[0].src = getCharacterImage;

        let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
        node2[0].src = getCharacterImage;

        let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
        node3[0].src = getCharacterImage;

        if(array[2][1] === array[3][1]){
          count++;
          let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
          node4[0].src= getCharacterImage;
          if(array[2][1] === array[4][0]){
            count++;
            let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
            node5[0].src= getCharacterImage;
          }
        }
      }

      if(array[2][1] === array[3][1] && array[2][1] === array[4][0]){
        let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
          node3[0].src = getCharacterImage;

            if(array[2][1] === array[1][1]){
              count++;
              let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
              node4[0].src = getCharacterImage;
              if(array[2][1] === array[0][0]){
                count++;
                let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
                node5[0].src = getCharacterImage;
              }
            }
      }


        let getValue = valueJson[array[0][2]][count];

        let winAmount = getValue * level;
        document.getElementById("id14").classList.add("glowBackground");
        document.getElementById("id19").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

  static caclulate10Line(array,level){
    if(((array[2][0] === array[1][1]) && ( array[2][0] === array[0][1]))
    ||((array[2][0] === array[3][1]) && ( array[2][0] === array[4][1]))){
    console.error("LINE 10 hit");
      let count = 3;
      let getCharacterImage = require(`../assets/symbols3/${array[2][0]}.gif`); 
      //counting the appeareance of the symbols
      if(array[2][0] === array[1][1] && array[2][0] === array[0][1]){
        let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
        node1[0].src = getCharacterImage;

        let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
        node2[0].src = getCharacterImage;

        let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
        node3[0].src = getCharacterImage;

        if(array[2][0] === array[3][1]){
          count++;
          let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
          node4[0].src= getCharacterImage;
          if(array[2][0] === array[4][1]){
            count++;
            let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
            node5[0].src= getCharacterImage;
          }
        }
      }

      if(array[2][0] === array[3][1] && array[2][0] === array[4][1]){
        let node1 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
          node1[0].src = getCharacterImage;

          let node2 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
          node2[0].src = getCharacterImage;

          let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
          node3[0].src = getCharacterImage;

            if(array[2][0] === array[1][1]){
              count++;
              let node4 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
              node4[0].src = getCharacterImage;
              if(array[2][0] === array[0][1]){
                count++;
                let node5 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
                node5[0].src = getCharacterImage;
              }
            }
      }


        let getValue = valueJson[array[0][2]][count];

        let winAmount = getValue * level;
        document.getElementById("id15").classList.add("glowBackground");
        document.getElementById("id20").classList.add("glowBackground");
        console.log("totalCount",count,"Amount",winAmount);
        return winAmount;
        
    }else{
      return 0;
    }
  }

  //TO hide the lines
  //*******************************

  static hideLines(){
    var childDivs = document.getElementById('reels').getElementsByTagName('img');
      for( let i=0; i< childDivs.length; i++ ){
        console.log("childDivs[i]",childDivs[i]);
        childDivs[i].removeAttribute('style');
      }
  }

//************************************
  //to display the line
  static displayLine3(){

    //to remove the lines
    this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(3)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine2(){

    //to remove the lines
    this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine1(){

   //to remove the lines
    this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine4(){

    //to remove the lines
      this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(3)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(3)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(3)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(3)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(3)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine5(){

    //to remove the lines
        this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(3)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(3)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine6(){

    //to remove the lines
        this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine7(){

    //to remove the lines
        this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine8(){

    //to remove the lines
        this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(1)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(1)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine9(){

    //to remove the lines
        this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(1)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(2)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(1)");
    node5[0].style.border = "8px solid yellow";
  }

  static displayLine10(){

    //to remove the lines
        this.hideLines();

    let node1 = document.querySelectorAll("#reels > div:nth-child(1) > div > img:nth-child(2)");
    node1[0].style.border = "8px solid yellow";

    let node2 = document.querySelectorAll("#reels > div:nth-child(2) > div > img:nth-child(2)");
    node2[0].style.border = "8px solid yellow";

    let node3 = document.querySelectorAll("#reels > div:nth-child(3) > div > img:nth-child(1)");
    node3[0].style.border = "8px solid yellow";

    let node4 = document.querySelectorAll("#reels > div:nth-child(4) > div > img:nth-child(2)");
    node4[0].style.border = "8px solid yellow";

    let node5 = document.querySelectorAll("#reels > div:nth-child(5) > div > img:nth-child(2)");
    node5[0].style.border = "8px solid yellow";
  }

  
}
