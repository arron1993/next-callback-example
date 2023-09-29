const BookingPaymentSelection = ({price, pricePAYG, onChange}) => {
    return (
        <div>
            <button type="button" onClick={() => onChange("payg")}>PAYG {pricePAYG}</button>
            <button type="button" onClick={() => onChange("nonpayg")}>Membership {price}</button>
        </div>
    )
}

export default BookingPaymentSelection