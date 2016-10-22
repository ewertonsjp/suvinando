angular.module('suvApp').controller('invoiceCtrl', function($scope){

  /*TEMP*/
  $scope.id = -1;

  $scope.competencia = "Out2016";
  $scope.total = 0;
  $scope.ticketInView = [{'id':'','description':'','price':0}];

  $scope.partners = [
    {'name':'Ewerton Costa', 'amount':0.00},
    {'name':'Walter White', 'amount':0.00},
    {'name':'Rex', 'amount':0.00},
    {'name':'Bill', 'amount':0.00}
  ];

  $scope.tickets = [];
  if ($scope.tickets.length == 0) {
    addTicket({'description':'Aluguel', 'price':200.00})
    addTicket({'description':'Luz', 'price':20.00});
    addTicket({'description':'Água', 'price':17.00});
    addTicket({'description':'Faxina', 'price':60.00});
  }

  $scope.addTicket = function() {
    addTicket($scope.ticketInView);
    cleanTicketInView();
  }

  $scope.updateTicketInView = function(index) {
    var ticketByIndex = $scope.tickets[index];
    $scope.ticketInView.id = ticketByIndex.id;
    $scope.ticketInView.description = ticketByIndex.description;
    $scope.ticketInView.price = ticketByIndex.price;
  }

  function addTicket(ticket) {
    if (!ticket.id) {
        ticket.id = nextId();
        $scope.tickets.push(ticket)
    } else {
        $scope.tickets[ticket.id] = ticket;
    }

    var sum = 0;
    for (i = 0; i < $scope.tickets.length; i++) {
      sum = sum +=$scope.tickets[i].price;
    }

    $scope.total = sum;
    splitthebill();
  }

  function splitthebill() {
    var value = $scope.total / $scope.partners.length;
    for (i = 0; i < $scope.partners.length; i++) {
      $scope.partners[i].amount = value;
    }
  }

  function cleanTicketInView() {
    $scope.ticketInView = [{'description':'','price':0}];
  }

  function nextId() {
      return ++$scope.id;
  }

})
