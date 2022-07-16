// Функция scheduleMeeting(..) должна получать время начала встречи (строка «чч:мм» в 24-часовом форма- те)
// и ее продолжительность (в минутах). Функция должна вернуть true, если встреча приходится 
// полностью на рабочий день (в соответствии с временем, заданным в dayStart и dayEnd); 
// если встреча выходит за рамки рабочего дня, возвращается false.
// scheduleMeeting("7:00",15);

const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {

  function convertToMinutes(time) {
    const arrTime = time.split(':');
    const minutes = +arrTime[0] * 60 + +arrTime[1]
    return minutes
  }

  if (convertToMinutes(startTime) < convertToMinutes(dayStart)) {
    return false
  }
  if (convertToMinutes(startTime) + +durationMinutes > convertToMinutes(dayEnd)) {
    return false
  }
  return true
}

console.log(scheduleMeeting("17:45", 1))
