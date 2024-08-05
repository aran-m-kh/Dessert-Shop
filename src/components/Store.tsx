import Product from "./products/product_cart"


const Store = () => {
    return <div className="h-fit w-5/6 m-11 p-4 rounded-md bg-slate-600 bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-30 backdrop-saturate-50 backdrop-contrast-100">
        <h1 className="my-4 text-3xl font-bold text-white ">Desserts</h1>
        <div className="grid grid-cols-3 gap-4">
            <Product/>     
        </div>
    </div>
}

export default Store