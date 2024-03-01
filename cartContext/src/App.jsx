import Cart from "./cart"
import Products from "./product"


function App() {

  return (
    <>
      <Products name={"car"} proPrice={1000000}/>
      <Products name={"mobile"} proPrice={500}/>
      <Products name={"pen"} proPrice={10}/>
       
       <h1>The Cart</h1>
        <Cart/>
    </>
  )
}

export default App
