var app = angular.module("ethics-app");


// User create controller
app.controller("userCreateController", function($scope, $rootScope, $routeParams, $filter, $translate, $location, config, $window, $authenticationService, $userService, $universityService, $instituteService) {

    /*************************************************
        FUNCTIONS
     *************************************************/

    /**
     * [redirect description]
     * @param  {[type]} path [description]
     * @return {[type]}      [description]
     */
    $scope.redirect = function(path){
        $location.url(path);
    };

    /**
     * [send description]
     * @return {[type]} [description]
     */
    $scope.send = function(){
        // Validate input
        if($scope.createUserForm.$invalid) {
            // Update UI
            $scope.createUserForm.email_address.$pristine = false;
            $scope.createUserForm.title.$pristine = false;
            $scope.createUserForm.first_name.$pristine = false;
            $scope.createUserForm.last_name.$pristine = false;
            $scope.createUserForm.institute_id.$pristine = false;
            $scope.createUserForm.blocked.$pristine = false;
        } else {
            $scope.$parent.loading = { status: true, message: "Creating new user" };

            // Create new user
            $userService.create($scope.new_user)
            .then(function onSuccess(response) {
                var user = response.data;

                // Redirect
                $scope.redirect("/users/" + user.user_id);
            })
            .catch(function onError(response) {
                $window.alert(response.data);
            });
        }
    };

    /**
     * [description]
     * @param  {[type]} related_data [description]
     * @return {[type]}              [description]
     */
    $scope.load = function(related_data){
        // Check which kind of related data needs to be requested
        switch (related_data) {
            case 'universities': {
                $scope.$parent.loading = { status: true, message: "Loading universities" };

                // Load universities
                $universityService.list($scope.filter)
                .then(function onSuccess(response) {
                    $scope.universities = response.data;
                    $scope.$parent.loading = { status: false, message: "" };
                })
                .catch(function onError(response) {
                    $window.alert(response.data);
                });
                break;
            }
            case 'institutes': {
                if($scope.university_id){
                    if($scope.university_id !== null){
                        $scope.$parent.loading = { status: true, message: "Loading institutes" };

                        // Load related institutes
                        $instituteService.listByUniversity($scope.university_id, $scope.filter)
                        .then(function onSuccess(response) {
                            $scope.institutes = response.data;
                            $scope.$parent.loading = { status: false, message: "" };
                        })
                        .catch(function onError(response) {
                            $window.alert(response.data);
                        });
                    } else {
                        // Reset institutes
                        $scope.institutes = [];
                        $scope.new_user.institute_id = null;
                    }
                } else {
                    // Reset institutes
                    $scope.institutes = [];
                    $scope.new_user.institute_id = null;
                }
                break;
            }
        }

    };


    /*************************************************
        INIT
     *************************************************/
    $scope.new_user = $userService.init();
    $scope.authenticated_member = $authenticationService.get();

    // Filter
    $scope.filter = { former: false };

    // Load universities
    $scope.load('universities');

    // Set default value by member
    $scope.university_id = $scope.authenticated_member.university_id;

    // Load related institutes
    $scope.load('institutes');

    // Set default value by member
    $scope.new_user.institute_id = $scope.authenticated_member.institute_id;

});