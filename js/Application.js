/// <reference path='../_all.ts' />
var client;
(function (client) {
    'use strict';
    var Company = (function () {
        function Company(name, picture, url, email) {
            this.name = name;
            this.picture = picture;
            this.url = url;
            this.email = email;
        }
        return Company;
    }());
    client.Company = Company;
})(client || (client = {}));
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
var client;
(function (client) {
    'use strict';
    var CompanyStorage = (function () {
        function CompanyStorage() {
        }
        CompanyStorage.prototype.get = function () {
            var data = [
                {
                    name: 'Dell',
                    picture: 'http://laslatinitas.com/wp-content/uploads/2011/05/dell-logo.png',
                    url: 'http://www.dell.com/en-us/',
                    email: 'help@dell.com'
                },
                {
                    name: 'Green Pioneer Solutions',
                    picture: 'http://greenpioneersolutions.com/img/icons/apple-icon-180x180.png',
                    url: 'http://greenpioneersolutions.com/',
                    email: 'support@greenpioneersolutions.com'
                },
                {
                    name: 'Taller Concepts',
                    picture: 'http://tallerconcepts.com/img/logo.png',
                    url: 'http://www.tallerconcepts.com/',
                    email: 'support@tallerconcepts.com'
                },
                {
                    name: 'GitHub',
                    picture: 'http://pritishc.com/images/social/github.png',
                    url: 'https://github.com/',
                    email: 'help@github.com'
                },
                {
                    name: 'JSFiddle',
                    picture: 'http://doc.jsfiddle.net/_downloads/jsfiddle-logo.png',
                    url: 'https://jsfiddle.net/',
                    email: 'help@jsfiddle.com'
                },
                {
                    name: 'Bootstrap',
                    picture: 'http://getbootstrap.com/assets/img/bootstrap-stack.png',
                    url: 'http://getbootstrap.com/',
                    email: 'help@getbootstrap.com'
                }
            ];
            return data.map(function (company) {
                return new client.Company(company.name, company.picture, company.url, company.email);
            });
        };
        return CompanyStorage;
    }());
    client.CompanyStorage = CompanyStorage;
})(client || (client = {}));
/// <reference path='../_all.ts' />
var client;
(function (client) {
    'use strict';
    var CompanyController = (function () {
        function CompanyController($scope, $window, companyStorage) {
            this.$scope = $scope;
            this.$window = $window;
            this.companyStorage = companyStorage;
            this.companies = $scope.companies = companyStorage.get();
            $scope.vm = this;
        }
        CompanyController.prototype.sendEmail = function (company) {
            var subject = "Hello " + company.name;
            var message = "Hey " + company.name + " \nWe just wanted to chat and say hello\nSincerely your vendor";
            this.$window.open("mailto:" + company.email + "?subject=" + subject + "&body=" + encodeURIComponent(message), "_self");
        };
        CompanyController.prototype.remove = function (company) {
            this.companies.splice(this.companies.indexOf(company), 1);
        };
        CompanyController.$inject = [
            '$scope',
            '$window',
            'companyStorage'
        ];
        return CompanyController;
    }());
    client.CompanyController = CompanyController;
})(client || (client = {}));
/// <reference path='_all.ts' />
/**
 *
 * @type {angular.Module}
 */
var client;
(function (client) {
    'use strict';
    var app = angular.module('app', [])
        .controller('companyController', client.CompanyController)
        .service('companyStorage', client.CompanyStorage);
})(client || (client = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='models/Company.ts' />
/// <reference path='interfaces/ICompanyScope.ts' />
/// <reference path='interfaces/ICompanyStorage.ts' />
/// <reference path='services/CompanyStorage.ts' />
/// <reference path='controllers/CompanyController.ts' />
/// <reference path='Application.ts' />
//# sourceMappingURL=Application.js.map