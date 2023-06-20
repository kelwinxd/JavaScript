export default function initGetDate(){
 console.log('initgetdate funcionando')
 console.log(Day)

if(verifyDay() && verifyHour()){
    span.textContent = 'Open'
    span.style.color = 'green'
} else {
    span.textContent = 'Closed'
    span.style.color = 'red'
}
 
 

}
const span = document.getElementById('work')

const business = document.querySelector('[data-week]')


//para pegar os numeros dentro do dataset
const dataWeek =  business.dataset.week.split(',').map(Number);
const dataHours = business.dataset.hours.split(',').map(Number);


const Data = new Date()
const Day = Data.getDay()
const Hours = Data.getHours()

function verifyDay(){
    if((dataWeek.includes(Day))){
        return true
    } else {
        return false
    }
}

function verifyHour(){
    if(Hours >= dataHours[0] && Hours < dataHours[1]){
        return true
    } else {
        return false
    }
}




