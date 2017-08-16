/// <reference path='../_all.ts' />

module client {
    export interface ICompanyScope extends ng.IScope {
        companies: Company[];
        vm: CompanyController;
    }
}
