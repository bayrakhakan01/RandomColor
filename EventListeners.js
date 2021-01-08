const btn = document.querySelector('button');
const para = document.querySelector('p');
function random(num) {
    return Math.floor(Math.random()*(num+1));
}

btn.onclick =function () {
    const rndCol =`rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    console.log(rndCol); 
}