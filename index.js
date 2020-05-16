// Write your code here!
let body =document.querySelector('body')
let main =document.querySelector('#main')
body.removeChild(main)
for(i=0;i<3;i++){
  let newHeader = document.createElement('header')
  newHeader.setAttribute('id','victory')
  newHeader.innerHTML = "Ebraheem"
  if(i==2){
    newHeader.innerHTML = 'Ebraheem is the champion'
    
  }body.appendChild(newHeader)
}


