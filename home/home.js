var app = angular.module('jsonforms-website');
app.controller('HomeCtrl', ['$scope','StaticData', function($scope,StaticData)  {
    $scope.staticDataProvider=StaticData;
    $scope.aceLoaded = function(editor) {
        editor.$blockScrolling = Infinity;
        editor.getSession().setMode("ace/mode/javascript");
        editor.setOptions({
            enableSnippets: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        });
    };
    $scope.localModelObject=$scope.staticDataProvider.dataSchema;
    $scope.localViewObject=$scope.staticDataProvider.uiSchema;
    $scope.localModel = JSON.stringify($scope.localModelObject, undefined, 2);
    $scope.localView = JSON.stringify($scope.localViewObject, undefined, 2);

    $scope.reparse = function() {
        $scope.localModelObject = JSON.parse($scope.localModel);
        $scope.localViewObject = JSON.parse($scope.localView);
    };
}]);
app.factory('StaticData', function() {
    var provider={};
    provider.data={};
    provider.dataSchema={
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            }
        }
    };
    provider.uiSchema={
        "type": "VerticalLayout",
        "elements": [
            {
                "type": "Control",
                "scope": {
                    "$ref": "#/properties/firstName"
                }
            },
            {
                "type": "Control",
                "scope": {
                    "$ref": "#/properties/lastName"
                }
            }
        ]
    };
    return provider;
});
