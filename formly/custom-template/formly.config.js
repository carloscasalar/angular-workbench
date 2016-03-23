(function formlyConfigClosure(app, undefined) {
  'use strict';
  app.config(['formlyConfigProvider', configureFormly]);

  // copy-pasted from http://angular-formly.com/#/example/other/read-only-form
  function configureFormly(formlyConfigProvider) {
    // Replace formlyBootstrap bootstrapLabel wrapper to implement horizontal forms
    formlyConfigProvider.removeWrapperByName('bootstrapLabel');
    formlyConfigProvider.setWrapper({
      name: 'bootstrapLabel',
      template: labelWrapperTemplate()
    });

    // Replace formlyBootstrap input field type to implement read-only forms
    formlyConfigProvider.setType({
      name: 'input',
      template: inputTemplate(),
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      overwriteOk: true
    });
  }
  /** Template for label */
  function labelWrapperTemplate() {
    return [
      '<div>',
      '  <label for="{{id}}" class="control-label" ng-class="formState.horizontalLabelClass">',
      '    {{to.label}} {{to.required ? \'*\' : \'\'}}',
      '  </label>',
      '  <div ng-class="formState.horizontalFieldClass">',
      '    <formly-transclude></formly-transclude>',
      '  </div>',
      '</div>'
    ].join(' ');
  }
  /** Template for input */
  function inputTemplate() {
    return [
      '<div>',
      '  <input ng-if="!formState.readOnly" class="form-control" ng-model="model[options.key]">',
      '  <p ng-if="formState.readOnly" class="form-control-static">{{model[options.key]}}</p>',
      '</div>'
    ].join(' ');
  }
})(angular.module('app'));
