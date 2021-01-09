const btn = document.querySelector('button');
const para = document.querySelector('p');
function random(num) {
    return Math.floor(Math.random()*(num+1));
}

 // btn.onfocus=bgChange // The color changes when the button is focused 
 // btn.onblur = bgChange   // The color changes when the button is unfocused 
 // btn.ondblclick = bgChange //The color changes only when the button is double-clicked.
 /* window.onkeypress = bgChange
    window.onkeydown = bgChange
    window.onkeyup = bgChange 
 The color changes when a key is pressed on the keyboard. The keypress event refers to a general press (button down and then up), 
 while keydown and keyup refer to just the key down and key up parts of the keystroke, respectively. 
 Note: It doesn't work if you try to register this event handler on the button itself 
 — we've had to register it on the window object, which represents the entire browser window.*/
/*  btn.onmouseover = bgChange
    btn.onmouseout = bgChange
    he color changes when the mouse pointer hovers over the button, or when the pointer moves off the button, respectively.*/

function bgChange() {
    const rndCol =`rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    console.log(rndCol); 
    console.log();
}

btn.addEventListener('click',bgChange);

function bgChange2(evt) {
    const rndCol =`rgb(${random(255)},${random(255)},${random(255)})`;
    evt.target.style.backgroundColor = rndCol;
    console.log(rndCol); 
    console.log(evt);
}

btn.addEventListener('click',bgChange2);