import { ComponentProps } from "react"
import { useShopingCartContex } from "../../contex/shoppingCartContex"

export type TVariant = "notSelected" | "selected" | "remove" | "confirm" |void

type TDiv = ComponentProps<"div"> & ComponentProps<"button"> & {
    variant : TVariant
}



const DivButton = ({variant , id, ...rest} : TDiv) => {

    const {handleIncreaseQty, handleDecreaseQty, showQty, remove, BtnOpenModal} = useShopingCartContex()


    if (variant === "selected") {
        return <div className="flex flex-row justify-between w-1/2 h-10 border-orange-500/100 bg-orange-500/100 rounded-3xl mx-auto items-center px-2 -mt-4 mb-3 transition-all duration-300 ease-in-out cursor-pointer">
                
            <button onClick={() => handleIncreaseQty(parseInt(id as string))}  className="border p-2 rounded-full transition-all duration-300 ease-in-out hover:border-red-200 hover:bg-red-800 focus:shadow-xs focus:no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
            </button>
            <p>{showQty(parseInt(id as string))}</p>
            <button onClick={() => handleDecreaseQty(parseInt(id as string))} className="border p-2 rounded-full transition-all duration-300 ease-in-out hover:border-red-200 hover:bg-red-800 focus:shadow-xs focus:no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
            </button>
            </div>}

    else if (variant === "notSelected") {
        return <div className="flex flex-row">
        <button {...rest} onClick={() => handleIncreaseQty(parseInt(id as string))} className="bg-slate-300 border border-orange-500/100 px-8 items-center w-fit h-10 mx-auto rounded-3xl -mt-4 mb-3  flex flex-row gap-2      middle transition-all duration-300 ease-in-out cursor-pointer select-none hover:border-emerald-800 hover:bg-teal-200 focus:shadow-xs focus:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clipPath="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
            Add to Cart
        </button>
    </div>
    }

    else if (variant === "remove") {
        return <button onClick={() => remove(parseInt(id as string))} className="border text-red-500 border-red-800/100 p-2 rounded-full ml-6 middle transition-all duration-300 ease-in-out cursor-pointer select-none hover:border-red-200 hover:bg-red-800 focus:shadow-xs focus:no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
        </button>
    }

    else if (variant === "confirm") {
        return <button onClick={BtnOpenModal} className="bg-orange-800 mob:bg-emerald-800 tab:bg-emerald-800 text-white rounded-3xl w-5/6 tab:w-2/5 h-10 mx-2 my-3 p-1 transition-all duration-300 ease-in-out cursor-pointer select-none hover:border-emerald-200 hover:bg-emerald-700 focus:shadow-xs focus:no-underline">
            Confirm Order   
        </button>
    }

}   

export default DivButton