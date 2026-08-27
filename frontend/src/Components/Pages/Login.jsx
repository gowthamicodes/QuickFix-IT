import { useState, useContext } from 'react';

import "./Login.css"
// import { SnackbarContext } from "../../Context/Snackbar-context";

// import { SnackbarContext } from "../Context/Snackbar-context";
import { useNavigate } from "react-router-dom"
import { SnackbarContext } from '../../Context/Snackbar-context';
import { AuthContext } from '../../Context/Auth-context';

function Login() {

  const { login, form, setForm, setCurrentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  // const [message, setMessage] = useState('');

  const { setSnackbarMessage } = useContext(SnackbarContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSignup) {
      if (!form.name || !form.email || !form.password) {
        setSnackbarMessage("Please fill all fields");
        return;
      }
      try {
        const response = await fetch(
          "https://quickfix-it.onrender.com/api/users/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              password: form.password
            })
          }
        )

        const responseData = await response.json();

        console.log("SIGNUP RESPONSE:", responseData);


        if (!response.ok) {
          setSnackbarMessage(responseData.message)
          return;
        }
        setSnackbarMessage("Signup Successfully");

        setIsSignup(false);

        setForm({
          name: "",
          email: "",
          password: ""
        })
      } catch (err) {

        console.error("SIGNUP ERROR:", err);

        setSnackbarMessage("Something went wrong");
      }
      return;

      // const userExists = (users.find  (u => u.email === form.email))

      // if (userExists) {
      //   setSnackbarMessage("User already exists. Please login.");
      // return;
      // }

      // setUsers([
      //   ...users, 
      //   {
      // username: form.username,
      // email: form.email,
      // password: form.password
      //   }
      // ])

    }
    // else {
    if (!form.email || !form.password) {
      setSnackbarMessage("Please fill all fields");
      return;
    }

    try {
      const response = await fetch(
        "https://quickfix-it.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: form.email,
            password: form.password

          })
        }
      );
      const responseData = await response.json();

      console.log("LOGIN RESPONSE:", responseData);


      if (!response.ok) {
        setSnackbarMessage(responseData.message);
        return;
      }

      console.log("FULL LOGIN RESPONSE:", responseData);
console.log("LOGIN TOKEN:", responseData.token);
console.log("LOGIN USER:", responseData.user);

// localStorage.clear();
      login(responseData.token)

      // localStorage.getItem("token")

      localStorage.setItem("user", JSON.stringify(responseData.user))

      setCurrentUser(responseData.user);

      setForm({
        name: "",
        email: "",
        password: ""
      });

      setSnackbarMessage(`Login Successfully ${responseData.user.name}`);

      navigate('/');

    } catch (err) {

      console.error("LOGIN ERROR:", err);

      setSnackbarMessage("Login failed")
    }

    // const user = users.find (u =>  u.email === form.email && u.password === form.password)

    // if(!user) {
    //   setSnackbarMessage("Invalid email or password");
    //   return;
    // }

    // ()

    // setCurrentUser(user.username);

    // setTimeout(() => {
    // }, 2000);
    // }
  }
  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  return (
    <div className="logincontainer">

      {/* <h2>Before getting services, please login </h2> */}

      <form className="loginform" onSubmit={handleSubmit}>

        <h2>{isSignup ? "Signup" : "Login"}</h2>
        {/* <label >Username:</label> */}
        {isSignup && (
          <input className='formfield' type="text" id="name" name="name" placeholder="name" value={form.name} onChange={handleChange} />
        )}

        <input className='formfield' type="email" id="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />

        <input className='formfield' type="password" id="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />

        <p className="switch-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}

          <button type="button" className='signupbutton' onClick={() => setIsSignup(!isSignup)}>{isSignup ? "Login" : "Signup"}</button>
        </p>
        <button type="submit" className="loginbutton"  >{isSignup ? "Signup" : "Login"}</button>

        {/* {message && <p>{message}</p>} */}

      </form>
    </div>

  )
}

export default Login;