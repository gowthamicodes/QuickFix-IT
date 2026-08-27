// import { useState } from 'react'
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Components/Pages/Home'
import AboutUs from "./Components/Pages/AboutUs";

import ExploreServices from "./Components/Services/Explore-Services";
import Contact from "./Components/Pages/Contact"

import Login from "./Components/Pages/Login";
import { SnackbarContext } from "./Context/Snackbar-context";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AuthContext } from './Context/Auth-context';
import Navbar from "./Components/Pages/Navbar";
// import CareerCounseling from './Components/Services/Career-Counseling';
import Payment from './Components/Services/Payment';
import PaymentSuccess from './Components/Services/Payment-Success';
import ServiceAccess from "./Components/Services/Service-Access"
// import TechnologySelection from './Components/Services/Technology-Selection';
import ServiceData from "./Components/Services/Service-Data"
import Overview from './Components/Pages/Overview';
import ProtectedRoute from './Routes/Protected-routes';


function App() {
  // const [count, setCount] = useState(0)

  const { snackbarMessage, setSnackbarMessage } = useContext(SnackbarContext);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {/* <h2> HI this is IT service Center . </h2> */}
      {/* <HomePage /> */}
      <BrowserRouter>
        {/* <Router> */}
        <Navbar />
        {/* <Link to="/" >Home</Link> */}
        {/* <button >{currentUser ? user.username : "Login" }</button> */}

        <Routes>

          <Route path="/"
            element={<HomePage />} />
          {/* <Route path="/about" 
              element={ <AboutUs /> } /> */}


          <Route path="/overview"
            element={<Overview />} />

          <Route path="/about"
            element={ <AboutUs />} />

          <Route path="/login" element={<Login />} />

          <Route path="/services"
            element={ 
              <ExploreServices /> } />

          <Route path="/contact"
            element={ (
              <Contact /> )} />

          <Route path="/Payment"
            element={ <ProtectedRoute>
              <Payment />
              </ProtectedRoute>     
            }
          />

          <Route path="/Services/Payment-Success"
            element={ <ProtectedRoute>
              <PaymentSuccess />
            </ProtectedRoute> 
            
            }
          />

          <Route path="/service-access"
            element={<ProtectedRoute>
              <ServiceAccess />
            </ProtectedRoute>
            }
          />

          {/* <Route path="/technology-selection"
            element={isLoggedIn ? (
              <TechnologySelection />
            ) : (
              <Navigate to="/login" replace />
            )
            }
          /> */}

          
          <Route path="/service-data"
            element={<ProtectedRoute>
              <ServiceData />
            </ProtectedRoute>
            }
          />
          
        </Routes>
        {/* </Router> */}
        <Snackbar
          open={Boolean(snackbarMessage)}
          autoHideDuration={3000}
          onClose={() => setSnackbarMessage("")}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        >
          <MuiAlert
            severity="success"
            variant="filled"
            sx={{
              fontSize: "16px",
              fontweight: 600,
              borderRadius: "10px"
            }}
          >
            {snackbarMessage}
          </MuiAlert>
        </Snackbar>
      </BrowserRouter>
    </>
  )
}

export default App