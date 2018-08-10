var expect = require('chai').expect;

var addTwoNumbers = require('./test');

describe('addTwoNumbers()',function(){
   it('should add two numbers',function(){
        var x =5;
        var y = 2;
        //Actual Answer
        var sum1 = x+y;
        //Expected Answer
       var sum2 = addTwoNumbers(x,y);

       expect(sum2).to.be.equal(sum1);
   });
});