var app = angular.module('jsonforms-website');
app.controller('LocalDemoCtrl', ['$scope','DynamicData', function($scope,DynamicData) {

    $scope.dynamicDataProvider=DynamicData;

    $scope.aceLoaded = function(editor) {
        editor.$blockScrolling = Infinity;
        editor.getSession().setMode("ace/mode/javascript");
        editor.setOptions({
            enableSnippets: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        });
    };
    $scope.localModelObject=$scope.dynamicDataProvider.dataSchema;
    $scope.localViewObject=$scope.dynamicDataProvider.uiSchema;
    $scope.localModel = JSON.stringify($scope.localModelObject, undefined, 2);
    $scope.localView = JSON.stringify($scope.localViewObject, undefined, 2);

    $scope.reparse = function() {
        $scope.localModelObject = JSON.parse($scope.localModel);
        $scope.localViewObject = JSON.parse($scope.localView);
    };
}]);
app.factory('DynamicData', function() {
    var provider={};
    provider.data={};
    provider.dataSchema={
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "format": "objectId"
            },
            "lastName": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "gender": {
                "type": "string",
                "enum": [
                    "Male",
                    "Female"
                ]
            },
            "active": {
                "type": "boolean"
            },
            "timeOfRegistration": {
                "type": "string",
                "format": "date-time"
            },
            "weight": {
                "type": "number"
            },
            "height": {
                "type": "integer"
            },
            "nationality": {
                "type": "string",
                "enum": [
                    "German",
                    "French",
                    "UK",
                    "US",
                    "Spanish",
                    "Italian",
                    "Russian"
                ]
            },
            "dateOfBirth": {
                "type": "string",
                "format": "date-time"
            }
        },
        "additionalProperties": false,
        "required": [
            "id",
            "lastName",
            "email"
        ]
    };
    provider.uiSchema={
        "type": "VerticalLayout",
        "elements": [
            {
                "type": "HorizontalLayout",
                "elements": [
                    {
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
                            },
                            {
                                "type": "Control",
                                "scope": {
                                    "$ref": "#/properties/dateOfBirth"
                                }
                            },
                            {
                                "type": "HorizontalLayout",
                                "elements": [
                                    {
                                        "type": "Control",
                                        "scope": {
                                            "$ref": "#/properties/weight"
                                        }
                                    },
                                    {
                                        "type": "Control",
                                        "scope": {
                                            "$ref": "#/properties/height"
                                        }
                                    },
                                    {
                                        "type": "Control",
                                        "scope": {
                                            "$ref": "#/properties/nationality"
                                        }
                                    }
                                ]
                            },
                            {
                                "type": "Control",
                                "scope": {
                                    "$ref": "#/properties/gender"
                                }
                            }
                        ]
                    },
                    {
                        "type": "VerticalLayout",
                        "elements": [
                            {
                                "type": "Control",
                                "scope": {
                                    "$ref": "#/properties/timeOfRegistration"
                                }
                            },
                            {
                                "type": "Control",
                                "scope": {
                                    "$ref": "#/properties/email"
                                }
                            },
                            {
                                "type": "Control",
                                "scope": {
                                    "$ref": "#/properties/active"
                                }
                            }
                        ]
                    }
                ]
            }

        ]
    };
    return provider;
});
