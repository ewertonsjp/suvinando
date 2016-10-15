angular.module('suvApp',[]).controller('invoiceController', function(){
  var invoice = this;
  invoice.total = 0;
  invoice.competencia = "Out2016";

  invoice.tickets = [];
  addTicket({'description':'Aluguel', 'price':200.00})
  addTicket({'description':'Luz', 'price':20.00});
  addTicket({'description':'Água', 'price':17.00});
  addTicket({'description':'Faxina', 'price':60.00});

  function addTicket(ticket) {
    invoice.tickets.push(ticket)
    invoice.total += ticket.price
  }

})
