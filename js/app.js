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
}

function peticionCompletada(data) {
    $("#contenido-ajax").html("JSON Data: " + data.peliculas[0].id);
}

function modifico() {

}

function borro() {
    if ($('#check').prop('checked')) {
        $("#fila").addClass("borramos")
        $("tr").remove(".borramos");
    }
}


$(document).ready(function() {
    $("#guardar").click(function() {
        numfila = numfila + 1;
        console.log(numfila);

        var tds = '<tr id="">';
        tds += '<td><input type="checkbox" name="" id="check" value=""></td>';
        tds += '<td id="idpeli"></td>';
        tds += '<td id="titulo"></td>';
        tds += '<td id="director"></td>';
        tds += '<td id="sinopsis"></td>';
        tds += '<td id="fecha"></td>';
        tds += '</tr>';
        $("#tabla").append(tds);
        $("tr").attr("id", "fila" + numfila);
    });
});