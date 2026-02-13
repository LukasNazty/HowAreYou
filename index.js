var root=document.querySelector(':root');
let textchange;
let scale = 1;
let count = 0;

function ja()
{
    textchange="i knew you would say yes! 😇";
    document.getElementById("wahl").src= "Bilder/YesEmoji.png"
    document.getElementById('head').innerHTML= textchange;
    root.style.setProperty('--enable', 'visible');
    root.style.setProperty('--disable', 'hidden');
}

let x,xstring,y,ystring;
function nein()
{
    if(count>=4)
    {
        textchange="'No' is not an option... &#x1f62c;";
        document.getElementById('head').innerHTML= textchange;

        root.style.setProperty('--enable', 'visible');

        document.getElementById("wahl").src= "Bilder/128x128Ultramad.webp"
    }


    scale *= 1.5;
    document.getElementById("zustimmen").style.transform = `scale(${scale})`;

    do{
        x=0;
        xstring="vh";
        x= Math.random()*100;
        x=Math.floor(x);
        x=x-60;
    }while(x<-40||x>35);

    do{
        y=0;
        ystring="%";
        y= Math.random()*100;
        y=Math.floor(y);
        y=y-65;
    }while(y<-60||y>35);

    xstring=x+xstring;
    ystring=y+ystring;

    root.style.setProperty('--posX', xstring);
    root.style.setProperty('--posY', ystring);
    
    count++;
}
