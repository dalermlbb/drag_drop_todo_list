/*
Events degani - hodisa degani
hodisa degani - malum bir ozgarish hodisasi

birinchi hodisani atribut orqali belgilash mumkin

html tagda atributida onclick="" qoyilsa kamchiligi 
javascript bilan html fayl birlashib ketadi tartibsizlik
boshlanadi

javascript code bilan html code bitta joyda yozilsa 
tartibsizlik boshlanadi

2.usul
faqat bitta event uchun bitta function chaqirilishi kamchilik

3.usul
addEventListener() — JavaScript orqali elementga hodisa 
(event) qo‘shish uchun ishlatiladi. Juda ko‘p ishlatiladigan 
va qulay usul.

addEventListener() degani — “Hodisa tinglovchini (EventListener)
qo‘shgin” degan ma’noni bildiradi.
(eventni eshtuvchi narsa qoshgin)

addEventListener() — onclick ga qaraganda ko‘proq 
nazorat va imkoniyatlar beradi.
Handlers


parametr(iventni nomi,function boladi)
( manabu event bajarilganda , manabu function bajariladi )

*/


let btn = document.querySelector('button')
let contr = document.querySelector('.container')

// contr.addEventListener( 'mousedown' , ()=>{console.log('bosildi');
// })

// contr.addEventListener( ' click ' , ()=>{contr.textContent = 'bosildi'
// })

let element = document.querySelector('.box')
let space = document.querySelector('.contianer')

element.addEventListener('',()=>{})