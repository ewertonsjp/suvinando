angular.module('suvApp', ['ui.router']).config(function($stateProvider) {
  $stateProvider
    .state('invoice', {
      url: '/invoice',
      templateUrl: 'components/invoice/invoice.html',
      controller: 'invoiceCtrl'
    });
});;
