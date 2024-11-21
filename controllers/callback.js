
const fs = require('fs');
const path = require('path');

const callback =(req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
};

const callback2 =(req, res) => {
    const canciones = JSON.parse(fs.readFileSync('repertorio.json'))
    res.json(canciones)
};

const callback3 =(req, res) => {
    const NEWcanciones = req.body
    const canciones = JSON.parse(fs.readFileSync('repertorio.json'))
    canciones.push(NEWcanciones)
    fs.writeFileSync('repertorio.json', JSON.stringify(canciones))
    res.send("Canción agregada con éxito!")
};

const callback4 =(req, res) => {
    const { id } = req.params
    const cancion = req.body
    const data = JSON.parse(fs.readFileSync("repertorio.json"))
    const index = data.findIndex(p => p.id == id)
    data[index] = cancion
    fs.writeFileSync("repertorio.json", JSON.stringify(data))
    res.send("Canción modificada con éxito")
};

const callback5 =(req, res) => {
    const { id } = req.params
    const data = JSON.parse(fs.readFileSync("repertorio.json"))
    const index = data.findIndex(p => p.id == id)
    data.splice(index, 1)
    fs.writeFileSync("repertorio.json", JSON.stringify(data))
    res.send("Canción eliminado con éxito")
};

module.exports = {callback, callback2, callback3, callback4, callback5}