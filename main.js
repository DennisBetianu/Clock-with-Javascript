function setOra(){
    const data = new Date();
    const ore = data.getHours();
    const minuti = data.getMinutes();
    const secondi = data.getSeconds();

    if(ore < 10){
        ore = "0" + ore;  
    }
    if(minuti < 10){
        minuti = "0" + minuti;  
    }
    if(secondi < 10){
        secondi = "0" + secondi;  
    }

    document.getElementById('orario').textContent = ore + ":" + minuti + ":" + secondi;



}

setInterval(setOra, 1000)