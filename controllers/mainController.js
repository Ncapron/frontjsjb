function mainController($scope) {
    $scope.mavariable = 'Bonjour';
    $scope.mafonction = function () {
        console.log($scope.mavariable);
    };

    $scope.contacts = [];

    $scope.enregistrer = function () {
        console.log($scope.nom, $scope.numtel);
        $scope.contacts.push({
            nom: $scope.nom,
            tel: $scope.numtel
        });
        $scope.nom = '';
        $scope.numtel = '';
    };

    $scope.supprimer = function($index) {
        $scope.contacts.splice($index, 1);
    }
    
}