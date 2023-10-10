"use client"
import {PaymentElement} from '@stripe/react-stripe-js';

import Link from 'next/link';

function Payment(){

    return(
        <form>
            <PaymentElement />
            <button>Submit</button>
        </form>
    );
}

export default Payment;