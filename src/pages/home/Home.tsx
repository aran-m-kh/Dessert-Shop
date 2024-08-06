import Store from "../../components/Store";
import Basket from "../../components/basket";
import Confirm from "../../components/confirmOrder";
import { useShopingCartContex } from "../../contex/shoppingCartContex";
const Home = () => {

    const {openModal} = useShopingCartContex()

    function checkClass (check : boolean) {
        if (check) {
            return "flex flex-col row-auto h-screen items-center mx-auto justify-between des:flex des:flex-row des:items-start overflow-hidden"
        }
        else {
            return "flex flex-col row-auto h-screen items-center mx-auto justify-between des:flex des:flex-row des:items-start"
        }
    }

    return <>
        <div className={checkClass(openModal)}>
            <Store/>
            <Basket/>
            <Confirm/>
        </div>  
        
    </>
}

export default Home