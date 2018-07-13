var app=angular.module('app',[]);

app.directive('enter',function(){
	return function(scope,element,attrs){
		element.bind('mouseenter',function(){
			element.addClass('alert-box');
		})
	}
})

app.directive('leave',function(){
	return function(scope,element,attrs){
		element.bind('mouseleave',function(){
			element.removeClass('alert-box');
		})
	}
})

app.directive('hello',function(){
	var el = angular.element('<div><input ng-model="txt"></div><div>{{txt}}</div>');
	return {
		restrict:'E',
		template:el,
		link:function(scope,element){
			scope.$watch('txt',function(newVal){
				if(newVal === 'error'){
					element.addClass('alert-box alert')
				}
			})
		}
	}
})