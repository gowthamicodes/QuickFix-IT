import { useLocation, useNavigate } from "react-router-dom";
import "./Service-Access.css";


function ServiceAccess() {

  const location = useLocation();
  const navigate = useNavigate();

  const service = location.state?.service || "Career Counseling";

  // const [checkingAccess, setCheckingAccess] = useState(true);
  // const [hasAccess, setHasAccess] = useState(false);


  return (
    <div className="service-access-page">

      <div className="service-access-card" >

        <div className="access-icon">
          ✓
        </div>

        <h1>Service Unlocked</h1>

        <p className="access-intro">
          Your payment was successful and your service is now
          available.
        </p>

        <h2>{service}</h2>

        <p>
          You can now access your detailed {service} guidance.
        </p>

        <button
          className="access-btn"
          onClick={() =>
            navigate("/service-data", {
              state: {
                service: service
              }
            })
          }
        >
          View My Service
        </button>

      </div>

    </div>
  );
}

export default ServiceAccess;