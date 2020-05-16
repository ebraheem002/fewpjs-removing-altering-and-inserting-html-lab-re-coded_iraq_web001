// Write your code here!
let body =document.querySelector('body')
let main =document.querySelector('#main')
body.removeChild(main)
for(i=0;i<3;i++){
  let newHeader = document.createElement('h1')
  newHeader.setAttribute('id','victor')
  newHeader.innerHTML = "Ebraheem"
  if(i==3){
    newHeader.innerHTML = "Ebraheem is the hero"
    
  }body.appendChild(newHeader)
}


