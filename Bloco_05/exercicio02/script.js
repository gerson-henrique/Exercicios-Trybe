const paragrafer = document.getElementsByClassName("paragraph");

paragrafer[0].style.borderStyle="solid" 

for( let key in paragrafer ){
  paragrafer[key].style.color= "red"
}