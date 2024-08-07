import data from "../components/products/data.json";
import DivButton from "./buttons/divButton";
import { useShopingCartContex } from "../contex/shoppingCartContex"


const SideBar = () => {

    const {sidebar, cartItems, handelOpenSidebar, calculateTotalPrice} = useShopingCartContex()

   return (
    <div>
        <div className="flex absolute">  

            <div onClick={handelOpenSidebar} className="z-40 fixed left-2 top-6 border w-14 h-14 rounded-full flex items-center justify-center bg-slate-100 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                <div className="absolute w-7 h-7 bg-red-500 rounded-full -right-2 -top-2 flex items-center justify-center">
                    <p>{cartItems.length}</p>
                </div>
            </div>
        
        <div className={`${sidebar ? "w-11/12" : "w-14"} fixed  mr-1 z-30 inset-x-2 inset-y-10 duration-300`}>
            {sidebar && <div className="h-full text-yellow-50 pt-10 px-2 bg-slate-900 flex flex-col items-center rounded-3xl overflow-auto">
                {cartItems.map((item, index) =>
                data.map((data) =>{
                    if (item.id === data.id) {
                        return <div className="bg-slate-200 m-2 p-3 des:w-11/12 mob:w-4/5 tab:w-2/3 border border-orange-500/100 rounded-3xl transition-all duration-300 ease-in-out cursor-pointer select-none hover:border-emerald-800 hover:bg-teal-200 focus:shadow-xs focus:no-underline" key={index}>
                            
                            <h3 className='font-bold text-slate-950 text-sm'>{data.name}</h3>
                            <div className="flex flex-row mt-1 text-sm justify-between">
                                <p className="text-orange-700 font-bold">{item.qty}x</p>
                                <p className="text-gray-700">Per Item : ${data.price}</p>
                                <p className="text-orange-700 font-bold">Total : ${data.price * item.qty}</p>
                                <DivButton variant="remove" id={String(data.id)}></DivButton>
                            </div>
                        </div>
                    }
                })
            )}
            <div className="flex flex-row justify-between w-full mob:w-4/5 tab:w-3/4 p-4 items-center border rounded-3xl">
                <p>Total Price</p>
                <h3 className="font-bold text-4xl">${calculateTotalPrice()}</h3>
            </div>

            <div className="flex flex-row w-4/5 tab:justify-center mob:justify-center mx-auto my-4 items-center bg-slate-200 rounded-md p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
                <h3 className="m-1 text-sm text-black">this is a <span className="font-bold">carbon-neutral</span> delivery</h3>
            </div>

            <DivButton variant="confirm"></DivButton>
            <button className="bg-orange-800 text-white rounded-3xl w-5/6 h-10 tab:w-2/5 mx-2 my-3 p-1" onClick={handelOpenSidebar}>Go back to Store</button>
        </div>
                
                
                }
        </div>
            
        
        
    </div>
    </div>
   )
}
export default SideBar



