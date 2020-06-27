const DEFAULT_KEY_SIZE = 16;
const ASCII_SYMBOL_INDICES: Array<Array<number>> = [[33, 47], [58, 64], [91, 96]];
/**
 * A set for ASCII symbols created by using indices of symbol characters
 * and string ASCII conversion methods.
 */
const ASCII_SYMBOL_SET: Array<string> = ((): Array<string> => {
    const symbolArray: Array<string> = [];
    ASCII_SYMBOL_INDICES.forEach((setIndex: Array<number>) => {
        for (let i: number = setIndex[0]; i <= setIndex[1]; ++i)
            symbolArray.push(String.fromCharCode(i));
    });
    return symbolArray;
})();

/**
 * Generates a new key using numbers, letters and symbols.
 * @param keySize A default paramater which indicates the size of the key, default size is 16.
 */
export const generate: (s: number) => string = (keySize: number = DEFAULT_KEY_SIZE): string => {
	let key = '';
	for (let i = 0; i < keySize; ++i) {
		const randomValue = Math.floor(Math.random() * 4)
		switch(randomValue) {
            case 0: key = key + Math.floor(Math.random() * 10);break;
            case 1: key = key + String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 28));break;
            case 2: key = key + String.fromCharCode('A'.charCodeAt(0) + Math.floor(Math.random() * 28));break;
            case 3: key = key + ASCII_SYMBOL_SET[Math.floor(Math.random() * ASCII_SYMBOL_SET.length)];
		}	
    }
    return key;
}
