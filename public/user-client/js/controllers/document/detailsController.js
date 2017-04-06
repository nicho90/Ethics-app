var app = angular.module("ethics-app");


// Document details controller
app.controller("documentDetailsController", function($scope, $rootScope, $routeParams, $translate, $location, config, $window, $q, $timeout, $authenticationService, $documentService, $revisionService, $descriptionService, $concernService, $commentService, $fileService) {

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


    /*************************************************
        INIT
     *************************************************/

    $timeout(function(){
        $scope.$parent.loading = { status: true, message: "Check authentication" };

        $timeout(function(){
            // Authentication
            $authenticationService.loginByDocumentId($routeParams.document_id)
            .then(function onSuccess(response) {
                $authenticationService.set(response.data);
                $scope.$parent.loading = { status: true, message: "Loading document" };

                $timeout(function(){
                    // Load document
                    $documentService.retrieve($routeParams.document_id)
                    .then(function onSuccess(response) {
                        $documentService.set(response.data);
                        $scope.$parent.loading = { status: true, message: "Loading revisions" };

                        $timeout(function(){
                            // Load revisions
                            $revisionService.listByDocument($documentService.getId())
                            .then(function onSuccess(response) {
                                $documentService.setRevisions(response.data);

                                // Load descriptions, concerns and comments for each revision
                                angular.forEach($documentService.getRevisions(), function(revision, key) {

                                    // Prepare promises
                                    var checkout_description = $q.defer();
                                    var checkout_concern = $q.defer();
                                    var checkout_comment = $q.defer();

                                    // Checkout descriptions
                                    $descriptionService.getByRevision(revision.revision_id)
                                    .then(function onSuccess(response) {
                                        $documentService.setDescriptions(revision.revision_id, response.data);
                                        // Resolve promise
                                        checkout_description.resolve();
                                    })
                                    .catch(function onError(response) {
                                        $window.alert(response.data);
                                    });

                                    // Checkout concerns
                                    $concernService.getByRevision(revision.revision_id)
                                    .then(function onSuccess(response) {
                                        $documentService.setConcerns(revision.revision_id, response.data);
                                        // Resolve promise
                                        checkout_concern.resolve();
                                    })
                                    .catch(function onError(response) {
                                        $window.alert(response.data);
                                    });

                                    // Checkout comments
                                    $commentService.getByRevision(revision.revision_id)
                                    .then(function onSuccess(response) {
                                        $documentService.setComments(revision.revision_id, response.data);
                                        // Resolve promise
                                        checkout_comment.resolve();
                                    })
                                    .catch(function onError(response) {
                                        $window.alert(response.data);
                                    });

                                    // Promises
                                    checkout_description.promise.then(function(){
                                        return;
                                    });
                                    checkout_concern.promise.then(function() {
                                        return;
                                    });
                                    checkout_comment.promise.then(function() {
                                        return;
                                    });


                                    // Start parallel requests
                                    var all = $q.all([
                                        checkout_description.promise,
                                        checkout_concern.promise,
                                        checkout_comment.promise
                                    ]);

                                    // Final task after requests
                                    all.then(function(){
                                        // Update navbar
                                        $rootScope.$broadcast('updateNavbar');

                                        // Check status for files
                                        if($documentService.getStatus()===2 || $documentService.getStatus()===6){

                                            // Check if files were cached
                                            if($fileService.get()){
                                                $documentService.setFiles($fileService.get());
                                                $scope.redirect("/documents/" + $documentService.getId() + "/status/" + $documentService.getStatus());
                                            } else {
                                                $scope.$parent.loading = { status: true, message: "Generating files" };

                                                // Generate files on server
                                                $documentService.generateFiles($documentService.getId())
                                                .then(function onSuccess(response) {
                                                    $fileService.set(response.data);
                                                    $documentService.setFiles($fileService.get());

                                                    // Redirect
                                                    $scope.redirect("/documents/" + $documentService.getId() + "/status/" + $documentService.getStatus());

                                                })
                                                .catch(function onError(response) {
                                                    $window.alert(response.data);
                                                });
                                            }
                                        } else {

                                            // Redirect
                                            $scope.redirect("/documents/" + $documentService.getId() + "/status/" + $documentService.getStatus());
                                        }
                                    });
                                });
                            })
                            .catch(function onError(response) {
                                $window.alert(response.data);
                                $scope.redirect("/");
                            });
                        }, 400);
                    })
                    .catch(function onError(response) {
                        $window.alert(response.data);
                        $scope.redirect("/");
                    });
                }, 400);
            })
            .catch(function onError(response) {
                $window.alert(response.data);
                $scope.redirect("/");
            });
        }, 400);
    }, 1000);

});