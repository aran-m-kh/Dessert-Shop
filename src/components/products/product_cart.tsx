import data from './data.json';
import DivButton from '../buttons/divButton';
import { useShopingCartContex } from '../../contex/shoppingCartContex';



const Product = () => {
    
    const {cartItems} = useShopingCartContex()

    const checkBtn = (id: number) => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === id) {
                return "selected";
            }
        }
        return "notSelected";
    };

    return <>
            {data.map((item, index) =>
            <div key={index} className='bg-slate-50 p-4 flex flex-col border-orange-500/100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 border-gray-100'>
                
                <img src={item.image.desktop} alt="" className='rounded-md' />
                
                <DivButton variant={checkBtn(item.id)} id={String(item.id)}></DivButton>
                
                <p className='text-gray-400 mt-1'>{item.category}</p>
                
                <h3 className='font-bold my-1'>{item.name}</h3>
                
                <p className='text-orange-700 font-semibold mb-1'>${item.price}</p>
            
            </div>
            )}
        </>
}



export default Product