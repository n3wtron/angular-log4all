
function log4AllIndexesService($http, $q) {
	var getAll = function(){
		var defererResponse = $q.defer();
		$http.get("/api/indexes").success(function(data){
			defererResponse.resolve(data);
		}).error(function(data,status){
			defererResponse.reject("Status:"+status+" error:"+data);
		});
		return defererResponse.promise;
	};

	var addIndex = function(index){
		var defererResponse = $q.defer();
		$http.put("/api/index/"+index).success(function(data){
			defererResponse.resolve(data);
		}).error(function(data,status){
			defererResponse.reject("Status:"+status+" error:"+data);
		});
		return defererResponse.promise;
	};

	var deleteIndex = function(index){
		var defererResponse = $q.defer();
		$http.delete("/api/index/"+index).success(function(data){
			defererResponse.resolve(data);
		}).error(function(data,status){
			defererResponse.reject("Status:"+status+" error:"+data);
		});
		return defererResponse.promise;
	};
	return{
		"getAll":getAll,
		"deleteIndex":deleteIndex,
		"addIndex":addIndex
	};
}

log4AllAdminServiceModule.service('log4AllIndexesService', ['$http', '$q', log4AllIndexesService]);