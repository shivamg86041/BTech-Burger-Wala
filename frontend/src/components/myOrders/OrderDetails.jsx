import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>

        <main>

            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address : </b>
                    {"ssafsaf asf"}
                </p>
            </div>

            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name : </b>
                    {"Shivam Gupta"}
                </p>
                <p>
                    <b>Phone : </b>
                    {3242134}
                </p>
            </div>

            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status : </b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At : </b>
                    {"23-02-2023"}
                </p>
                <p>
                    <b>Delivered At : </b>
                    {"23-02-2023"}
                </p>
            </div>

            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Method : </b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference : </b>
                    {"asfsaff"}
                </p>
                <p>
                    <b>Paid At : </b>
                    {"23-02-2023"}
                </p>
            </div>


            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total : </b>
                    {"2421"}
                </p>
                <p>
                    <b>Shipping Charges : </b>
                    {"200"}
                </p>
                <p>
                    <b>Tax : </b>
                    {"23"}
                </p>
                <p>
                    <b>Total : </b>
                    {"4214"}
                </p>
            </div>

            <article>
                <h1>Ordered Items</h1>

                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{2}</span> X 
                        <span>{234}</span>  
                    </div>
                </div>

                <div>
                    <h4>Veg Cheese Burger</h4>
                    <div>
                        <span>{10}</span> X 
                        <span>{500}</span>  
                    </div>
                </div>

                <div>
                    <h4>Burger Fries</h4>
                    <div>
                        <span>{12}</span> X 
                        <span>{1800}</span>  
                    </div>
                </div>

                <div>
                    <h4 style={{fontWeight:800,}}>Sub Total</h4>
                    <div style={{fontWeight:800,}}>
                        {2132}  
                    </div>
                </div>
            </article>

        </main>

    </section>
  )
}

export default OrderDetails