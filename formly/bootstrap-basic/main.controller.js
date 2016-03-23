(function(app, undefined) {
  'use strict';

  app.controller('MainController', ['$window', MainController]);

  function MainController($window) {
    var self = this;

    self.api = {
      onSubmit: onSubmit
    };
    self.vm = {};

    self.vm.form1 = {
      model: {},
      fields: [{
        className: 'row',
        fieldGroup: [{
          className: 'col-sm-2',
          type: 'input',
          key: 'name',
          templateOptions: {
            label: 'Name',
            required: true
          },
        }, {
          className: 'col-sm-10',
          type: 'input',
          key: 'lastName',
          templateOptions: {
            label: 'Last Name',
            required: true
          },
        }]
      }, {
        className: 'row',
        fieldGroup: [{
          className: 'col-sm-7',
          type: 'input',
          key: 'address',
          templateOptions: {
            label: 'Address'
          }
        }, {
          className: 'col-sm-1',
          type: 'input',
          key: 'zip',
          templateOptions: {
            label: 'ZIP Code'
          }
        }, {
          className: 'col-sm-4',
          type: 'input',
          key: 'phone',
          templateOptions: {
            label: 'Phone number',
            required: true
          }
        }]
      }],
      options: {}
    };

    self.vm.form2 = {
      model: {},
      fields: [{
        className: 'row',
        fieldGroup: [{
            className: 'col-md-2',
            type: 'input',
            key: 'name',
            templateOptions: {
              label: 'Name',
              required: true
            },
          }, {
            className: 'col-md-10',
            type: 'input',
            key: 'lastName',
            templateOptions: {
              label: 'Last Name',
              required: true
            },
          },

          {
            className: 'col-md-7',
            type: 'input',
            key: 'address',
            templateOptions: {
              label: 'Address'
            }
          }, {
            className: 'col-md-1',
            type: 'input',
            key: 'zip',
            templateOptions: {
              label: 'ZIP Code'
            }
          }, {
            className: 'col-md-4',
            type: 'input',
            key: 'phone',
            templateOptions: {
              label: 'Phone number',
              required: true
            }
          }
        ]
      }],
      options: {}
    };

    self.vm.hform = {
      model: {},
      options: {},
      fields: [{
        key: 'favColor',
        type: 'horizontalInput',
        templateOptions: {
          label: 'My favorite color',
          type: 'text',
          placeholder: 'color',
          required: true
        }
      }, {
        key: 'email',
        type: 'horizontalInput',
        templateOptions: {
          label: 'My email',
          type: 'email',
          placeholder: 'your@email.com',
          required: false
        }
      }]
    };

    function onSubmit() {
      $window.alert('submit done');
    }
  }
})(angular.module('app'));
