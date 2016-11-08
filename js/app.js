$(document).ready(initializeEvents);

function initializeEvents() {
    // este es el get
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "peliculas.json"
    }).done(primeracarga);
    $("#borrar").click(borro);
    $("#modificar").click(modifico);

}

function primeracarga(data) {
    var tds = '<tr id="idpeli">';
    tds += '<td width="4%"><input type="checkbox" name="" id="check" value=""></td>';
    tds += '<td width="24%" id="titulopeli"></td>';
    tds += '<td width="24%" id="directorpeli"></td>';
    tds += '<td width="24%" id="sinopsispeli"></td>';
    tds += '<td width="24%" id="fechapeli"></td>';
    tds += '</tr>';

    for (i = 0; i < data.peliculas.length; i++) {
        $("#tabla").append(tds);
        $("#idpeli").attr("id", data.peliculas[i].id);
        $("#" + data.peliculas[i].id + " #titulopeli").html(data.peliculas[i].titulo);
        $("#" + data.peliculas[i].id + " #directorpeli").html(data.peliculas[i].director);
        $("#" + data.peliculas[i].id + " #sinopsispeli").html(data.peliculas[i].sinopsis);
        $("#" + data.peliculas[i].id + " #fechapeli").html(data.peliculas[i].fecha);
    }
}

function borro() {

    var filaquequitar = $('input:checkbox:checked').parents("tr").attr('id');
    console.log("esto busco:" + filaquequitar)

    $('input:checkbox:checked').parents("tr").remove();

    console.log("hasta aqui he llegado");

    $.ajax('peliculas.json/peliculas/+filaquequitar', { method: 'DELETE' });
}

function modifico(data) {
    var filamarcada = $('input:checkbox:checked').parents("tr").attr('id');
    console.log("esto busco:" + filamarcada)
        /** $("#campo-titulo").attr("value", data.peliculas[1].titulo); */

}