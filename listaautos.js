"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var listaautos = [
    {
        id: 1,
        modelo: 'Jeannie',
        marca: 'jean',
        annio: 2007,
        precio: 100000
    },
    {
        id: 2,
        modelo: 'JeannieXD',
        marca: 'jean',
        annio: 2007,
        precio: 100000
    },
    {
        id: 1,
        modelo: 'Jeannie',
        marca: 'jean',
        annio: 2007,
        precio: 100000
    }
];
var total = (0, auto_1.totalautos)(listaautos);
console.log(total);
