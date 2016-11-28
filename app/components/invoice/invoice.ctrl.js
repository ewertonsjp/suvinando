angular.module('suvApp').controller('invoiceCtrl', function($scope, invoiceFactory) {

  $scope.invoice = invoiceFactory;
  $scope.ticketInView = [{'id':'','description':'','price':0}];

  $scope.addTicket = function() {
    $scope.invoice.addTicket($scope.ticketInView);
    cleanTicketInView();
  }

  $scope.updateTicketInView = function(index) {
    var ticketByIndex = $scope.invoice.tickets[index];
    $scope.ticketInView.id = ticketByIndex.id;
    $scope.ticketInView.description = ticketByIndex.description;
    $scope.ticketInView.price = ticketByIndex.price;
  }

  function cleanTicketInView() {
    $scope.ticketInView = [{'id':'','description':'','price':0}];
  }

});
