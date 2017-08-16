/// <reference path='../_all.ts' />

module client {
    'use strict';

    export class Company {
        constructor(public name: string,
                    public picture: string,
                    public url: string,
                    public email: string) {
        }
    }
}
