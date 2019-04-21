const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
hbs.registerHelper('getAnio', (opt) => {
    return new Date().getFullYear() + parseInt(opt);
});
app.set('view engine', 'hbs');
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Bienvenido a DMG'

    });
});

app.get('/quienes-somos', (req, res) => {

    res.render('quienes-somos');
});

app.get('/hipodromosAmericano', (req, res) => {

    res.render('hipodromosAmericano');
});

app.get('/hipodromosNacionales', (req, res) => {

    res.render('hipodromosNacionales');
});

app.listen(3000, () => {
    console.log("escuchando peticiones en puerto 3000");
});