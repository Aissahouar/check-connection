let tilte = document.querySelector('.title');
let instructions = document.querySelector('.instructions');
let button = document.querySelector('button');

window.onload = function(){
    if(window.navigator.onLine){
        online();
    }else{
        offline();
    }
}

window.addEventListener("offline",()=>{
    offline();
});

window.addEventListener("online",()=>{
    online();
});

function online(){
    tilte.innerHTML = 'Online Now';
    tilte.style.color = 'rgb(7, 224, 61)';
    instructions.classList.add('hide');
}

function offline(){
    tilte.innerHTML = 'Offline Now';
    tilte.style.color = 'red';
    instructions.classList.remove('hide');
}

button.addEventListener("click",()=>{
    window.location.reload();
})