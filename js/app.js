let numfila = 0;

$(document).ready(initializeEvents);

function initializeEvents() {

    // este es el get
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "peliculas.json"
    }).done(peticionCompletada);
    $("#modificar").click(modifico);
    $("#borrar").click(borro);
    $("#guardar").click(guardo);

    // este es el post
    var pelicula = {};
    pelicula.titulo = "titulo";
    $.ajax({
        type: "POST",
        data: pelicula,
        dataType: "json",
        url: "peliculas.json"
    }).done(peticionCompletada);
    $("#modificar").click(modifico);
    $("#borrar").click(borro);
    $("#guardar").click(guardo);
}

function peticionCompletada(data) {
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

function modifico() {

}

function borro() {
    if ($('#check').prop('checked')) {
        $("#fila1").remove("#fila1");
    }
}


function guardo() {

    numfila = numfila + 1;
    console.log(numfila);

    var tds = '<tr id="">';
    tds += '<td width="5%"><input type="checkbox" name="" id="check" value=""></td>';
    tds += '<td width="19%" id="idpeli"></td>';
    tds += '<td width="19%" id="titulo"></td>';
    tds += '<td width="19%" id="director"></td>';
    tds += '<td width="19%" id="sinopsis"></td>';
    tds += '<td width="19%" id="fecha"></td>';
    tds += '</tr>';
    $("#tabla").append(tds);
    $("#tabla tr").attr("id", "fila" + numfila);
}