angular.module("textAngularTest", ['textAngular'])
  .controller("homeCtrl", function ($scope) {

    // console.log("vikash", $scope.someModel);

  })
  .directive("richEditor", function () {
    return {
      restrict: "A",
      scope: {
        variables: "=",
        ngModel: "="
      },
      template: "<div>\
      <div text-angular=text-angular' name='htmlcontent' ta-disabled='disabled' ng-model='ngModel'></div>\
      <div style=color:#212936;font-size:18px;'><strong>Email Fields</strong></div>\
    <span style='background-color:lightblue;color:#184080;font-size:18px;' ng-repeat='variable in variables' ng-click='varSelected(variable)'>{{ variable }}</span>\
    </div>",
      link: function (scope, element, attrs) {
        var textarea = element.find("textarea");
        scope.varSelected = function (variable) {
          if (!scope.ngModel) {
            scope.ngModel = "";
          }
          var position = textarea[0].selectionStart;
          var val = scope.ngModel.substring(0, position) + variable + scope.ngModel.substring(position);
          scope.ngModel = val;
        }
      }
    }
  });

// function wysiwygeditor($scope) {
//     $scope.orightml = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li><li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>';
//     $scope.htmlcontent = $scope.orightml;
//     $scope.disabled = false;
// };