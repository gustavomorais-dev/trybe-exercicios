const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];

const createAllDays = () => {
  daysList = document.getElementById('days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = document.createElement('li');
    day.innerHTML = decemberDaysList[index];
    day.classList.add('day');
    holidays.includes(decemberDaysList[index]) && day.classList.add('holiday');
    fridays.includes(decemberDaysList[index]) && day.classList.add('friday');

    daysList.appendChild(day);
  }
}

createAllDays();

// Cria botão feriados

const createHolidayBtn = (string) => {
  const btn = document.createElement('button');
  btn.innerHTML = string;
  btn.id = 'btn-holiday';
  const div = document.getElementsByClassName('buttons-container')[0];
  div.appendChild(btn);
}

createHolidayBtn('Feriados');

// Muda cor dos feriados

const changeHolidaysColors = () => {
  const days = document.getElementsByClassName('day');
  for (let index = 0; index < days.length; index += 1) {
    holidays.includes(parseInt(days[index].innerHTML)) && (days[index].style.backgroundColor == 'yellow' ? days[index].style.backgroundColor = 'rgb(238,238,238)' : days[index].style.backgroundColor = 'yellow');
  }
}

const holidayBtn = document.getElementById('btn-holiday');
holidayBtn.addEventListener('click', changeHolidaysColors);