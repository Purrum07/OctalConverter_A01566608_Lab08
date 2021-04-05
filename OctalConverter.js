function convert (decimal){
    const base = 8;
    var octalString = decimal.toString(base)
    var octal = parseInt(octalString);
    return octal;
}

exports.convert = convert; 