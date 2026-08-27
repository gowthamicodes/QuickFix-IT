import { Link, useLocation,useNavigate } from "react-router-dom";
import "./Payment-Success.css";


function PaymentSuccess() {

const location = useLocation();
  const navigate = useNavigate();

const service = location.state?.service || "Career Counseling"
    // const service = location.state?.service || "Career Counseling";


  return (
    <div className="payment-success-page">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Payment Successful!</h1>

        <p className="success-message">
          Your payment has been completed successfully.
        </p>

        <p className="service-message">
          Your <strong>{service}</strong> service is now ready.
        </p>
        
        <div className="service-access">
          <h3>Access Your Service</h3>

          <p>
            Click the button below to access your service.
          </p>

          <button 
            
            className="access-btn" onClick={() => navigate("/service-access", {
state: {
  service: service
}
            }
            )}
          >
            Access Service
          </button>

        </div>

        <Link
          to="/services"
          className="back-btn"
        >
          Back to Services
        </Link>

      </div>

    </div>
  );
}

export default PaymentSuccess;

                // key: "rzp_test_TRyWXkEqAfeujJ",
