(function (){

    crearCabecera();



}());

function crearCabecera(){

    var header = document.createElement("header");
    var container1 = document.createElement("container");

    header.id = "cabecera";
    header.className = "header-full-fixed";
    container1.id="cont1";

    var logo = document.createElement("a");
    var logo_img = document.createElement("img");

    logo_img.className = "header-logo";
    logo_img.id="LogoID";
    logo_img.src = "https://s20.postimg.org/9e9r053ml/lsoundfinal.png";
    logo_img.alt = "Logo";

    logo.href = "";

    logo.appendChild(logo_img);
    container1.appendChild(logo);
    header.appendChild(container1);
    header.appendChild(logo);
    document.body.appendChild(header);

}

/*--------------------
---------JQUERY-------
 --------------------*/

/*--------------------
¿Què és JQUERY?
----------------------

JQUERY  permet realitzar accions sobre elements. Podem realitzar diferents accions
sobre alguns elements com una classe o un element amb un id concret.


-----------------------
JQUERY Selectors
-----------------------

Els Selectors permeten selecccionar i manipular els elements HTML. Els selectors són
utilitzats per a trobar o seleccionar els elements HTML basant-se en el seu nom,
id, classe, tipus, atribut, valor, etc.

Tots els selectors comencen amb el signe del dòlar i parèntesi: $()

Exemple. Seleccionem els paràgrafs: $("p")



 */



$(function(){

    // jQuery methods go here...

});