let userscore = 0;
let pcscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById("msg")
const userscorepara = document.querySelector('#userscore')
const PCscorepara = document.querySelector('#pcscore')


const genPCchoice = () => {
    const options = ['rock' , 'paper' , 'scissors'];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const drawgame = () => {
    console.log("Game was a draw");
    msg.innerText = 'Game was a Draw! play again'
    msg.style.backgroundColor = "#f3b61f"
}

const showWinner = (userwin , userchoice, PCchoice) => {
    if (userwin){
         userscore++ ;
         userscorepara.innerText = userscore
        msg.innerText = `You Win! your ${userchoice} beats ${PCchoice}`;
        msg.style.backgroundColor = "green"
       } else {
          pcscore++ ;
          PCscorepara.innerText = pcscore
        msg.innerText = `You loose! ${PCchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red"
       }
}

const playgame = (userchoice) => {          // idhar user and pc kie choices print hokai ayaigie
     // console.log("user choice is = " , userchoice);
      // generate pc choice
      const PCchoice = genPCchoice();
      //console.log("PC choice is = " , PCchoice);


      if(userchoice === PCchoice){
        drawgame()   // draw game
      } else {
        let userwin = true;
        if (userchoice === 'rock') {
            // paper , scissor
            userwin = PCchoice === 'paper' ? false : true;
        } else if (userchoice === 'paper') {
            // rock , scissor
            userwin = PCchoice === 'scissor' ? false : true;
        } else {
            // paper, rock
            userwin = PCchoice === 'rock' ? false : true;
        }  
        showWinner(userwin , userchoice, PCchoice);
      }
}

choices.forEach ( (choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })

})