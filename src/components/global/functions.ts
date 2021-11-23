export const CurrencyFormat = (value: number) => {
    const newValue = value/100
    return newValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}