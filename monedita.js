import countryToCurrency from 'country-to-currency'

export function obtenerMoneda(codigoPais) {
    return countryToCurrency[codigoPais];
}