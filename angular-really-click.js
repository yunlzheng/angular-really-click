"use strict";
/**
 * Usage: Add attributes: ng-really-message="Are you sure?" ng-really-click="takeAction()" function
 */
angular.module('angular.directives', ['dialogs'])
    .directive('ngReallyClick', ['$dialogs', function ($dialogs) {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {

                element.bind('click', function () {

                    var dlg = $dialogs.confirm(attrs.ngReallyTitle ? attrs.ngReallyTitle : 'Confirm D, message', attrs.ngReallyMessage ? attrs.ngReallyMessage : 'confirm messages...');

                    dlg.result.then(function (btn) {

                        $scope.$eval(attrs.ngReallyClick);

                    }, function (btn) {
                    });

                });

            }
        }
    }]);