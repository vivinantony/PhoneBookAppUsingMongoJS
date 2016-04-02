angular.module('app', []).controller('AppCtrl', function($scope, $http) {

    $scope.stringHeader = "Phone Book";
    $scope.stringCreateContact = "Create Contact";
    $scope.stringEditContact = "Edit Contact";
    $scope.stringViewContact = "View Contact";
    $scope.stringDeleteContact = "Delete Contact";
    $scope.stringName = "Name";
    $scope.stringMobile = "Mobile";
    $scope.stringEmail = "Email";
    $scope.stringNotes = "Notes";
    $scope.stringClose = "Close";
    $scope.stringCreate = "Create";
    $scope.stringUpdate = "Update";
    $scope.stringYes = "Yes";
    $scope.stringNo = "No";
    $scope.stringActions = "Actions";

    $scope.quantity = 10;

    //Sorting
    $scope.sortKey = "-_id";
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };

    var refresh = function() {
        $http.get('/contactlist').success(function (response) {
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addContact = function() {
        $http.post('/contactlist', $scope.contact).success(function(response) {
            $scope.successAddContact = true;
            refresh();
        });
    };

    $scope.remove = function(id) {
        $http.delete('/contactlist/' + id).success(function(response) {
            refresh();
        });
    };

    $scope.edit = function(id) {
        $http.get('/contactlist/' + id).success(function(response) {
            $scope.contact = response;
        });
    };

    $scope.update = function() {
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
            refresh();
        });
    };

    $scope.resetValues = function() {
        $scope.contact = "";
    };

    $scope.passData = function(id) {
        $http.get('/contactlist/' + id).success(function(response) {
            $scope.contact = response;
        });
    };
});