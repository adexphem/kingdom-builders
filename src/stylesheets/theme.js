export const theme = {
    color: {
        primary: '#5F277E',        
        secondary: '#FDB71B',
        tertiary: '#002c5b',
        white: '#ffffff',
        black: '#000000',
        border: '#4c5c6d',
        grey: '#a4a59a',
        systemFail: '#ae4036',
        systemSuccess: '#219653',
        systemPending: '#2d9cdb',
        statusSuccess: '#6fcf97',
        statusRejected: '#eb5757'
    },
    fontWeight: {
        regular: 400,
        semiBold: 600,
        bold: 800
    },
    toRem: pixelValueWithUnit => {
        const baseValue = 16;
        const pixelValueDigit = pixelValueWithUnit.split('px')[0];
        const remValue = pixelValueDigit / baseValue;
        return remValue + 'rem';
    },
}