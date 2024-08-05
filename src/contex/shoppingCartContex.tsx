import { createContext, useContext, useState } from "react";
import data from "../components/products/data.json";
interface IShopingCartProvider {
    children : React.ReactNode
}

interface IcartItem {
    id : number
    qty : number
}

interface IShoppingCartContex {
    cartItems : IcartItem[],
    handleIncreaseQty : (id : number) => void
    handleDecreaseQty : (id : number) => void
    showQty : (id : number) => number
    remove : (id : number) => void
    calculateTotalPrice : () => number
    BtnOpenModal : () => void
    openModal : boolean
}

export const ShoppingCartContex = createContext({} as IShoppingCartContex)

export const useShopingCartContex = () => {
    return useContext(ShoppingCartContex)
}

export const ShopingCartProvider = ({children} : IShopingCartProvider) => {

    const [cartItems, SetCartItems] = useState<IcartItem[]>([])
    const [openModal, setOpenModal] = useState(false)

    const handleIncreaseQty = (id : number) => {

        SetCartItems((currentItems) => {
            let selectedItem = currentItems.find((item) => item.id == id)
            
            if (selectedItem == null) {
                return [...currentItems, {id, qty : 1}]
            }
            else {
                return currentItems.map((item) =>{
                    if (item.id == id) {
                        return{...item, qty: item.qty + 1} 
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    
    const handleDecreaseQty = (id : number) => {
        
        SetCartItems((currentItems) => {
            
            let selectedItem = currentItems.find((item) => item.id == id)
            
            if (selectedItem?.qty == 1) {return currentItems.filter((item) => item.id != id)} else {return currentItems.map((item) =>{
                    if (item.id == id) {
                        return{...item, qty: item.qty - 1} 
                    }
                    else {
                        return item
                    }
                })
            }
        })
    } 

    const showQty = (id : number) => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id) {
                return cartItems[i].qty
            }
        }
        return 0
    }

    const remove = (id : number) => {
        SetCartItems((currentItems) => {
            return currentItems.filter((item) => item.id != id)
        })
    }

    const calculateTotalPrice = () => {
        let total = 0
        cartItems.map((item) => {
            data.map((data) =>{
                if (item.id == data.id) {
                    total += data.price * item.qty
                }
            })
        })
        return total
    }

    const BtnOpenModal = () => {
        if (openModal) {
            setOpenModal(false)
        }
        else {
            setOpenModal(true)
        } 
    }

    return <ShoppingCartContex.Provider value={{cartItems, handleIncreaseQty, handleDecreaseQty, showQty, remove, calculateTotalPrice, BtnOpenModal, openModal}}>
        {children}
    </ShoppingCartContex.Provider>
}