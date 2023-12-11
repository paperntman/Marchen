const pixelSize = 10

let x = 0
let y = 0

let a = false;
let s = false;
let d = false;
let w = false;

window.onload = function () {
    drawFloor(99, 99)
}

function drawFloor() {
    const img = new Image();
    img.src = './img/pixelGroundFixedCopy.png'

    img.addEventListener('load', () => {
        const canvas = document.getElementById("frame");
        canvas.width  = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
        const context = canvas.getContext("2d");
        let sans = 0
        for (let j = 0; j < 100; j++) {
            for (let i = 0; i < 100; i++) {
                let drawX = i*pixelSize*15-j*pixelSize*15-(x*pixelSize*15-y*pixelSize*15)+canvas.width/2-pixelSize*31/2
                let drawY = j*pixelSize*7+i*pixelSize*7-(x*pixelSize*7+y*pixelSize*7)+canvas.height/2-pixelSize*33/2;
                if(drawX < -pixelSize*31 || canvas.width < drawX) continue;
                if(drawY < -pixelSize*33 || canvas.height < drawY) continue;
                context.drawImage(img, drawX, drawY, pixelSize*31, pixelSize*33)
                sans++;
            }
        }
    })
}

setInterval(()=> {
    if (a) x-=0.15;
    if (s) y+=0.15;
    if (d) x+=0.15;
    if (w) y-=0.15;
    drawFloor()
}, 50)

document.addEventListener('keydown', event => {
    console.log("%s down", event.key)
    switch (event.key) {
        case 'a':{
            a = true;
            s = false;
            d = false;
            w = false;
            //x-=0.15;
            break;
        }
        case 's':{
            a = false;
            s = true;
            d = false;
            w = false;
            //y+=0.15;
            break;
        }
        case 'd':{
            a = false;
            s = false;
            d = true;
            w = false;
            //x+=0.15;
            break;
        }
        case 'w':{
            a = false;
            s = false;
            d = false;
            w = true;
            //y-=0.15;
            break;
        }
    }
})
document.addEventListener('keyup', event => {
    console.log("%s up", event.key)
    switch (event.key) {
        case 'a':{
            a = false;
            //x-=0.15;
            break;
        }
        case 's':{
            s = false;
            //y+=0.15;
            break;
        }
        case 'd':{
            d = false;
            //x+=0.15;
            break;
        }
        case 'w':{
            w = false;
            //y-=0.15;
            break;
        }
    }
})