'use strict';

const KEY = 'Projects';
var gMyGallery = [];
var gId = 1;

_creatProjs();

function getProjsForDisplay() {
    return gMyGallery;
}

// function getProjById(projId) {
//     return gMyGallery.find(proj => proj.id === projId);
// }

// Private functions:
function _creatProjs() {
    _createProj('Minesweepers', 'Board Game', 'https://ofek-rusaev.github.io/minesweepers-sprint/')
    _createProj('Bookshop', 'E-Commerce', 'https://ofek-rusaev.github.io/bookshop-project/')
    _createProj('Meme Generator', 'Just for fun', 'https://ofek-rusaev.github.io/meme-generator-proj/')
}

function _createProj(name, title, url) {
    var proj = {
        id: gId++,
        name: name,
        title: title,
        desc: 'projData.desc',
        url: url,
        publishedAt: 'January 2020',
        labels: ['Matrixes', 'keyboard events']
    }
    gMyGallery.push(proj);
}