(function(app, undefined) {
  'use strict';

  app.controller('MainController', [MainController]);

  function MainController() {
    var self = this;

    self.api = {
      onSubmit: onSubmit
    };

    self.vm = {
      model: {},
      fields: [{
        key: 'text',
        type: 'input',
        templateOptions: {
          label: 'Text',
          placeholder: 'Formly is terrific!',
          required: true
        }
      }],
      options: {
        formState: {
          horizontalLabelClass: 'col-sm-2',
          horizontalFieldClass: 'col-sm-10',
          readOnly: false
        }
      }
    };

    function onSubmit(){
      alert('submit');
    }
  }
})(angular.module('app'));
