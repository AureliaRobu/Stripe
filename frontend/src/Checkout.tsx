import {useStripe} from "@stripe/react-stripe-js";
import {useState} from "react";

function Checkout(props) {
    const stripe = useStripe();

    const [product, setProduct] = useState({
        name: 'Hat',
        description: 'Pug hat. A hat your pug will love.',
        images: [
            'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        ],
        price: 'price_1PsJC3AbOolguzqaPq8ugUqe',
        currency: 'usd',
        quantity: 0,
    });

    const changeQuantity = (v) =>
        setProduct({ ...product, quantity: Math.max(0, product.quantity + v) });

    const handleClick = async (event)=> {
        const body = {line_items: [product]};
        const {id} = fetch()
    }


    return  (
        <>
            <h2>Stripe Checkout</h2>
            <p>
                Shopping-cart scenario. Change the quantity
                of the products below, then click checkout to open the Stripe Checkout
                window.
            </p>

            <div className="product">
                <h3>{product.name}</h3>
                <h4>Stripe Amount: </h4>

                <img src={product.images[0]} width="250px" alt="product" />

                <button
                    className="btn btn-sm btn-warning"
                    onClick={() => changeQuantity(-1)}>
                    -
                </button>
                <span style={{ margin: '20px', fontSize: '2em' }}>
          {product.quantity}
        </span>
                <button
                    className="btn btn-sm btn-success"
                    onClick={() => changeQuantity(1)}>
                    +
                </button>
            </div>

            <hr />

            <button
                className="btn btn-primary"
                onClick={handleClick}
                disabled={product.quantity < 1}>
                Start Checkout
            </button>
        </>
    );

    ;
}

export default Checkout;
