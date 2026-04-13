import ubedUpiQr from '../assets/ubed-upi-qr.jpeg';

const PAYMENT_RECEIVER_EN = 'Ubed Shaikh';
const PAYMENT_RECEIVER_MR = '\u0909\u092c\u0947\u0926 \u0936\u0947\u0916';
const PAYMENT_RECEIVER_LABEL = `${PAYMENT_RECEIVER_EN} (${PAYMENT_RECEIVER_MR})`;
const PAYMENT_UPI_ID = 'ubbus313-3@okaxis';

function PaymentQrCard({
  title = 'Contribution Payment QR',
  description = `Pay contribution to ${PAYMENT_RECEIVER_LABEL}.`,
}) {
  return (
    <section className="card payment-qr-panel">
      <h2 className="card-title">{title}</h2>
      <p className="page-intro payment-qr-copy">{description}</p>
      <div className="payment-qr-stack">
        <img className="fund-qr-image" src={ubedUpiQr} alt={`UPI QR for ${PAYMENT_RECEIVER_LABEL}`} />
        <p className="fund-upi-id">UPI ID: {PAYMENT_UPI_ID}</p>
      </div>
    </section>
  );
}

export default PaymentQrCard;
