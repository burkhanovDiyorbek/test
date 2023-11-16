    let dayInp = document.getElementById('day')
    let monthInp = document.getElementById('month')
    let yearInp = document.getElementById('year')
    let resultHTML = document.querySelector('.result')
    let btn = document.getElementById('btn')
    let dateNew = new Date()
    let dateToday = dateNew.getDate()
    let monthToday = dateNew.getMonth()+1
    let yearToday = dateNew.getFullYear() 
    let day = document.getElementById('dayT')
    let year = document.getElementById('yearT')
    let month = document.getElementById('monthT')

    console.log(dateToday);
    btn.addEventListener('click', ()=>{

 
        let monthRes= monthToday-monthInp.value
        let dayRes= dateToday-dayInp.value;
        let yearRes= yearToday-yearInp.value

        if (monthToday < monthInp.value) {
            yearRes--;
            monthRes = 12- (monthInp.value - monthToday);
          }
        if(dayRes<0){
            
            console.log(dayRes);
            dayRes=0
        }
       
        day.textContent=`${dayRes}`
        month.textContent=`${monthRes}`
        year.textContent=`${yearRes}`
    }
    )