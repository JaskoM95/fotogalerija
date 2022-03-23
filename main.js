var prikaz = document.getElementById ('prikaz');
var zivotinje = document.getElementsByClassName ('zivotinje');

for (var i=0; i<zivotinje.length; i++) {

    zivotinje[i].addEventListener ('click',funkcija);


}

function funkcija() {

    var sl = this.getAttribute ('src');

    prikaz.setAttribute ('src',sl);

}
