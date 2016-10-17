angular.module('suvApp',[]).controller('invoiceController', function($rootScope){
  var invoice = this;

  invoice.competencia = "Out2016";
  invoice.total = 0;
  invoice.ticketInView = [{'description':'','price':0}];

  invoice.partners = [
    {'name':'Ewerton Costa', 'amount':0.00},
    {'name':'Walter White', 'amount':0.00},
    {'name':'Rex', 'amount':0.00},
    {'name':'Bill', 'amount':0.00}
  ];

  invoice.tickets = [];
  if (invoice.tickets.length == 0) {
    addTicket({'description':'Aluguel', 'price':200.00})
    addTicket({'description':'Luz', 'price':20.00});
    addTicket({'description':'Água', 'price':17.00});
    addTicket({'description':'Faxina', 'price':60.00});
  }

  invoice.addTicket = function() {
    addTicket(invoice.ticketInView);
    cleanTicketInView();
  }

  function addTicket(ticket) {
    invoice.tickets.push(ticket)
    invoice.total += ticket.price
    splitthebill();
  }

  function splitthebill() {
    var value = invoice.total / invoice.partners.length;
    for (i = 0; i < invoice.partners.length; i++) {
      invoice.partners[i].amount = value;
    }
  }

  function cleanTicketInView() {
    invoice.ticketInView = [{'description':'','price':0}];
  }

})
