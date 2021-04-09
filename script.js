  //Get our persons with their money (you can chage it at your will)
  let person_1 =  1000;  
  let person_2 =  1000;
  let person_3 =  1000;
  let person_4 =  1000;

  document.querySelector('.money_1').innerText= person_1 +"$"
  document.querySelector('.money_2').innerText= person_2 +"$"
  document.querySelector('.money_3').innerText= person_3 +"$"
  document.querySelector('.money_4').innerText= person_4 +"$"

//We divide our persons into pairs (no matter who will be playing with whom)
while(person_1 > 0 && person_2 > 0){
    let coinSide = Math.floor(Math.random()*2)+1; //Simulate coin flip
    if(coinSide===1){
      person_1 = person_1 - 1 // You can change amount of money they lose/win
      person_2 = person_2 + 1
   
    }else if (coinSide===2){
      person_2 = person_2 - 1
      person_1 = person_1 + 1
    }
}

while(person_3 > 0 && person_4 > 0){
  let coinSide = Math.floor(Math.random()*2)+1;
  if(coinSide===1){
    person_3 = person_3 - 1
    person_4 = person_4 + 1
  }else if (coinSide===2){
    person_4 = person_4 - 1
    person_3 = person_3 + 1
  }
}

//Then winners play with each other
if(person_1 > 0 && person_3 > 0){
  while(person_1 > 0 && person_3> 0){
    let coinSide = Math.floor(Math.random()*2)+1;
    if(coinSide===1){
      person_1 = person_1 - 1
      person_3 = person_3 + 1
    }else if (coinSide===2){
      person_3 = person_3 - 1
      person_1 = person_1 + 1
    }
  }

}else if(person_1 > 0 && person_4 > 0){
  while(person_1 > 0 && person_4> 0){
    let coinSide = Math.floor(Math.random() * 2) + 1;
    if(coinSide === 1){
      person_1 = person_1 - 1
      person_4 = person_4 + 1
    }else if (coinSide === 2){
      person_4 = person_4 - 1
      person_1 = person_1 + 1
    }
  }
}else if(person_2 > 0 && person_3 > 0){
  while(person_2 > 0 && person_3 > 0){
    let coinSide = Math.floor(Math.random() * 2) + 1;
    if(coinSide===1){
      person_2 = person_2 - 1
      person_3 = person_3 + 1
    }else if (coinSide === 2){
      person_3 = person_3 - 1
      person_2 = person_2 + 1
    }
  }
}else if(person_2 > 0 && person_4 > 0){
  while(person_2 > 0 && person_4 > 0){
    let coinSide = Math.floor(Math.random() * 2) + 1;
    if(coinSide === 1){
      person_2 = person_2 - 1
      person_4 = person_4 + 1
    }else if (coinSide === 2){
      person_4 = person_4 - 1
      person_2 = person_2 + 1
    }
  }
}
//display after game stats
document.querySelector('.winner-1').innerText= person_1 
document.querySelector('.winner-2').innerText= person_2 
document.querySelector('.winner-3').innerText= person_3 
document.querySelector('.winner-4').innerText= person_4

if(person_1 > 0){
    document.querySelector('.winner-1').innerText= person_1+"$"
}else if (person_2>0){
    document.querySelector('.winner-2').innerText= person_2+"$"
}else if (person_3>0){
    document.querySelector('.winner-3').innerText= person_3+"$"
}else if (person_4>0){
    document.querySelector('.winner-4').innerText= person_4+"$"
}


document.querySelector('.btn-reload').addEventListener("click", function(){window.location.reload()});