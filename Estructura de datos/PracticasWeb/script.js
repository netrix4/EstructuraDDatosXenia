var body = document.getElementById('body');
var title = document.createElement('h1');
title.textContent = 'ElementCreatedByCode';
body === null || body === void 0 ? void 0 : body.append(title);
//El signo de interrogacion valida si 
//el elemento es nulo para agregarlo o no
var peopleName = [
    'Mario',
    'Roberto',
    'Batman',
    'Mauricioelperro',
    'Mariana'
];
var div = document.createElement('div');
div.id = 'container';
var ul = document.createElement('ul');
ul.id = 'lista';
var li = document.createElement('li');
li.textContent = peopleName[0];
peopleName.forEach(function (item) {
});
ul.append(li);
div.append(ul);
body === null || body === void 0 ? void 0 : body.append(div);
console.log('hi');
