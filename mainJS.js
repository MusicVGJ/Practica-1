(function (){

    crearCabecera();



}());

function crearCabecera(){

    var sectionHeader = document.createElement("section");
    var header = document.createElement("header");

    header.id = "cabecera";
    header.className = "header-full-fixed";

    var logo = document.createElement("a");
    var logo_img = document.createElement("img");

    logo_img.className = "header-logo";
    logo_img.src = "https://s20.postimg.org/7imyozesd/lsoundfinal.png";
    logo_img.alt = "Logo";

    logo.href = "";

    logo.appendChild(logo_img);
    header.appendChild(logo);
    sectionHeader.appendChild(header);
    document.body.appendChild(sectionHeader);

}