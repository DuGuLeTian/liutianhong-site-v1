/**
 * Created by lth on 2017/3/29.
 */
(function() {
    'use strict';

    angular
        .module('liutianhongApp')
        .config(html5ModeConfig);

    html5ModeConfig.$inject = ['$locationProvider'];

    function html5ModeConfig($locationProvider) {
        $locationProvider.html5Mode({ enabled: true, requireBase: true });
    }
})();
