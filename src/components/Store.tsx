import Product from "./products/product_cart"


const Store = () => {
    return <div className="h-fit w-5/6 tab:m-4 mob:m-4 des:m-11 p-4 rounded-md bg-slate-600 bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-30 backdrop-saturate-50 backdrop-contrast-100">
        <h1 className="my-4 text-3xl font-bold text-white ">Desserts</h1>
        <div className="mob:grid mob:grid-col-1 mob:gap-4 tab:grid tab:grid-cols-2 tab:gap-4 des:grid des:gap-4 des:grid-cols-3">
            <Product/>     
        </div>
    </div>
}

export default Store