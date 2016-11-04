(function(){
  'use strict';

  angular
  .module('app.contact')
  .controller('Contact', Contact);

  function Contact() {
    var dashboardVm = this;
    dashboardVm.mytitle = "Gmail";
  }
})();
