(function (){


    crearCabecera();
    crearSeccions();


}());

function crearCabecera(){

    var header = document.createElement("header");
    var nav = document.createElement("nav");
    var div = document.createElement("div");
    var barra = document.createElement("div");


    div.className = "container-fluid";
    div.style.backgroundColor = "black";
    nav.className="navbar navbar-inverse navbar-fixed-top";

    header.appendChild(nav);
    nav.appendChild(div);

    barra.className = "navbar-header";

    var menuButton = document.createElement("button");

    menuButton.type = "button";
    menuButton.className = "navbar-toggle";
    menuButton.setAttribute('data-toggle','collapse');
    menuButton.setAttribute('data-target','#myNavbar');

    for(i = 0; i<3;i++){

        var span = document.createElement("span");
        span.className = "icon-bar";
        menuButton.appendChild(span);

    }

    barra.appendChild(menuButton);

    var a = document.createElement("a");
    a.className = "navbar-Brand"
    a.href = "#";
    var logo = document.createElement("img");
    logo.src = "https://s20.postimg.org/nwechnqfx/logo.gif";
    logo.className = "img-responsive";
    logo.style.height = "50px";
    logo.style.float = "left";


    a.appendChild(logo);

    var seccions = document.createElement("div");

    seccions.className = "collapse navbar-collapse";
    seccions.id = "myNavbar";

    var ul = document.createElement("ul");
    ul.className = "nav navbar-nav";

    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");

    var a1 = document.createElement("a");
    var a2 = document.createElement("a");

    var t1 = document.createTextNode("Recomanats");
    var t2 = document.createTextNode("Top");

    var aux = document.createElement("div");
    var form = document.createElement("form");
    var input = document.createElement("input");
    var bBuscador = document.createElement("button");
    var i = document.createElement("i");
    var aux2 = document.createElement("div");

    bBuscador.type = "submit";
    bBuscador.method = "POST";
    bBuscador.className = "btn btn-default";
    i.className = "glyphicon glyphicon-search";
    form.className="navbar-form";
    form.setAttribute('role','search');
    aux.className = "input-group";
    aux2.className = "input-group-btn";

    input.type =  "text";
    input.className = "form-control";
    input.placeholder = "Busca la teva música";

    bBuscador.appendChild(i);
    aux.appendChild(input);
    aux2.appendChild(bBuscador);
    aux.appendChild(aux2);
    form.appendChild(aux);


    a1.href = "#recomenats";
    a1.appendChild(t1);

    a2.href = "#top";
    a2.appendChild(t2);

    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(form);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    seccions.appendChild(ul);
    barra.appendChild(a);



    div.appendChild(barra);
    div.appendChild(seccions);
    document.body.appendChild(header);


}

function crearSeccions() {

    var sRecomenats = document.createElement("section");
    var sBuscador = document.createElement("section");
    var sTop = document.createElement("section");

    sRecomenats.id = "recomenats";
    sRecomenats.className = "container-fluid";

    sBuscador.id = "section2";
    sBuscador.className = "container-fluid";

    sTop.id = "top";
    sTop.className = "container-fluid";

    var hRecomenats = document.createElement("h1");
    var title1 = document.createTextNode("Recomentas per a tu");
    hRecomenats.appendChild(title1);

    var hTop = document.createElement("h1");
    var title2 = document.createTextNode("Top del moment");
    hTop.appendChild(title2);

    var hBuscador = document.createElement("h1");
    var title3 = document.createTextNode("Resultats de la búsqueda");
    hBuscador.appendChild(title3);


    sRecomenats.appendChild(hRecomenats);
    sTop.appendChild(hTop);
    sBuscador.appendChild(hBuscador);

    document.body.appendChild(sRecomenats);
    document.body.appendChild(sTop);
    document.body.appendChild(sBuscador);

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