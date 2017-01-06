
(function (){


    crearCabecera();
    crearSeccions();
    crearBuscador();

    /*var t = {
        playlist: [
            {
                file: "resources/tracks/01.mp3",
                thumb: "resources/thumbs/01.jpg",
                trackName: "Dusk",
                trackArtist: "Tobu & Syndec",
                trackAlbum: "Single",
            },
            {
                file: "resources/tracks/02.mp3",
                thumb: "resources/thumbs/02.jpg",
                trackName: "Blank",
                trackArtist: "Disfigure",
                trackAlbum: "Single",
            },
            {
                file: "resources/tracks/03.mp3",
                thumb: "resources/thumbs/03.jpg",
                trackName: "Fade",
                trackArtist: "Alan Walker",
                trackAlbum: "Single",
            }
        ]
    }

    $("#rep3").jAudio(t);*/

   // crearTop();

}());

function crearCabecera(){

    var header = document.getElementById("principal");
    var nav = document.createElement("nav");
    var div = document.createElement("div");
    var barra = document.createElement("div");


    div.className = "container-fluid";
    div.id = "cabecera";
    nav.className="navbar navbar-inverse navbar-fixed-top";
    nav.id = "navegador";

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
    a.className = "navbar-Brand";
    a.href = "#";
    var logo = document.createElement("img");
    logo.src = "https://s20.postimg.org/nwechnqfx/logo.gif";
    logo.className = "img-responsive";
    logo.id = "logo";

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
    //bBuscador.method = "POST";

    //bBuscador.className = "btn btn-default";
    bBuscador.id = "search";
   //bBuscador.value = "Search";
    bBuscador.className = "btn btn-primary";
    i.className = "glyphicon glyphicon-search";
    form.className="navbar-form";
    form.id="navbar-form";
    form.setAttribute('role','search');
    aux.className = "input-group";
    aux.id = "divBuscador";
    aux2.className = "input-group-btn";

    input.type =  "text";
    input.className = "form-control";
    input.placeholder = "Busca la teva música";
    input.id = "query";
    input.value = "";
    input.setAttribute("ng-model", "query");



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

    var sRecomenats = document.getElementById("recomenats");
    var sBuscador = document.getElementById("resultats");
    var sTop = document.getElementById("top");


    var hRecomenats = document.createElement("h1");
    var title1 = document.createTextNode("Recomanats per a tu");
    hRecomenats.appendChild(title1);
    var reproductor1 = creaReproductor();
    reproductor1.id = "rep1";

    var hTop = document.createElement("h1");
    var title2 = document.createTextNode("Top del moment");
    hTop.appendChild(title2);
    var reproductor2 = creaReproductor();
    reproductor2.id = "rep2";


    var hBuscador = document.createElement("h1");
    var title3 = document.createTextNode("Resultats de la cerca");
    hBuscador.appendChild(title3);
    var reproductor3 = creaReproductor();
    reproductor3.id = "rep3";


    sRecomenats.appendChild(hRecomenats);
    sRecomenats.appendChild(reproductor1);
    sTop.appendChild(hTop);
    sTop.appendChild(reproductor2);
    sBuscador.appendChild(hBuscador);
    sBuscador.appendChild(reproductor3);

}

function crearBuscador(){

/*
    var templateSource = document.getElementById('results-template').innerHTML,
        template = Handlebars.compile(templateSource),
        resultsPlaceholder = document.getElementById('results'),
        playingCssClass = 'playing',
        audioObject = null;

    var fetchTracks = function (albumId, callback) {
        $.ajax({
            url: 'https://api.spotify.com/v1/albums/' + albumId,
            success: function (response) {
                callback(response);

            }
        });
    };*/
    var playlist;
    var playlistReproductor = [];
    var callback = function(response){
        var canco;
        playlist = response.albums.items;
        console.log(playlist);
        playlist.forEach(function() {

            canco = {
                file: "resources/tracks/01.mp3",
                thumb: "resources/thumbs/01.jpg",
                trackName: "Dusk",
                trackArtist: "Tobu & Syndec",
                trackAlbum: "Single",
            }

            playlistReproductor.push(canco);

        })


    }
    var searchAlbums = function (query) {
        var albums;
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: query,
                type: 'album'
            },
            success: function (response) {
                console.log("Hola");
                console.log(response);
                callback(response);
            }
        });
    };


    console.log(document.getElementById('navbar-form'));

        document.getElementById('navbar-form').addEventListener('submit', function (e) {
            e.preventDefault();
            searchAlbums(document.getElementById('query').value);
        }, false);



}

function creaReproductor(){

    var divPrincipal = document.createElement("div");
    divPrincipal.className = "jAudio";

    var audio = document.createElement("audio");

    divPrincipal.appendChild(audio);


    var divUi = document.createElement("div");
    divUi.className = "jAudio--ui";

    var divThumb = document.createElement("div");
    divThumb.className = "jAudio--thumb";

    divUi.appendChild(divThumb);

    var divBar = document.createElement("div");
    divBar.className = "jAudio--status-bar";

    var divDetails = document.createElement("div");
    divDetails.className = "jAudio--details";

    divBar.appendChild(divDetails);

    var divVolume = document.createElement("div");
    divVolume.className = "jAudio--volume-bar";

    divBar.appendChild(divVolume);

    var divProgress= document.createElement("div");
    divProgress.className = "jAudio--progress-bar";

    var divWrapper= document.createElement("div");
    divWrapper.className = "jAudio--progress-bar-wrapper";

    var divPlayed= document.createElement("div");
    divPlayed.className = "jAudio--progress-bar-played";

    var spanPointer= document.createElement("span");
    spanPointer.className = "jAudio--progress-bar-pointer";

    divPlayed.appendChild(spanPointer);

    divWrapper.appendChild(divPlayed);

    divProgress.appendChild(divWrapper);

    divBar.appendChild(divProgress);

    var divTime= document.createElement("div");
    divTime.className = "jAudio--time";

    var spanTimeE= document.createElement("span");
    spanTimeE.className = "jAudio--time-elapsed";

    var t1 = document.createTextNode("00:00");

    spanTimeE.appendChild(t1);

    divTime.appendChild(spanTimeE);

    var spanTimeT= document.createElement("span");
    spanTimeT.className = "jAudio--time-total";

    var t2 = document.createTextNode("00:00");

    spanTimeT.appendChild(t2);

    divTime.appendChild(spanTimeT);

    divBar.appendChild(divTime);

    divUi.appendChild(divBar);

    divPrincipal.appendChild(divUi);


    var divControls = document.createElement("div");
    divControls.className = "jAudio--controls";

    var ul = document.createElement("ul");

    var li1 = document.createElement("li");
    var button1 = document.createElement("button");
    button1.className = "jAudio--control jAudio--control-prev";
    button1.setAttribute("data-action","prev");
    var span1 = document.createElement("span");

    button1.appendChild(span1);
    li1.appendChild(button1);
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    var button2 = document.createElement("button");
    button2.className = "jAudio--control jAudio--control-play";
    button2.setAttribute("data-action","play");
    var span2 = document.createElement("span");

    button2.appendChild(span2);
    li2.appendChild(button2);
    ul.appendChild(li2);

    var li3 = document.createElement("li");
    var button3 = document.createElement("button");
    button3.className = "jAudio--control jAudio--control-next";
    button3.setAttribute("data-action","next");
    var span3 = document.createElement("span");

    button3.appendChild(span3);
    li3.appendChild(button3);
    ul.appendChild(li3);

    divControls.appendChild(ul);

    divPrincipal.appendChild(divControls);


    var divPlaylist = document.createElement("div");
    divPlaylist.className = "jAudio--playlist";
    divPrincipal.appendChild(divPlaylist);

    return divPrincipal;

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



$(document).ready(function(){

    // jQuery methods go here...
    /*$('#recomenats').slick({

        //setting-name: setting-value
    });*/


});