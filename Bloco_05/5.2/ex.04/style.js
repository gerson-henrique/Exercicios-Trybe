mBody= document.getElementsByTagName("body")

mHeader = document.createElement("h1")
mBody[0].appendChild(mHeader);
mHeader.innerText = "Exercício 5.2 - JavaScript DOM"

mMain = document.createElement("main")
mBody[0].appendChild(mMain);
mMain.className = 'main-content'


fSection = document.createElement("section")
mMain.appendChild(fSection)
fSection.className = "center-content"

fParagrafer = document.createElement("p")
fSection.appendChild(fParagrafer)
fParagrafer.innerText = "Estou criando um site por comandos javascript"

lSection = document.createElement("section")
mMain.appendChild(lSection)
lSection.className = "left-content"

rSection = document.createElement("section")
mMain.appendChild(rSection)
rSection.className = "right-content"

mImg = document.createElement("img")
lSection.appendChild(mImg)
mImg.src = "https://picsum.photos/200"
mImg.className = "small-image "

fLst = document.createElement('lo')
rSection.appendChild(fLst)
e1   = document.createElement('li')
fLst.appendChild(e1)
e1.innerText = "um"

e2   = document.createElement('li')
fLst.appendChild(e2)
e2.innerText = "dois"

e3   = document.createElement('li')
fLst.appendChild(e3)
e3.innerText = "tres"

e4   = document.createElement('li')
fLst.appendChild(e4)
e4.innerText = "quatro"

e5   = document.createElement('li')
fLst.appendChild(e5)
e5.innerText = "cinco"
e6   = document.createElement('li')
fLst.appendChild(e6)
e6.innerText = "seis"
e7   = document.createElement('li')
fLst.appendChild(e7)
e7.innerText = "sete"
e8   = document.createElement('li')
fLst.appendChild(e8)
e8.innerText = "oito"
e9   = document.createElement('li')
fLst.appendChild(e9)
e9.innerText = "nove"
e10  = document.createElement('li')
fLst.appendChild(e10)
e10.innerText = "dez"




mH3  = document.createElement('h3')
mMain.appendChild(mH3)

mH2  = document.createElement('h3')
mMain.appendChild(mH2)

mH  = document.createElement('h3')
mMain.appendChild(mH)

mHeader.className = "title"

let containerH = document.getElementsByTagName("h3");


for(let i=containerH.length-1;i>=0;i-=1){
 containerH[i].className = "description"
}


let canalizador = document.querySelector('.left-content')

mMain.removeChild(canalizador)

fSection.style.backgroundColor = "green"
fLst.removeChild(e9)
fLst.removeChild(e10)