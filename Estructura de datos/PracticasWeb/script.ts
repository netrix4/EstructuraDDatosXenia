const body = document.getElementById('body')

const title = document.createElement('h1')
title.textContent = 'ElementCreatedByCode'

body?.append(title)
//El signo de interrogacion valida si 
//el elemento es nulo para agregarlo o no

const peopleName: string[]  = [
    'Mario', 
    'Roberto', 
    'Batman', 
    'Mauricioelperro', 
    'Mariana'
]

const div = document.createElement('div')
div.id = 'container'

const ul = document.createElement('ul')
ul.id = 'lista'

const li = document.createElement('li')
li.textContent = peopleName[0]

peopleName.forEach(item => {
    
});

ul.append(li)
div.append(ul)
body?.append(div)

console.log('hi');

