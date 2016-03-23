(function formlyConfigClosure(app, undefined) {
  'use strict';
  app.config(['formlyConfigProvider', configureFormly]);

  // copy-pasted from http://angular-formly.com/#/example/bootstrap-specific/bootstrap-horizontal
  function configureFormly(formlyConfigProvider) {
    // set templates here
    formlyConfigProvider.setWrapper({
      name: 'horizontalBootstrapLabel',
      template: [
        '<label for="{{::id}}" class="col-sm-2 control-label">',
        '{{to.label}} {{to.required ? "*" : ""}}',
        '</label>',
        '<div class="col-sm-8">',
        '<formly-transclude></formly-transclude>',
        '</div>'
      ].join(' ')
    });

    formlyConfigProvider.setWrapper({
      name: 'horizontalBootstrapCheckbox',
      template: [
        '<div class="col-sm-offset-2 col-sm-8">',
        '<formly-transclude></formly-transclude>',
        '</div>'
      ].join(' ')
    });

    formlyConfigProvider.setType({
      name: 'horizontalInput',
      extends: 'input',
      wrapper: ['horizontalBootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
      name: 'horizontalCheckbox',
      extends: 'checkbox',
      wrapper: ['horizontalBootstrapCheckbox', 'bootstrapHasError']
    });
  
  }
})(angular.module('app'));
