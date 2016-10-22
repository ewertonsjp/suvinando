angular.module('suvApp').controller('invoiceCtrl', function($scope){

  $scope.competencia = "Out2016";
  $scope.total = 0;
  $scope.ticketInView = [{'description':'','price':0}];

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

  function addTicket(ticket) {
    $scope.tickets.push(ticket)
    $scope.total += ticket.price
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

})
