app = angular.module('app', []);

app.controller('AppCtrl', function ($scope) {
    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '09876543210',
            email: 'karan@email.com'
        }
    ];

    $scope.styleDemo = function () {
        if (!$scope.styler) {
            return;
        }

        return {
            background: 'red',
            fontWeight: 'bold'
        };
    };
});