/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      const input = '32L';
      const result = convertHandler.getNum(input);
      assert.equal(result, 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = '4gal'
      const result = convertHandler.getNum(input);
      assert.equal(result, 4);
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = '1/2km';
      const result = convertHandler.getNum(input);
      assert.equal(result, 0.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = '5.4/3lbs';
      const result = convertHandler.getNum(input);
      assert.equal(result, 1.8);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      const input = '3/7.2/4kg';
      assert.Throw(() => convertHandler.getNum(input));
      done();
    });
    
    test('No Numerical Input', function(done) {
      const input = 'kg';
      const result = convertHandler.getNum(input);
      assert.equal(result, 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        const result = convertHandler.getUnit(ele);
        assert.equal(result, ele)
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = ['dskljdf', 'askdj', 'lk39d']

      input.forEach(function(ele) {
        assert.Throw(() => convertHandler.getUnit(ele))
      });

      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallon', 'liter', 'mile', 'kilometer', 'pound', 'kilogram'];
      
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i])
      })

      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      const initNum = 5;
      const initUnit = 'gal';
      
      const result = convertHandler.convert(initNum, initUnit);
      const expected = 18.9271;

      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      const initNum = 16;
      const initUnit = 'l';
      
      const result = convertHandler.convert(initNum, initUnit);
      const expected = 4.22675;
      
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      const initNum = 5;
      const initUnit = 'mi';
      
      const result = convertHandler.convert(initNum, initUnit);
      const expected = 8.04672;
      
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      const initNum = 12;
      const initUnit = 'km';
      
      const result = convertHandler.convert(initNum, initUnit);
      const expected = 7.45645;
      
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      const initNum = 120 ;
      const initUnit = 'lbs';
      
      const result = convertHandler.convert(initNum, initUnit);
      const expected = 54.4311;
      
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      const initNum = 79;
      const initUnit = 'kg';
      
      const result = convertHandler.convert(initNum, initUnit);
      const expected = 174.165;
      
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });
    
  });

});