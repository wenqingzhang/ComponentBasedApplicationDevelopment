import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/Login";

const App: React.FC<{}> = () => {
  const [currentUser, setCurrentUser] = React.useState<{
    userName?: string;
    isLogin?: boolean;
    thirdpartyLogins?: {}[]
  }>({});
  return (
    <div className="App">
      <LoginPage title="Login" onLogin={(user)=>setCurrentUser({
        userName: user.name,
        isLogin: user.isLogin
      })}/>
    </div>
  );
};

export default App;
