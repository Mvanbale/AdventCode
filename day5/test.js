var assert = require('assert'),
    should = require('should');
    var expect = require('chai').expect;
 var fs = require('fs');
 var hasThreeVowels = require("./hasThreeVowels.js");
 var hasConsecutive = require('./hasConsecutive.js');
 var forbiddenStrings = require('./forbiddenStrings.js');
 
 
describe('Suite of unit tests', function () {
    var input;

    beforeEach(function (done) {
fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) throw err;
       input = data.split("\r").map(function (element) {
		return element.slice(1, -1);
	})
    done();
});

    });

    describe('basic file print', function () {
        it('should print out the contents of the input file', function (done) {
            should.exist(input);
            done();
        });



})
})

        describe('check for atleast three vowels', function () {

            it('should return true when fed the following string:Eerie ' , function (done) {

                hasThreeVowels('Eerie', function(err, result){
                    result.should.be.true();
                    done();
                });
                

            });
        })




        describe('check for atleast three vowels', function () {

            it('should return false when fed the following string:1234 ' , function (done) {

                hasThreeVowels('1234', function(err, result){
                    result.should.be.false();
                    done();
                });
                

            });
        })
        
        
        
        describe('check for consecutive characters', function () {

            it('should return false when fed the following string:1234 ' , function (done) {

                hasConsecutive('1234', function(err, result){
                    result.should.be.false();
                    done();
                });
                

            });
        })
        
        
                describe('check for consecutive characters, success', function () {

            it('should return true when fed the following string:11234 ' , function (done) {

                hasConsecutive('11234', function(err, result){
                    result.should.be.true();
                    done();
                });
                

            });
        })