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