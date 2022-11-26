let input = document.getElementById("input");
let start= document.getElementById("start");
let count = document.getElementById("count");
let alert = document.getElementById("alert");

start.addEventListener("click", ()=>{
    if(start.innerText==="Start CountDown"){
        if(!isNaN(input.value)){
            let counter= Math.floor(input.value);
            start.innerText= "CountDown Running...";
            count.classList.remove("invisible");
            count.innerText= counter;
            const int = setInterval(()=>{
                counter--;
                if(counter===0){
                    clearInterval(int);
                    start.innerText=" Start Countdown";
                    alertPop.classList.remove("hidden");
                    alertPop.classList.add("flex");
                    count.classList.add("invisible");
                    setTimeout(()=>{
                        alertPop.classList.add("flex");
                        alertPop.classList.remove("hidden");
                    }, 1200);
                }
                count.innerText= counter;
            },1000)
        }else{
            alert("Ad a valid number");
        }
    }
});