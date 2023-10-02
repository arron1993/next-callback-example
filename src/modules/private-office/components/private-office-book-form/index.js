'use client';

import {useState} from "react"
import BookingPaymentSelection from "@/modules/booking/components/booking-payment-selection"

const PrivateOfficeBookForm = () => {
    const [paymentSelection, setPaymentSelection ] = useState('payg')
    const [prices, setPrices] = useState({'payg': 10, 'nonpayg': 5})
    return (<form>
        <input type="date"></input>
        <input type="time"></input>

        <BookingPaymentSelection onChange={(value) => setPaymentSelection(value)} price={prices.nonpayg} pricePAYG={prices.payg}></BookingPaymentSelection>

        <button>Book for £{prices[paymentSelection]}</button>
    </form>)
}

export default PrivateOfficeBookForm