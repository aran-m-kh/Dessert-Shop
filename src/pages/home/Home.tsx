import Store from "../../components/Store";
import Basket from "../../components/basket";
import Confirm from "../../components/confirmOrder";
import SideBar from "../../components/sidebarCart";
import { useShopingCartContex } from "../../contex/shoppingCartContex";
const Home = () => {

    const {openModal, sidebar} = useShopingCartContex()

    return <>
        <div className={`flex flex-col h-screen items-center mx-auto justify-between des:flex des:flex-row des:items-start ${openModal && "overflow-hidden"}`}>
            <div className="mob:hidden tab:hidden h-fit w-5/6"><Store/></div>
            <div className="mob:hidden tab:hidden h-4/6 w-1/4 mr-3"><Basket/></div>
            <Confirm/>
            <div className={`des:hidden flex ml-10 ${sidebar && "overflow-hidden"}`}>
                
            
                <SideBar/>
                
                <Store/>
            </div>
        </div>  
        
    </>
}

export default Home