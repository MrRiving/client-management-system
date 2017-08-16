/// <reference path='_all.ts' />

/**
 *
 * @type {angular.Module}
 */
module client {
    'use strict';

    var app = angular.module('app', [])
        .controller('companyController', CompanyController)
        .service('companyStorage', CompanyStorage);
}
