import { useShopingCartContex } from "../contex/shoppingCartContex"
import data from "../components/products/data.json";

const Confirm = () => {
  const {openModal, BtnOpenModal, cartItems, calculateTotalPrice} = useShopingCartContex()

  if (openModal) {
    return <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/50">
        
        
        <div className="w-1/4 h-3/4 bg-slate-100 flex flex-col items-center p-4 rounded-lg ">

          <div className="flex items-center mb-2"><svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575"/>
            <path d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z" fill="#1EA575"/>
            
          </svg>
          <h1 className="text-3xl font-bold ml-2">Order Confirmed</h1></div>
          <p className="text-sm text-slate-500">we hope you enjoy your food</p>
        
        <div className="bg-stone-200 rounded-lg  my-4 w-11/12 p-2 overflow-auto">{cartItems.map((item, index) =>
                data.map((data) =>{
                    if (item.id === data.id) {
                        return <div className="grid grid-cols-8 gap-1 my-2 pb-1 items-center border border-b-stone-300">

                                  <img src={data.image.desktop} className="col-span-2 h-20 w-20 rounded-md mr-2 my-1" alt="" />
                                  
                                  <div className="col-span-5 flex flex-col">
                                      <h1 className="font-bold text-sm">{data.name}</h1>
                                      <div className="flex mt-1">
                                        <p className="text-orange-700 font-bold text-sm mr-3">{item.qty}x</p>
                                        <p className="text-gray-700 text-sm">${data.price}</p> 
                                      </div>
                                  </div>
                                    <p className="text-orange-700 font-bold col-span-1">${data.price * item.qty}</p>
                                  

                              
                              </div>
                      
                    }
                })
            )}
              <div className="flex justify-between my-2">
                <p className="text-orange-700 font-bold text-lg ml-1">Total</p>
                <p className="text-gray-700 font-bold text-lg mr-1">${calculateTotalPrice()}</p>
              </div>
            </div>
            <button className="bg-orange-800 text-white rounded-3xl w-5/6 h-10 mx-2 my-3 p-1" onClick={BtnOpenModal}>Go back to Store</button>
          </div>  
      </div>
  }    
  else {
    return false
  }
}
export default Confirm