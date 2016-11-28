angular.module('suvApp').factory('invoiceFactory', function() {
  var invoice = {};

  invoice.id = -1;
  invoice.competencia = "Out2016";
  invoice.status = "EM ABERTO";
  invoice.total = 0;

  invoice.partners = [
    {'name':'Ewerton Costa', 'outcome':-5.87, 'amount':0.00},
    {'name':'Walter White', 'outcome':9.85, 'amount':0.00},
    {'name':'Rex', 'outcome':-2.49, 'amount':0.00},
    {'name':'Bill', 'outcome':-1.49, 'amount':0.00}
  ];

  invoice.tickets = [];
  if (invoice.tickets.length == 0) {
    addTicket({'description':'Aluguel', 'price':200.00})
    addTicket({'description':'Luz', 'price':17.81});
    addTicket({'description':'Água', 'price':27.33});
    addTicket({'description':'Faxina', 'price':60.00});
  }

  invoice.addTicket = function(ticket) {
    addTicket(ticket);
  }

  function addTicket(ticket) {
    if (!ticket.id) {
        ticket.id = nextId();
        invoice.tickets.push(ticket)
    } else {
        invoice.tickets[ticket.id] = ticket;
    }

    var sum = 0;
    for (i = 0; i < invoice.tickets.length; i++) {
      sum = sum += invoice.tickets[i].price;
    }

    invoice.total = sum;
    splitthebill();
  }

  function splitthebill() {
    var value = invoice.total / invoice.partners.length;
    for (i = 0; i < invoice.partners.length; i++) {
      invoice.partners[i].amount = value - invoice.partners[i].outcome;
    }
  }

  function nextId() {
      //FIXME
      return 0;
  }

  return invoice;

});
