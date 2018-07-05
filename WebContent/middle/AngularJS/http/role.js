angular.module('app', [])
    .controller('MyCtrl', function ($scope, $http) {
        $scope.id=" ";
        $scope.name=" ";
        $scope.roles = [];
        $scope.rights = [];
        $scope.curselect = [];

        $http.$watch('curselect',function () {
            loadRoleRight();
        })

        function loadRoleRight() {
            $http.post('http://127.0.0.1:80/user/getRoleRight',{roleid:$scope.curselect})
                .success(function (resp) {
                    var rights = resp;
                    for(var i = 0; i < $scope.rights.length; i++){
                        $scope.rights[i].ischecked = false;
                        for(var j = 0; j < rights.length; j++){
                            if($scope.rihgts[i].id == rights[j].rightid){
                                $scope.rights[i].ischecked = true;
                            }
                        }
                    }
                })
        }
        
        function init(){
            $http.get('http://127.0.0.1:80/user/getRoles')
                .success(function (resp) {
                    $scope.roles = resp;
                })

            $http.get('http://127.0.0.1:80/user/getRights')
                .success(function (resp) {
                    $scope.roles = resp;
                })
        }
        init();

    })