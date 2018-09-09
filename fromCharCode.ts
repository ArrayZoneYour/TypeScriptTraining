const findMissingLetter = (array:string[]):string => array.filter((value, index, array) => index < array.length - 1 ? value.charCodeAt(0) !== array[index + 1].charCodeAt(0) - 1 : false)
    .map(code => String.fromCharCode(code.charCodeAt(0) + 1))[0];