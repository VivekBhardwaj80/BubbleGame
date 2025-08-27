let timer = 60;
let score = 0;
let hitRn;
let totalScore;
const makeBubble=()=>{
    let bubleBox = document.querySelector(".bubbels-panel")

    let cluter = "";
    
    for(let i=1; i<=84; i++){
        let randomnumber = Math.floor(Math.random()*10);
        cluter +=`<div class="bubble">${randomnumber}</div>`;
    }
    
    bubleBox.innerHTML = cluter;
}
const timeWatch = ()=>{
    let timeint = setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector(".bubbels-panel").innerHTML = `<h4>Game Over</h4>`;
            document.querySelector("#hitVal").textContent ="-";

        }
    },1000)
}


const hit =()=>{
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent =hitRn;
}

const scoreIncrease = ()=>{
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
};



document.querySelector(".bubbels-panel").addEventListener("click", (details)=>{
    let clickedNumber = Number(details.target.textContent);
    if(clickedNumber == hitRn){
        scoreIncrease();
        makeBubble();
        hit();
    }
})
makeBubble();
timeWatch();
hit();
