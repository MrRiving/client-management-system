/// <reference path='../_all.ts' />

module client {
    'use strict';

    export class CompanyController {
        private companies: Company[];

        public static $inject = [
            '$scope',
            '$window',
            'companyStorage'
        ];

        constructor(private $scope: ICompanyScope,
                    private $window: ng.IWindowService,
                    private companyStorage: ICompanyStorage) {
            this.companies = $scope.companies = companyStorage.get();

            $scope.vm = this;
        }

        sendEmail(company: Company) {
            let subject = `Hello ${company.name}`;
            let message = `Hey ${company.name} \nWe just wanted to chat and say hello\nSincerely your vendor`;
            this.$window.open("mailto:" + company.email + "?subject=" + subject + "&body=" + encodeURIComponent(message), "_self");
        }

        remove(company: Company) {
            this.companies.splice(this.companies.indexOf(company), 1);
        }
    }

}
