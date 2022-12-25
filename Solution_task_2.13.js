let ticketObj = new Object;
regType = /(\w+)(?=:)/g
regTickets = /(\w+\d+)(?:)/g
for (ticket of tickets.split(". ")){
  ticketObj[ticket.toLowerCase().match(regType)] = ticket.match(regTickets) != null ? ticket.match(regTickets) : [""]
}
console.log(ticketObj)