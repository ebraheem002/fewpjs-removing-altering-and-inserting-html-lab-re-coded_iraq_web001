// Write your code here!
let body =document.querySelector('body')
let main =document.querySelector('#main')
body.removeChild(main)
let newHeader = document.createElement('header')
newHeader.setAttribute('id','victory')
newHeader.innerHTML = "Ebraheem"


body.appendChild(newHeader)


