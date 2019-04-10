'use strict';

describe('save box', function(){
    it('Should return true if the password is correct and it send ', function(){

        var pass='123';
        var secret='my secret';
        var result;
        result=safeBox(pass, secret); 

        expect(result, true);

    });

    it('Should return true if the password is correct', function(){

        var pass='123';
        var secret='my secret';
        var result;
        result=safeBox(pass, secret); 

        expect(result, true);

    });
});