"use strict";
exports.__esModule = true;
exports.totalautos = void 0;
function totalautos(autos) {
    var contador = 0;
    autos.forEach(function (producto) {
        contador++;
    });
    return contador;
}
exports.totalautos = totalautos;
