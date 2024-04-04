let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
   const option=["rock","paper","scissors"];
  const randIdx=Math.floor(Math.random()*3);
  return option[randIdx];
};

const drawgame=()=>{
    msg.innerText="game is draw . play again";
    msg.style.backgroundColor="purple";
  }

const showwin=(userwin,userchoice,compchoice)=>{
   if(userwin===true){
     userScore++;
     userscorepara.innerText=userScore;
    msg.innerText=`you win as ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  }else{
     compScore++;
     compscorepara.innerText=compScore;
    msg.style.backgroundColor="red";
    msg.innerText=`you lose as ${compchoice} beats ${userchoice}`;
  }
}
const playGame=(userchoice)=>{
   console.log("user choice =",userchoice);
      //  Generate computer choice
  const compchoice=gencompchoice();   
  console.log("comp choice=",compchoice)

  if(userchoice===compchoice){
    drawgame();
  } else{
    let userwin=true;
    if(userchoice==="rock"){
     userwin= compchoice==="paper" ?false:true;
    }else if(userchoice==="paper"){
        userwin=compchoice==="scissors" ?false:true;
    }else{
      userwin=compchoice==="rock" ?false:true;
    }
    showwin(userwin,userchoice,compchoice);
  }
};

choices.forEach((choice)=>{
  console.log(choice);
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
    });
});