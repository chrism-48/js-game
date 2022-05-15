





let myContainer1 = document.querySelector('.container1');
let myPlayer1 = document.querySelector('.player1');
let myBullet1 = document.querySelector('.bullet1');



let startAction = anime ({
        targets: myBullet1,
            translateY: [-29, 344],       
            loop:true,
            duration:1800,
            direction:'alternate',
            rotate: '10turn',
            easing: 'easeInOutQuad',
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

