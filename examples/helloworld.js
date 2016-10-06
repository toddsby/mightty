var mightty = require('mightty'),
    isNil = mightty.isNil,
    mighttyConsole = mightty.mighttyConsole;

var data = {
    a:'something',
    b:'',
    c:undefined,
    d:null,
    e:{more:'something'}
};

mighttyConsole.log( 'a',isNil(data.a),
                    'b',isNil(data.b),
                    'c',isNil(data.c),
                    'd',isNil(data.d),
                    'e',isNil(data.e) 
                  );