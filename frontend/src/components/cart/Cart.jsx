import React from 'react'
import { Link } from 'react-router-dom'
const CartItem = ({value, title, img, increment, decrement}) =>(
    <div className='cartItem'>

        <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
        </div>

        <div>
            <button onClick={decrement}>-</button>
            <input type="number" readOnly value={value} />
            <button onClick={increment}>+</button>
        </div>

    </div>

)

const Cart = () => {
    const increment = (item) =>{

    }

    const decrement = (item) =>{

    }
  return (
    <section className='cart'>
        <main>

            <CartItem title={"Cheese Burger"} img={"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-with-Egg-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=441&dpr=off"} increment={() => increment(1)} decrement={() => decrement(1)} value={0}/>

            <CartItem title={"Cheese Burger 2"} img={"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=443&dpr=off"} increment={() => increment(2)} decrement={() => decrement(2)} value={0}/>

            <CartItem title={"Cheese Burger 3"} img={"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin-with-Egg:product-header-mobile?wid=768&hei=443&dpr=off"} increment={() => increment(3)} decrement={() => decrement(3)} value={0}/>

            <article>
            <div>
                <h4>Sub Total</h4>
                <p>{2000}</p>
            </div>
            <div>
                <h4>Tax</h4>
                <p>{2000 * 0.18}</p>
            </div>
            <div>
                <h4>Shipping Charges</h4>
                <p>{200}</p>
            </div>
            <div>
                <h4>Total</h4>
                <p>{2340}</p>
            </div>
            <Link to={"/shipping"}>Checkout</Link>
        </article>

        </main>
    </section>
  )
}

export default Cart