const btn = document.getElementById('btnAsso')
let conter = 0;

let summer = () => {
 

 conter = parseInt(btn.innerText)
  conter += 1

  btn.innerText = conter

}

btn.addEventListener('click',summer)