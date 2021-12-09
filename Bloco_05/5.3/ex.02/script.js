function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');



    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const last = document.getElementById('days')

function addDays(day) {

    for (i = 0; i < day.length; i += 1) {
        let control = day[i];
        let sun = document.createElement('li');
        sun.innerText = control;
        last.appendChild(sun);
        sun.className = "day"


        if (day[i] == 24 || day[i] == 25 || day[i] == 31) {
            sun.classList.add("holiday")

        }

        if (day[i] == 4 || day[i] == 11 || day[i] == 18 || day[i] == 25) {
            sun.classList.add("friday")
        }

    }

}





addDays(dezDaysList)


function holyDay() {

    feriados = document.createElement('button')
    feriados.id = 'btn-holiday'
    let divSelector = document.querySelector('.buttons-container')

    divSelector.appendChild(feriados)
    feriados.innerText = "Feriados"

}

holyDay()

let controle = false

function holyDayColor() {

    
    mudaCores = document.getElementsByClassName('holiday')

    if (controle == false) {

        for (i = 0; i < mudaCores.length; i += 1) {

            corum = mudaCores[i];

            corum.style.backgroundColor = "Aquamarine"
            controle = true
        }
    } else {

        for (i = 0; i < mudaCores.length; i += 1) {

            corum = mudaCores[i];

            corum.style.backgroundColor = "rgb(238,238,238)"
            controle = false

        }


    }



}



function sextou() {

    sexta = document.createElement('button')
    sexta.id = 'btn-friday'
    let divSelector = document.querySelector('.buttons-container')

    divSelector.appendChild(sexta)
    sexta.innerText = "Sexta-Feiras"

}

sextou()

let controleI = false



data = document.getElementsByClassName("friday")
let backup =[];
for (i=0;i<data.length;i+=1){
    backup[i] = data[i].innerText
}

console.log(backup)

function txtSextou() {



   

    console.log("Teste")
    mudaTexto = document.getElementsByClassName('friday')

    if (controleI == false) {

        for (i = 0; i < mudaTexto.length; i += 1) {

            lorum = mudaTexto[i];

            lorum.innerText = "Sextou"
            controleI = true
        }
    } else {

        for (i = 0; i < mudaTexto.length; i += 1) {

            lorum = mudaTexto[i];

          lorum.innerText = backup[i]
                        
            
            controleI = false

        }


    }



}
feriados.addEventListener("click", holyDayColor)
sexta.addEventListener("click",txtSextou)


let zoom = document.getElementsByClassName('day')


function zoomOnNumber (){

    for(i=0;i<zoom.length;i+=1){
        let lens = zomm[i]
        lens.style.fontSize = "500"

    }
}
 lens.addEventListener('mouseover',zoomOnNumber)