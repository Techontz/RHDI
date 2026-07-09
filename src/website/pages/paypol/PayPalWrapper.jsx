// components/PayPalWrapper.jsx
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalWrapper = ({ totalAmount, onSuccess, onError, onCancel }) => {
  // PayPal Client ID - utapata kutoka developer.paypal.com
  // Kwa testing tumia sandbox client ID



  const initialOptions = {
    clientId: "AYfQEwLuuPcqyHkeO4o3CWEyasiM3vFAwV_wCV3as2ZBmJB1thEgp_t-cJuw-nAGS0UfD1DlLHjvourp", // Badilisha hii na client ID yako
    currency: "USD",
    intent: "capture",
  };


  

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalAmount.toFixed(2),
            currency_code: "USD",
          },
          description: "Book Purchase Order",
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const details = await actions.order.capture();
      console.log("Payment successful:", details);
      onSuccess(details);
    } catch (error) {
      console.error("Payment error:", error);
      onError(error);
    }
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className="paypal-buttons-container">
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onCancel={onCancel}
          onError={onError}
          style={{
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "paypal",
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalWrapper;