/**
 * Created by igor on 3/12/15.
 */
var log4AllAdminServiceModule = angular.module('Log4AllAdminServiceModule', ['angular-jwt', 'LocalStorageModule']);

log4AllAdminServiceModule.config(function ($httpProvider, jwtInterceptorProvider) {
	function localStorageService(localStorageService) {
        return localStorageService.get('jwt_token');
    }

    jwtInterceptorProvider.tokenGetter = ['localStorageService', localStorageService];
    $httpProvider.interceptors.push('jwtInterceptor');
});
/**
 * Created by igor on 3/11/15.
 */
function log4AllApplicationService($http, $q) {

    var getAll = function () {
        var deferedResult = $q.defer();
        $http.get('/api/applications').success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data, status) {
            deferedResult.reject("Error status:" + status + " :" + data);
        });
        return deferedResult.promise;
    };
    var get = function (applicationId) {
        var deferedResult = $q.defer();
        $http.get('/api/application/' + applicationId).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data, status) {
            deferedResult.reject("Error status:" + status + " :" + data);
        });
        return deferedResult.promise;
    };
    var deleteApplication = function (applicationId) {
        var deferedResult = $q.defer();
        $http.delete('/api/application/' + applicationId).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };
    var add = function (application) {
        var deferedResult = $q.defer();
        $http.put('/api/application', application).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };
    var update = function (applicationId, application) {
        var deferedResult = $q.defer();
        $http.post('/api/application/' + applicationId, application).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };

    return {
        'getAll': getAll,
        'get': get,
        'delete': deleteApplication,
        'add': add,
        'update': update
    }

}

log4AllAdminServiceModule.service('log4AllApplicationService', ['$http', '$q', log4AllApplicationService]);
/**
 * Created by igor on 3/12/15.
 */
 function log4AllAuthService($http, $q) {
    var login = function (userAuth) {
        var deferedResponse = $q.defer();
        $http.post('/api/auth/login', userAuth).success(function (data) {
            deferedResponse.resolve(data);
        }).error(function (data, status) {
            deferedResponse.reject("Status:" + status + " :" + data);
        });
        return deferedResponse.promise;
    };

    var getPermissions=function(){
        var deferedResponse = $q.defer();
        $http.get('/api/auth/permissions').success(function (data) {
            deferedResponse.resolve(data);
        }).error(function (data, status) {
            deferedResponse.reject("Status:" + status + " :" + data);
        });
        return deferedResponse.promise;
    };
    return {
        'login':login,
        'getPermissions':getPermissions
    }
}
log4AllAdminServiceModule.service('log4AllAuthService', ['$http', '$q', log4AllAuthService]);
/**
 * Created by igor on 3/11/15.
 */

function log4AllGroupService($http, $q) {

    var getAll = function () {
        var deferedResult = $q.defer();
        $http.get('/api/groups').success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data, status) {
            deferedResult.reject("Error status:" + status + " :" + data);
        });
        return deferedResult.promise;
    };
    var get = function (groupId) {
        var deferedResult = $q.defer();
        $http.get('/api/group/' + groupId).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data, status) {
            deferedResult.reject("Error status:" + status + " :" + data);
        });
        return deferedResult.promise;
    };
    var deleteGroup = function (groupId) {
        var deferedResult = $q.defer();
        $http.delete('/api/group/' + groupId).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };
    var add = function (group) {
        var deferedResult = $q.defer();
        $http.put('/api/group', group).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };
    var update = function (groupId, group) {
        var deferedResult = $q.defer();
        $http.post('/api/group/' + groupId, group).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };

    return {
        'getAll': getAll,
        'get': get,
        'delete': deleteGroup,
        'add': add,
        'update': update
    }

}

log4AllAdminServiceModule.service('log4AllGroupService', ['$http', '$q', log4AllGroupService]);
/**
 * Created by igor on 3/11/15.
 */

function log4AllUserService($http, $q) {

    var getAll = function () {
        var deferedResult = $q.defer();
        $http.get('/api/users').success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data, status) {
            deferedResult.reject("Error status:" + status + " :" + data);
        });
        return deferedResult.promise;
    };
    var get = function (userId) {
        var deferedResult = $q.defer();
        $http.get('/api/user/' + userId).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data, status) {
            deferedResult.reject("Error status:" + status + " :" + data);
        });
        return deferedResult.promise;
    };
    var deleteUser = function (userId) {
        var deferedResult = $q.defer();
        $http.delete('/api/user/' + userId).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };
    var add = function (user) {
        var deferedResult = $q.defer();
        $http.put('/api/user', user).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };
    var update = function (userId, user) {
        var deferedResult = $q.defer();
        $http.post('/api/user/' + userId, user).success(function (data) {
            deferedResult.resolve(data);
        }).error(function (data) {
            deferedResult.reject(data);
        });
        return deferedResult.promise;
    };

    return {
        'getAll': getAll,
        'get': get,
        'delete': deleteUser,
        'add': add,
        'update': update
    }

}
 
log4AllAdminServiceModule.service('log4AllUserService', ['$http', '$q', log4AllUserService]);

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