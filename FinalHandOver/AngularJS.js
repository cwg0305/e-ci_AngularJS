var app = angular.module('Calculator', []);
var answer;
app.controller('validCtrl', ['$scope', function($scope) {
    // this regular expression for number pattern. 
    $scope.numberPattern = '^[0-9]+[.]?[0-9]*$';
    // if number pattern or operaiton input are not correct, this will set answer to warn user
    $scope.error = function() { 
        answer =  "Please check inputs again";
    }

  }]);

app.controller('calCtrl', function($scope) {
    $scope.addition = function() { 
        answer = parseFloat($scope.number1) + parseFloat($scope.number2) 
      }
    $scope.subtraction = function() { 
        answer =  parseFloat($scope.number1) - parseFloat($scope.number2) 
    }
    $scope.multiplication = function() { 
        answer =  parseFloat($scope.number1) * parseFloat($scope.number2) 
      }
    $scope.division = function() { 
        answer =  parseFloat($scope.number1) / parseFloat($scope.number2) 
    }
    $scope.squareRoot = function() { 
        answer =  Math.pow(parseFloat($scope.number1), parseFloat($scope.number2)).toString();
    }

});
app.controller('anwCtrl', function ($scope) {
 $scope.displayAnswer = function () {
        $scope.answer = answer;
    }
});


