import Store from "../../components/Store";
import Basket from "../../components/basket";
import Confirm from "../../components/confirmOrder";
import { useShopingCartContex } from "../../contex/shoppingCartContex";
const Home = () => {

    const {openModal} = useShopingCartContex()

    function checkClass (check : boolean) {
        if (check) {
            return "flex row-auto h-screen mx-auto justify-between overflow-hidden"
        }
        else {
            return "flex row-auto h-screen mx-auto justify-between"
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