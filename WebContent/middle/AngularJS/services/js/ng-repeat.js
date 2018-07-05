angular.module('app',[])
.controller('AddressCtrl',function ($scope) {
    $scope.list = [
        {id:1,address:'莲湖小区14栋2层'},
        {id:2,address:'建设小区14栋2层'},
        {id:3,address:'兴化路89号'},
        {id:4,address:'北京鸟巢好远的地方'}
    ];
})