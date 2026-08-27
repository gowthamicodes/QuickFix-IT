
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => { },
  logout: () => { }

});

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(
    // localStorage.getItem("isLoggedIn") === "true"
!!localStorage.getItem("token")
  );

  const [currentUser, setCurrentUser] = useState(() => {

    const savedUser = localStorage.getItem("user");

      return savedUser ? JSON.parse(savedUser): null;
    
  });

  const [users, setUsers] = useState([]);

  const login = (token) => {

    console.log("AUTH TOKEN:", token);
    console.log("TOKEN TYPE:", typeof token);

    if (typeof token !== "string") {
        console.error("Invalid token received:", token);
        return;
    }

    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("token", token);
};

  // const login = (token) => {

  //   console.log("auth token:", token)

  //   setIsLoggedIn(true);

  //   // setCurrentUser(user);

  //   localStorage.setItem("isLoggedIn", "true");
  //   localStorage.setItem("token", token)

  //   // localStorage.setItem("user", JSON.stringify(user))
  // }

  const logout = () => {

    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  // const [ currentUser, setCurrentuser] = useState(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });


  return (

    <AuthContext.Provider value={{
      isLoggedIn,
      login,
      logout,
      form,
      setForm,
      currentUser,
      setCurrentUser,
      users,
      setUsers
    }}>
      {children}

    </AuthContext.Provider>
  )
}


