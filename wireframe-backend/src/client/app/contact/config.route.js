(function (){
  'use strict';
  angular
  .module('app.dashboard')
  .config(appRun);

  appRun.$inject = ['$stateProvider'];
  function appRun($stateProvider) {
      $stateProvider
        .state('contacts', {
          // This will get automatically plugged into the unnamed ui-view
          // of the parent state template. Since this is a top level state,
          // its parent state template is index.html.
          templateUrl: 'contact/tpl/contacts.html'
        })
        .state('contacts.detail', {
          views: {
              ////////////////////////////////////
              // Relative Targeting             //
              // Targets parent state ui-view's //
              ////////////////////////////////////

              // Relatively targets the 'detail' view in this state's parent state, 'contacts'.
              // <div ui-view='detail'/> within contacts.html
              "detail" : {
                  templateUrl: 'contact/tpl/detail.html'
              },

              // Relatively targets the unnamed view in this state's parent state, 'contacts'.
              // <div ui-view/> within contacts.html
              "" : { },

              ///////////////////////////////////////////////////////
              // Absolute Targeting using '@'                      //
              // Targets any view within this state or an ancestor //
              ///////////////////////////////////////////////////////

              // Absolutely targets the 'info' view in this state, 'contacts.detail'.
              // <div ui-view='info'/> within contacts.detail.html
              "info@contacts.detail" : {
              templateUrl: 'contact/tpl/info.html' },

              // Absolutely targets the 'detail' view in the 'contacts' state.
              // <div ui-view='detail'/> within contacts.html
              "detail@contacts" : {

              templateUrl: 'contact/tpl/detail.html'
            },

              // Absolutely targets the unnamed view in parent 'contacts' state.
              // <div ui-view/> within contacts.html
              "@contacts" : { },

              // absolutely targets the 'status' view in root unnamed state.
              // <div ui-view='status'/> within index.html
              "status@" : { },

              // absolutely targets the unnamed view in root unnamed state.
              // <div ui-view/> within index.html
              "@" : { }
        }});
  }

})();
