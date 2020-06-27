"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var DEFAULT_KEY_SIZE = 16;
var ASCII_SYMBOL_INDICES = [[33, 47], [58, 64], [91, 96]];
/**
 * A set for ASCII symbols created by using indices of symbol characters
 * and string ASCII conversion methods.
 */
var ASCII_SYMBOL_SET = (function () {
    var symbolArray = new Array();
    ASCII_SYMBOL_INDICES.forEach(function (setIndex) {
        for (var i = setIndex[0]; i <= setIndex[1]; ++i)
            symbolArray.push(String.fromCharCode(i));
    });
    return symbolArray;
})();
/**
 * Generates a new key using numbers, letters and symbols.
 * @param keySize A default paramater which indicates the size of the key, default size is 16.
 */
exports.generate = function (keySize) {
    if (keySize === void 0) { keySize = DEFAULT_KEY_SIZE; }
    var key = '';
    for (var i = 0; i < keySize; ++i) {
        var randomValue = Math.floor(Math.random() * 4);
        switch (randomValue) {
            case 0:
                key = key + Math.floor(Math.random() * 10);
                break;
            case 1:
                key = key + String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 28));
                break;
            case 2:
                key = key + String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 28));
                break;
            case 3: key = key + ASCII_SYMBOL_SET[Math.floor(Math.random() * ASCII_SYMBOL_SET.length)];
        }
    }
    return key;
};
//# sourceMappingURL=app.js.map