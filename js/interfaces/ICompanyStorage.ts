/// <reference path='../_all.ts' />

module client {
    export interface ICompanyStorage {
        get (): Company[];
    }
}