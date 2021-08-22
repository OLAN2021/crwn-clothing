import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JRK4lDHtVxI5SpXoYsvTg1yvlhBx6g0lVeMIOzcmkovQClslSWCKnSCn6WRei3NxC4vw0gshIjNHoCMsQQrQJ6N00nzqQmAG4';

const onToken = token =>{
    console.log(token);
    alert('Payment Successful');
}

return (
    <StripeCheckout
    label='Pay Now'
    name='Sample Clothing Ltd'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/Cuz.svg'
    description={`Your total price is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
)
}

export default StripeCheckoutButton