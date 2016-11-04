$(document).ready(initializeEvents);

function initializeEvents() {
    // este es el get
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "peliculas.json"
    }).done(primeracarga);
    $("#borrar").click(borro);
}

function primeracarga(data) {
    console.log(data);
    
        // {clave:valor}
        // Object.clave => valor
        // {}; === new Object();
        // var objeto = {};
        // objeto.clave = "valor" === {clave:valor} 
    var tds = '<tr id="idpeli">';
    tds += '<td width="4%"><input type="checkbox" name="" id="check" value=""></td>';
    tds += '<td width="24%" id="titulopeli"></td>';
    tds += '<td width="24%" id="directorpeli"></td>';
    tds += '<td width="24%" id="sinopsispeli"></td>';
    tds += '<td width="24%" id="fechapeli"></td>';
    tds += '</tr>';
    $("#tabla").append(tds);
    $("#idpeli").attr("id", +data.peliculas[0].id);
    $("#titulopeli").html(data.peliculas[0].titulo);
    $("#directorpeli").html(data.peliculas[0].director);
    $("#sinopsispeli").html(data.peliculas[0].sinopsis);
    $("#fechapeli").html(data.peliculas[0].fecha);
}

function borro() {
    if ($('#check').prop('checked')) {
        $("#1").remove("#1");
    }
}