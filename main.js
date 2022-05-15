





let myContainer1 = document.querySelector('.container1');
let myPlayer1 = document.querySelector('.player1');
let myBullet1 = document.querySelector('.bullet1');



let startAction = anime ({
        targets: myBullet1,
            translateY: [-21, 430],       
            loop:true,
            direction:'alternate',
            rotate: '360',
            easing: 'easeInOutSine',
            autoplay:false,       
});



function runAnimation() {
    startAction.play();
}

function stopAnimation() {
    startAction.pause();
}


let startMove = document.querySelector('.btn1');

startMove.addEventListener('click', runAnimation);

let stopMove = document.querySelector('.btn2');

stopMove.addEventListener('click', stopAnimation);

