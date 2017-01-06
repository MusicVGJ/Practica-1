
(function (){


    crearCabecera();
    crearSeccions();
    crearBuscador();
    crearTop();

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

    var hTop = document.createElement("h1");
    var title2 = document.createTextNode("Top del moment");
    hTop.appendChild(title2);

    var hBuscador = document.createElement("h1");
    var title3 = document.createTextNode("Resultats de la cerca");
    hBuscador.appendChild(title3);

    sRecomenats.appendChild(hRecomenats);
    sTop.appendChild(hTop);
    sBuscador.appendChild(hBuscador);

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
    };

    var searchAlbums = function (query) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: query,
                type: 'album'
            },
            success: function (response) {
                resultsPlaceholder.innerHTML = template(response);
            }
        });
    };

    results.addEventListener('click', function (e) {
        var target = e.target;
        if (target !== null && target.classList.contains('cover')) {
            if (target.classList.contains(playingCssClass)) {
                audioObject.pause();
            } else {
                if (audioObject) {
                    audioObject.pause();
                }
                fetchTracks(target.getAttribute('data-album-id'), function (data) {
                    audioObject = new Audio(data.tracks.items[0].preview_url);
                    audioObject.play();
                    target.classList.add(playingCssClass);
                    audioObject.addEventListener('ended', function () {
                        target.classList.remove(playingCssClass);
                    });
                    audioObject.addEventListener('pause', function () {
                        target.classList.remove(playingCssClass);
                    });
                });
            }
        }
    });


    console.log(document.getElementById('navbar-form'));


    document.getElementById('navbar-form').addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("correcte1");
        console.log(document.getElementById('query').value);
        searchAlbums(document.getElementById('query').value);
        console.log("correcte2");

    }, false);*/



}

function crearTop() {

    /*

    var t = {
        playlist: [
            {
                file: "07 Lluvia.m4a",
                thumb: "",
                trackName: "Dusk",
                trackArtist: "Tobu & Syndec",
                trackAlbum: "Single",
            },
            {
                file: "07 Lluvia.m4a",
                thumb: "",
                trackName: "Blank",
                trackArtist: "Disfigure",
                trackAlbum: "Single",
            },
            {
                file: "07 Lluvia.m4a",
                thumb: "",
                trackName: "Fade",
                trackArtist: "Alan Walker",
                trackAlbum: "Single",
            }
        ]
    }

    $(".jAudio--player").jAudio(t);
    */

}

/*
$(".jAudio--player").jAudio({
    playlist: [],

    defaultAlbum: undefined,
    defaultArtist: undefined,
    defaultTrack: 0,

    autoPlay: false,

    debug: false
});

(function($){

    var pluginName = "jAudio",
        defaults = {
            playlist: [],

            defaultAlbum: undefined,
            defaultArtist: undefined,
            defaultTrack: 0,

            autoPlay: false,

            debug: false
        };

    function Plugin( $context, options )
    {
        this.settings         = $.extend( true, defaults, options );

        this.$context         = $context;

        this.domAudio         = this.$context.find("audio")[0];
        this.$domPlaylist     = this.$context.find(".jAudio--playlist");
        this.$domControls     = this.$context.find(".jAudio--controls");
        this.$domVolumeBar    = this.$context.find(".jAudio--volume");
        this.$domDetails      = this.$context.find(".jAudio--details");
        this.$domStatusBar    = this.$context.find(".jAudio--status-bar");
        this.$domProgressBar  = this.$context.find(".jAudio--progress-bar-wrapper");
        this.$domTime         = this.$context.find(".jAudio--time");
        this.$domElapsedTime  = this.$context.find(".jAudio--time-elapsed");
        this.$domTotalTime    = this.$context.find(".jAudio--time-total");
        this.$domThumb        = this.$context.find(".jAudio--thumb");

        this.currentState       = "pause";
        this.currentTrack       = this.settings.defaultTrack;
        this.currentElapsedTime = undefined;

        this.timer              = undefined;

        this.init();
    }

    Plugin.prototype = {

        init: function()
        {
            var self = this;

            self.renderPlaylist();
            self.preLoadTrack();
            self.highlightTrack();
            self.updateTotalTime();
            self.events();
            self.debug();
            self.domAudio.volume = 0.05
        },

        play: function($btn)
        {
            var self = this;

            self.domAudio.play();

            if(self.currentState === "play") return;

            clearInterval(self.timer);
            self.timer = setInterval( self.run.bind(self), 50 );

            self.currentState = "play";

            // change id
            $btn.data("action", "pause");
            $btn.removeClass("jAudio--control-play");
            $btn.addClass("jAudio--control-pause");

            // activate
            $btn.toggleClass('active');
        },

        pause: function($btn)
        {
            var self        = this;

            self.domAudio.pause();
            clearInterval(self.timer);

            self.currentState = "pause";

            // change id
            $btn.data("action", "play");
            $btn.removeClass("jAudio--control-pause");
            $btn.addClass("jAudio--control-play");

            // activate
            $btn.toggleClass('active');

        },

        stop: function($btn)
        {
            var self = this;

            self.domAudio.pause();
            self.domAudio.currentTime = 0;

            self.animateProgressBarPosition();
            clearInterval(self.timer);
            self.updateElapsedTime();

            self.currentState = "stop";
        },

        prev: function($btn)
        {
            var self  = this,
                track;

            (self.currentTrack === 0)
                ? track = self.settings.playlist.length - 1
                : track = self.currentTrack - 1;

            self.changeTrack(track);
        },

        next: function($btn)
        {
            var self = this,
                track;

            (self.currentTrack === self.settings.playlist.length - 1)
                ? track = 0
                : track = self.currentTrack + 1;

            self.changeTrack(track);
        },

        preLoadTrack: function()
        {
            var self      = this,
                defTrack  = self.settings.defaultTrack;

            self.changeTrack( defTrack );

            self.stop();
        },

        changeTrack: function(index)
        {
            var self = this;

            self.currentTrack  = index;
            self.domAudio.src  = self.settings.playlist[index].file;

            if(self.currentState === "play" || self.settings.autoPlay) self.play();

            self.highlightTrack();

            self.updateThumb();

            self.renderDetails();
        },

        events: function()
        {
            var self = this;

            // - controls events
            self.$domControls.on("click", ".jAudio--control", function()
            {

                var $btn    = $(this),
                    action  = $btn.data("action")
                    ;

                switch( action )
                {
                    case "prev": self.prev.call(self, $btn); break;
                    case "next": self.next.call(self, $btn); break;
                    case "pause": self.pause.call(self, $btn); break;
                    case "stop": self.stop.call(self, $btn); break;
                    case "play": self.play.call(self, $btn); break;
                };

            });

            // - playlist events
            self.$domPlaylist.on("click", ".jAudio--playlist-item", function(e)
            {
                var item = $(this),
                    track = item.data("track"),
                    index = item.index();

                if(self.currentTrack === index) return;

                self.changeTrack(index);
            });

            // - volume's bar events
            // to do

            // - progress bar events
            self.$domProgressBar.on("click", function(e)
            {
                self.updateProgressBar(e);
                self.updateElapsedTime();
            });

            $(self.domAudio).on("loadedmetadata", function()
            {
                self.animateProgressBarPosition.call(self);
                self.updateElapsedTime.call(self);
                self.updateTotalTime.call(self);
            });
        },


        getAudioSeconds: function(string)
        {
            var self    = this,
                string  = string % 60;
            string  = self.addZero( Math.floor(string), 2 );

            (string < 60) ? string = string : string = "00";

            return string;
        },

        getAudioMinutes: function(string)
        {
            var self    = this,
                string  = string / 60;
            string  = self.addZero( Math.floor(string), 2 );

            (string < 60) ? string = string : string = "00";

            return string;
        },

        addZero: function(word, howManyZero)
        {
            var word = String(word);

            while(word.length < howManyZero) word = "0" + word;

            return word;
        },

        removeZero: function(word, howManyZero)
        {
            var word  = String(word),
                i     = 0;

            while(i < howManyZero)
            {
                if(word[0] === "0") { word = word.substr(1, word.length); } else { break; }

                i++;
            }

            return word;
        },

        highlightTrack: function()
        {
            var self      = this,
                tracks    = self.$domPlaylist.children(),
                className = "active";

            tracks.removeClass(className);
            tracks.eq(self.currentTrack).addClass(className);
        },

        renderDetails: function()
        {
            var self          = this,
                track         = self.settings.playlist[self.currentTrack],
                file          = track.file,
                thumb         = track.thumb,
                trackName     = track.trackName,
                trackArtist   = track.trackArtist,
                trackAlbum    = track.trackAlbum,
                template      =  "";

            template += "<p>";
            template += "<span>" + trackName + "</span>";
            // template += " - ";
            template += "<span>" + trackArtist + "</span>";
            // template += "<span>" + trackAlbum + "</span>";
            template += "</p>";


            self.$domDetails.html(template);

        },

        renderPlaylist: function()
        {
            var self = this,
                template = "";


            $.each(self.settings.playlist, function(i, a)
            {
                var file          = a["file"],
                    thumb         = a["thumb"],
                    trackName     = a["trackName"],
                    trackArtist   = a["trackArtist"],
                    trackAlbum    = a["trackAlbum"];
                trackDuration = "00:00";

                template += "<div class='jAudio--playlist-item' data-track='" + file + "'>";

                template += "<div class='jAudio--playlist-thumb'><img src='"+ thumb +"'></div>";

                template += "<div class='jAudio--playlist-meta'>";
                template += "<p class='jAudio--playlist-meta-track-name'>" + trackName + "</p>";
                template += "<p class='jAudio--playlist-meta-track-artist'>" + trackArtist + "</p>";
                template += "</div>";
                // template += "<div class='jAudio--playlist-track-duration'>" + trackDuration + "</div>";
                template += "</div>";

                // });

            });

            self.$domPlaylist.html(template);

        },

        run: function()
        {
            var self = this;

            self.animateProgressBarPosition();
            self.updateElapsedTime();

            if(self.domAudio.ended) self.next();
        },

        animateProgressBarPosition: function()
        {
            var self        = this,
                percentage  = (self.domAudio.currentTime * 100 / self.domAudio.duration) + "%",
                styles      = { "width": percentage };

            self.$domProgressBar.children().eq(0).css(styles);
        },

        updateProgressBar: function(e)
        {
            var self = this,
                mouseX,
                percentage,
                newTime;

            if(e.offsetX) mouseX = e.offsetX;
            if(mouseX === undefined && e.layerX) mouseX = e.layerX;

            percentage  = mouseX / self.$domProgressBar.width();
            newTime     = self.domAudio.duration * percentage;

            self.domAudio.currentTime = newTime;
            self.animateProgressBarPosition();
        },

        updateElapsedTime: function()
        {
            var self      = this,
                time      = self.domAudio.currentTime,
                minutes   = self.getAudioMinutes(time),
                seconds   = self.getAudioSeconds(time),

                audioTime = minutes + ":" + seconds;

            self.$domElapsedTime.text( audioTime );
        },

        updateTotalTime: function()
        {
            var self      = this,
                time      = self.domAudio.duration,
                minutes   = self.getAudioMinutes(time),
                seconds   = self.getAudioSeconds(time),
                audioTime = minutes + ":" + seconds;

            self.$domTotalTime.text( audioTime );
        },

        updateThumb: function()
        {
            var self = this,
                thumb = self.settings.playlist[self.currentTrack].thumb,
                styles = {
                    "background-image": "url(" + thumb + ")"
                };

            self.$domThumb.css(styles);
        },

        debug: function()
        {
            var self = this;

            if(self.settings.debug) console.log(self.settings);
        }

    }

    $.fn[pluginName] = function( options )
    {
        var instantiate = function()
        {
            return new Plugin( $(this), options );
        }

        $(this).each(instantiate);
    }

})(jQuery)

    /*$(".jAudio--player").jAudio({
        playlist: [],

        defaultAlbum: undefined,
        defaultArtist: undefined,
        defaultTrack: 0,

        autoPlay: false,

        debug: false
    });*/



// Script info:
// - Author: Michael Mammoliti
// - Name: jAudio.js
// - Version: 0.2.1
// - js dipendencies: jQuery
// - First Release: 25 November 2015
// - Last Update: 13 November 2016
// - GitHub: https://github.com/MichaelMammoliti/jAudio.js

// Contact info
// - GitHub: https://github.com/MichaelMammoliti
// - Mail: mammoliti.michael@gmail.com
// - Twitter: @MichMammoliti

// License Info
// - Released under the MIT license.









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