/**
 * Created by igor on 3/7/15.
 */
var log4allService = angular.module('Log4AllServiceModule', []);

function getApiUrl(apiUrl) {
    return log4AllURL + "/api/" + apiUrl;
}

log4allService.service('Log4AllService', ['$http', '$q', function ($http, $q) {
    return {
        addLog: function (log) {
            var addLogDeferred = $q.defer();
            $http.put(getApiUrl('log'), log).success(function (data) {
                if (!data.success) {
                    addLogDeferred.resolve({
                        success: true,
                        errorMessage: data.message
                    });
                } else {
                    addLogDeferred.resolve({
                        success: false,
                        errorMessage: null
                    });
                }
            });
            return addLogDeferred.promise;
        },
        searchLog: function (applications,levels, dtSince, dtTo, query, page, maxResult, sortColumn, ascending) {

            var searchParams = {
                applications: applications,
                levels:levels,
                dt_since: dtSince,
                dt_to: dtTo,
                query: query,
                page:page,
                max_result : maxResult,
                sort_field: sortColumn,
                sort_ascending: ascending
            };
            
            var searchDeferred = $q.defer();
            $http.post(getApiUrl('logs/search'), searchParams).success(function (data) {
                if (!data.success) {
                    searchDeferred.resolve({
                        success: false,
                        errorMessage: data.message
                    });
                } else {
                    var tags = new Set();
                    angular.forEach(data.result, function (log) {
                        angular.forEach(log.tags, function (key, value) {
                            tags.add(value);
                        });
                    });
                    var resultTags = [];
                    tags.forEach(function (tag) {
                        resultTags.push(tag);
                    });
                    searchDeferred.resolve({
                        success: true,
                        logs: data.result,
                        tags: resultTags
                    });
                }
            });
            return searchDeferred.promise;
        },
        tailLog: function (applications,levels, dtSince, dtTo, query,  maxResult, sortColumn, ascending) {

            var searchParams = {
                applications: applications,
                levels:levels,
                dt_since: dtSince,
                dt_to: dtTo,
                query: query,
                max_result : maxResult,
                sort_field: sortColumn,
                sort_ascending: ascending
            };
            
            var tailDeferred = $q.defer();
            $http.post(getApiUrl('logs/tail'), searchParams).success(function (data) {
                if (!data.success) {
                    tailDeferred.resolve({
                        success: false,
                        errorMessage: data.message
                    });
                } else {
                    tailDeferred.resolve({
                        success: true,
                        logs: data.result,
                    });
                }
            });
            return tailDeferred.promise;
        }
    }
}]);