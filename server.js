const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 1337;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
hbs.registerHelper('getAnio', (opt) => {
    return new Date().getFullYear() + parseInt(opt);
});

hbs.registerHelper('getFecha', (opt) => {
    var date = new Date();
    var day = date.getDay() || 7;
    if (day !== opt)
        date.setHours(-24 * (day - opt));
    return date.getDate() + '' + (date.getMonth() + 1) + '' + date.getFullYear();

    return (new Date().getDate() + parseInt(opt)).toString() + (new Date().getMonth() + 1).toString() + new Date().getFullYear().toString();
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

app.get('/hipodromosAmericanoEstandar', (req, res) => {

    res.render('hipodromosAmericanoEstandar');
});

app.get('/hipodromosNacionales', (req, res) => {

    res.render('hipodromosNacionales');
});

app.listen(port, () => {
    console.log("escuchando peticiones en puerto 3000");
});