//Sirge joon
function Sirgejoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        //joon
        t.beginPath();
        t.strokeStyle="black";
        t.linewidth = 5;
        t.moveTo(20, 80); //alguspunkt
        t.lineTo(50, 100); //lõpp punkt
        t.stroke();
    }
}

function kolmnurk(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        //joon
        t.beginPath();
        t.strokeStyle="black";
        t.fillStyle="red"; //taust
        t.linewidth = 5;
        t.moveTo(50, 100); //alguspunkt
        t.lineTo(150, 100); //lõpp punkt
        t.lineTo(150, 200); //alguspunkt
        t.lineTo(50, 100); //alguspunkt
        t.stroke();
        t.fill();
    }
}

function puhasta(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        t.clearRect(0,0,300,250) // 0,0 -vasak üleval tahvli nurk, 300-tahvli laius, 250- tahvli kõrgus
    }
}

//ring
function ring(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        //ümberjoon
        t.beginPath();
        t.strokeStyle="black";
        t.linewidth = 5;
        t.fillStyle="red"; //taust
        t.arc(50,50, 30, 0, 2*Math.PI, true) //x, y-keskpunkt, Radius
        t.stroke();
        t.fill();
        //ring
        t.beginPath();
        t.linewidth = 5;
        t.fillStyle="red"; //taust
        t.arc(50,120, r.value, 0, 2*Math.PI, true) //x, y-keskpunkt, Radius
        t.fill();
    }
}

function ristkylik(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    let laius=document.getElementById("laius");
    let korgus=document.getElementById("kõrgus");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        t.fillStyle="";
        t.FillRect(50,30,laius.value,korgus.value) // 0,0 -vasak üleval tahvli nurk, 300-tahvli laius, 250- tahvli kõrgus
    }
}

function pilt(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        const fail=new Image();
        fail.src="https://picsum.photos/100/200?random=1";
        t.drawImage(fail, 50,50,100,200)
    }
}

function Valkusfoor(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        t.beginPath;
        t.fillStyle="black";
        t.FillRect(30,30, 70, 100) // 0,0 -vasak üleval tahvli nurk, 300-tahvli laius, 250- tahvli kõrgus
    }
}

function Mine(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        t.beginPath();
        t.strokeStyle="black";
        t.linewidth = 5;
        //ring
        t.beginPath();
        t.linewidth = 5;
        t.fillStyle="green";
        t.arc(150,125, 20, 20, 2*Math.PI, true) //x, y-keskpunkt, Radius
        t.fill();
    }
}

function Oota(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        t.beginPath();
        t.strokeStyle="black";
        t.linewidth = 5;
        //ring
        t.beginPath();
        t.linewidth = 5;
        t.fillStyle="yellow";
        t.arc(150,125, 20, 20, 2*Math.PI, true) //x, y-keskpunkt, Radius
        t.fill();
    }
}

function Seisa(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d") // anname tahvlinimi on t
        t.beginPath();
        t.strokeStyle="black";
        t.linewidth = 5;
        //ring
        t.beginPath();
        t.linewidth = 5;
        t.fillStyle="red";
        t.arc(150,125, 20, 20, 2*Math.PI, true) //x, y-keskpunkt, Radius
        t.fill();
    }
}