

(function (){
    crearCabecera();
    crearSeccions();
    crearBuscador();
    omplirTop();
    omplirRecomanats();

}());


function omplirRecomanats(){
    var playlistReproductor = [];
    var playlistRecomanatsSpoty = [];
    var history = JSON.parse(localStorage.getItem("songs"));
    var limit = 0;
    if(history === null){

        $("#recomenats").hide();

    }else{
      switch( history.length )
        {
            case 1: limit = 1; break;
            case 2: limit = 2;break;
            case 3: limit = 3; break;
            case 4: limit = 4;break;
            case 5: limit = 5; break;
            case 6: limit = 6; break;
            case 7: limit = 7; break;
            case 8: limit = 8; break;
            case 9: limit = 9;break;
            case 10: limit = 10;break;
            default: limit = history.length;break;

        };
        var recomanats=[];
        var idArtist;
        if(limit <= 10) {
            for(var i = 0; i<limit;i++) {
                idArtist = history[i].idArtist;
                var resposta = $.ajax({
                    async: false,
                    url: 'https://api.spotify.com/v1/artists/' + idArtist + '/related-artists',
                    limit: 1,
                    success: function (response) {
                    }
                });
                var artistesRecomanat = resposta.responseJSON;
                recomanats.push(artistesRecomanat);
            }

            var contador = 0;
            var index = 0;
            var artistesFinals = [];

            while(contador < 10){
                for(var i = 0; i < limit; i++){
                    if(contador < 10){
                        var resposta = $.ajax({
                            async: false,
                            url: 'https://api.spotify.com/v1/search?q="'+recomanats[i].artists[index].name+'&type=track&limit=1',
                            success: function(response){
                                playlistRecomanatsSpoty.push(response);
                                contador++;

                            }

                    });
                    }
                }
                index++;
            }

        }else{
           for(var i = limit-1; i>=limit-10;i--){
                var resposta = $.ajax({
                    async: false,
                    url: 'https://api.spotify.com/v1/artists/' + history[i].idArtist + '/related-artists',
                    limit: 1,
                    success: function (response) {
                    }
                });
                var artistesRecomanat = resposta.responseJSON;
                recomanats.push(artistesRecomanat);
            }

            for(var i = 0; i < 10; i++){
                    var resposta = $.ajax({
                        async: false,
                        url: 'https://api.spotify.com/v1/search?q="'+recomanats[i].artists[0].name+'&type=track&limit=1'
                    });
                 playlistRecomanatsSpoty.push(resposta.responseJSON);

            }
        }

        for(var i = 0; i<10;i++){

            canco = {

                file: playlistRecomanatsSpoty[i].tracks.items[0].preview_url,
                thumb: playlistRecomanatsSpoty[i].tracks.items[0].album.images[0].url,
                trackName: playlistRecomanatsSpoty[i].tracks.items[0].name,
                trackArtist:  playlistRecomanatsSpoty[i].tracks.items[0].artists[0].name,
                trackAlbum: playlistRecomanatsSpoty[i].tracks.items[0].album.name,
                id: playlistRecomanatsSpoty[i].tracks.items[0].album.id,
                idArtista: playlistRecomanatsSpoty[i].tracks.items[0].artists[0].id
            }

            playlistReproductor.push(canco);

        }

        var t3 = { playlist: []};
        t3.playlist = playlistReproductor;
        $('#rep1').jAudio3(t3);
    }


}




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
    menuButton.id = "botoMenu";
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
    //
    var a3 = document.createElement("a");

    var t1 = document.createTextNode("RECOMMENDED ARTISTS");
    var t2 = document.createTextNode("TOP 10 HITS");
    //
    var t3 = document.createTextNode("SEARCH");
    var aux = document.createElement("div");
    var form = document.createElement("form");
    var input = document.createElement("input");
    var bBuscador = document.createElement("button");
    var i = document.createElement("i");
    var aux2 = document.createElement("div");

    bBuscador.type = "submit";
    bBuscador.id = "search";
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
    input.placeholder = "What're you looking for?";
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
    a3.href = "#resultats";
    a3.appendChild(t3);


    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
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
    hRecomenats.className = "display-1";

    var title1 = document.createTextNode("RECOMMENDED ARTISTS");
    hRecomenats.appendChild(title1);
    var reproductor1 = creaReproductor();
    reproductor1.id = "rep1";

    var hTop = document.createElement("h1");
    hTop.className = "display-1";
    var title2 = document.createTextNode("TOP 10 HITS");
    var small = document.createElement("small");
    var aux = document.createTextNode(" by LastFM");
    small.appendChild(aux);
    hTop.appendChild(title2);
    hTop.appendChild(small);
    var reproductor2 = creaReproductor();
    reproductor2.id = "rep2";


    var hBuscador = document.createElement("h1");
    hBuscador.className = "display-1";

    var title3 = document.createTextNode("SEARCH RESULTS");
    hBuscador.appendChild(title3);
    var reproductor3 = creaReproductor();
    reproductor3.id = "rep3";


    sRecomenats.appendChild(hRecomenats);
    sRecomenats.appendChild(reproductor1);
    sTop.appendChild(hTop);
    sTop.appendChild(reproductor2);
    sBuscador.appendChild(hBuscador);
    sBuscador.appendChild(reproductor3);
    $("#resultats").hide();

}

function crearBuscador(){


    var playlist;
    var playlistReproductor = [];
    var callback = function(response){
        var canco;
        playlist = response.tracks.items;
        for(var i = 0; i<10;i++){

            var SearchArtist = function(){
                var artist = "";
                var j = 0;
                playlist[i].artists.forEach(function(){
                    artist = artist + playlist[i].artists[j].name+" ";
                    j++;
                })
                return artist;
            }

            var artist = SearchArtist();

            canco = {

                file: playlist[i].preview_url,
                thumb: playlist[i].album.images[0].url,
                trackName: playlist[i].name,
                trackArtist: artist,
                trackAlbum: playlist[i].album.name,
                id: playlist[i].album.id,
                idArtista: playlist[i].artists[0].id
            }

            playlistReproductor.push(canco);

        }




        var t = { playlist: []};
        t.playlist = playlistReproductor;
        $('#rep3').jAudio2(t);
        playlistReproductor = [];

    }
    var searchAlbums = function (query) {
        $("#resultats").show();


        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            async: false,
            data: {
                q: query,
                type: 'track'
            },
            success: function (response) {
                callback(response);
            }
        });
        window.location.href = "#resultats";

    };

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
    divPlaylist.id ="Layer1";
    divPrincipal.appendChild(divPlaylist);

    return divPrincipal;

}

function omplirTop(){

    var resposta = $.ajax({
        url: 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=germany&api_key=4cf27c66585c816932c910dcdf9c0237&format=json&limit=10',
        limit: 10,
        async: false
    });
    var topLastFM = resposta.responseJSON.tracks.track;
    var i = 0;
    var playlistReproductor2 = [];
    topLastFM.forEach(function() {

        var resposta = $.ajax({
            async: false,
            url: 'https://api.spotify.com/v1/search?q="'+topLastFM[i].name+'&type=track&limit=1'
        });

        var cancoLastFM = resposta.responseJSON;
       var canco2 = {
            file:cancoLastFM.tracks.items[0].preview_url ,
            thumb: cancoLastFM.tracks.items[0].album.images[0].url ,
            trackName: topLastFM[i].name,
            trackArtist: topLastFM[i].artist.name,
            trackAlbum: cancoLastFM.tracks.items[0].album.name,
            id: cancoLastFM.tracks.items[0].id,
            idArtista: cancoLastFM.tracks.items[0].artists[0].id
        }
        playlistReproductor2.push(canco2);
        i++;
    });
    var t2 = { playlist: []};
    t2.playlist = playlistReproductor2;
    $('#rep2').jAudio(t2);

}


