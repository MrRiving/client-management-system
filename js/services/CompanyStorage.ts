/// <reference path='../_all.ts' />

module client {
    'use strict';

    export class CompanyStorage implements ICompanyStorage {
        get(): Company[] {
            let data = [
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

            return data.map((company) => {
                return new Company(company.name, company.picture, company.url, company.email);
            });
        }
    }
}