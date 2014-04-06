"use strict";

angular.module("demoApp", ['ui.bootstrap', 'angular.directives']);

angular.module("demoApp")
    .controller("DemoCtrl", [function() {

        this.welcome="Angular Really Click Demo";

        this.ok = function() {
           alert("Do Action!");
        };

        this.cancle = function() {
            alert("Cancle");
        };

    }]);