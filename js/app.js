let numfila = 0;

$(document).ready(initializeEvents);

function initializeEvents() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "peliculas.json"
    }).done(peticionCompletada);
    $("#modificar").click(modifico);
    $("#borrar").click(borro);
    $("#guardar").click(guardo);
}

function peticionCompletada(data) {
    $("#contenido-ajax").html("JSON Data: " + data.peliculas[0].director);
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