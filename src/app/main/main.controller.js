(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

    MainController.$inject = [];

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [
      {'name':'540','url': 'https://540.co'},
      {'name':'Yeoman','url': 'http://yeoman.io'},
      {'name':'AngularJS','url': 'https://angularjs.org'},
      {'name':'Gulp','url': 'http://gulpjs.com'}
    ];

    activate();

    function activate() {

    }

  }
})();
