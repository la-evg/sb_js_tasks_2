ticketLen = ticket.match(/[+\d]/g, '').length;

if (ticketLen === 8){
  console.log("Выбран билет на концерт")
}
else if (ticketLen === 12){
  console.log("Выбран билет в театр")
}
else {console.log("Билет не определен")}