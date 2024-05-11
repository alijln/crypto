import { useState, useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login";

function App() {
  const [isLogin, setLoginState] = useState(localStorage.getItem("isLogin"));

  useEffect(() => {
    // Check if the user has logged in before
    const storedIsLogin = localStorage.getItem("isLogin");
    if (storedIsLogin === null) {
      // If not, set the initial state to false
      setLoginState("false");
      console.log('test');
      console.log('test');
    }
  }, []);

  function successLoginFn() {
    localStorage.setItem("isLogin", "true");
    setLoginState("true");
  }

  return (
    <>
      {isLogin === "true" ? (
        <HomePage />
      ) : (        
        <Login successLoginFn={successLoginFn} />
      )}
    </>
  );
}

export default App;
