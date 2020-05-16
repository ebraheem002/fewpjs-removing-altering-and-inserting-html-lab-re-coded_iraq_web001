// Write your code here!
let body =document.querySelector('body')
let main =document.querySelector('#main')
body.removeChild(main)
let myName='Ebraheem'
let newHeader = document.createElement('h1')
newHeader.setAttribute('id','victory')
newHeader.innerHTML = ''+myName+' is the champion'


body.appendChild(newHeader)


