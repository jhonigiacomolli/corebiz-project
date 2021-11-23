import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type CartContextProviderProps = {
    children: ReactNode
}
type CartContextProps = {
    quantity: number
    updateCart: (quantit: number) => void
}
export const CartContext = createContext({} as CartContextProps)

export const CartContextProvider = ({ children }:CartContextProviderProps) => {
    const [quantity, setQuantity] = useState(0)

    function updateCart(quantity: number) {
        setQuantity(oldQuantity => oldQuantity + quantity)
    }

    useEffect(() => {
        quantity !== 0 && localStorage.setItem('corebiz-cart-quantity', quantity.toString())
    }, [quantity])

    useEffect(() => {
        const localQuantity = localStorage.getItem('corebiz-cart-quantity')
        setQuantity(Number(localQuantity) ?? 0)
    }, [])

    return (
        <CartContext.Provider value={{ quantity,  updateCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    return context
}