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
    const input = this.sanitizeString(_input);

    const indexOfUnitStart = input.search(/[a-zA-Z]/i);
    const numberInput = input.slice(0, indexOfUnitStart)
    const numberExpression = !!numberInput ? numberInput : 1;
    const num = math.evaluate(numberExpression);
    return num;
  };
  
  this.getUnit = function(_input) {
    const input = this.sanitizeString(_input);
    
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
    const input = this.sanitizeString(_initUnit);

    switch(input) {
      case 'gal': case 'GAL':
        return 'l'
      case 'l': case 'L':
        return 'gal'
      case 'mi': case 'MI':
        return 'km'
      case 'km': case 'KM':
        return 'mi'
      case 'lbs': case 'LBS':
        return 'kg'
      case 'kg': case 'kg':
        return 'lbs'
      default:
        throw Error('Invalid initUnit');
    }    
  };

  this.spellOutUnit = function(_unit) {
    const input = this.sanitizeString(_unit);

    switch(input) {
      case 'gal': case 'GAL':
        return 'gallon';
      case 'l': case 'L':
        return 'liter';
      case 'mi': case 'MI':
        return 'mile';
      case 'km': case 'KM':
        return 'kilometer';
      case 'lbs': case 'LBS':
        return 'pounds';
      case 'kg': case 'kg':
        return 'kilogram'
      default:
        throw Error('Invalid unit') 
    }

  };
  
  this.convert = function(_initNum, _initUnit) {
    const initUnit = this.sanitizeString(_initUnit);
    const initNum = this.sanitizeNumber(_initNum);

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit) {
      case 'gal': case 'GAL':
        return initNum * galToL;
      case 'l': case 'L':
        return initNum / galToL;
      case 'mi': case 'MI':
        return initNum * miToKm;
      case 'km': case 'KM':
        return initNum / miToKm;
      case 'lbs': case 'LBS':
        return initNum * lbsToKg;
      case 'kg': case 'kg':
        return initNum / lbsToKg;
      default:
        throw Error('Invalid initUnit')
    }    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };

  this.sanitizeString = function(input) {
    if (typeof input !== 'string') {
      throw Error('Only strings are allowed as inputs')
    }

    return input;
  }

  this.sanitizeNumber = function(input) {
    if (typeof input !== 'number') {
      throw Error('Only numbers are allowed as inputs')
    }

    return input;
  }
}

module.exports = ConvertHandler;
