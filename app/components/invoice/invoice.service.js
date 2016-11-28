angular.module('suvApp').service('invoiceService', function(invoiceFactory) {

  this.findActiveInvoice = function() {
    return invoiceFactory;
  }

  this.updateInvoice = function(invoice) {
    invoice.status = "UPDATED";
  }

});
