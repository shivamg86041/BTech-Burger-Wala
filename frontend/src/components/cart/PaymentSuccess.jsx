import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <section className='paymentsuccess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed SuccessFully, you can check order Status Below.</p>
            <Link to={"my-orders"}>Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess