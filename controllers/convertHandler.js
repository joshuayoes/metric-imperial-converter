const math = require('mathjs')

/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(_input) {
    const input = this.sanitize(_input);

    const indexOfUnitStart = input.search(/[a-zA-Z]/i);
    const numberInput = input.slice(0, indexOfUnitStart)
    const numberExpression = !!numberInput ? numberInput : 1;
    const num = math.evaluate(numberExpression);
    return num;
  };
  
  this.getUnit = function(_input) {
    const input = this.sanitize(_input);
    
    const indexOfUnitStart = input.search(/[a-zA-Z]/i);
    const unitInput = input.slice(indexOfUnitStart);

    const validInputs = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
    const isInvalidInput = !validInputs.includes(unitInput)
    
    if (isInvalidInput) {
      throw Error('Not a valid unit input')
    }
    
    return unitInput;
  };
  
  this.getReturnUnit = function(_initUnit) {
    const input = this.sanitize(_initUnit);

    switch(input) {
      case 'gal':
        return 'l'
      case 'l':
        return 'gal'
      case 'mi':
        return 'km'
      case 'km':
        return 'mi'
      case 'lbs':
        return 'kg'
      case 'kg':
        return 'lbs'
      default:
        throw Error('Invalid initUnit');
    }    
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };

  this.sanitize = function(input) {
    if (typeof input !== 'string') {
      throw Error('Only strings are allowed as inputs')
    }

    return input
  }
}

module.exports = ConvertHandler;
