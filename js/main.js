function Hallo(id, navn){
    this.id= id
    this.navn=navn
    this.toPrint = function () {
        console.log(this.id+ ' '+ this.navn)
    }
}

function display(melding){
    for(var m in melding) {
        Console.log(m);
    }
}

var t = Object.create(Hallo(1,"Tore Gard"),Hallo.prototype);

display(t);
