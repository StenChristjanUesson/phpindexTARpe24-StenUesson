function eestiLipp(){
    //määrame tahvli
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d") // anname tahvlinimi on t
        l.fillStyle="blue";
        l.fillRect(0,0,330,70);
        l.fillStyle="black";
        l.fillRect(0,70,330,70);
        l.fillStyle="white";
        l.fillRect(0,140,330,70);
    }
}

function prantsusmaa(){
    //määrame tahvli
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d") // anname tahvlinimi on t
        l.fillStyle="rgb(0, 85, 164)";
        l.fillRect(0,0,110,210);
        l.fillStyle="white";
        l.fillRect(110,0,220,210);
        l.fillStyle="rgb(239, 65, 53)";
        l.fillRect(220,0,330,210);
    }
}

function jaapan(){
    //määrame tahvli
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d") // anname tahvlinimi on t
        l.beginPath();
        l.strokeStyle="black";
        l.linewidth = 5;
        //ring
        l.beginPath();
        l.linewidth = 5;
        l.fillStyle="red";
        l.arc(165,105, 65, 20, 2*Math.PI, true) //x, y-keskpunkt, Radius
        l.fill();
    }
}

function puhastalipp(){
    //määrame tahvli
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l=lipp.getContext("2d") // anname tahvlinimi on t
        l.clearRect(0,0,330,210) // 0,0 -vasak üleval tahvli nurk, 300-tahvli laius, 250- tahvli kõrgus
    }
}