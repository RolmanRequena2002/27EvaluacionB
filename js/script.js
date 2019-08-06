var Warcraft = angular.module("Warcraft",[])
 Warcraft.controller("ListWarcraft",function($scope,$rootScope,$http){
	$scope.List = [];
		$http({
			method:"GET",
			url:"http://eu.api.blizzard.com/wow/data/character/races?locale=fr_FR"
		}).then(function datos(y){
			$scope.List.push(y);
		});
});