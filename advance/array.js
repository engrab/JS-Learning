/* Continious(no empty element) - Holey(hole in between elements)

1. SMI (small integers)
Packed Elements
2. Double (float, string, object, function, symbol, bigInt)
Holey Elements
*/

/*
SMI > Double > Packed
H_SMI > H_Double > H_Packed
*/

const smiArray = [1, 2, 3]; // SMI
const doubleArray = [1, 2, 3.3]; // Double
const packedArray = [1, 2, 3, 'hello', {}, function () {}, Symbol('sym'), 10n]; // packed with different types
const h_smi_Array = [1, , 3]; // H_SMI
const h_double_Array = [1,2.3, , 4.5]; // H_Double
const h_packed_Array = [1, 'hello', , {}, function () {}, Symbol('sym'), 10n]; // H_Packed


