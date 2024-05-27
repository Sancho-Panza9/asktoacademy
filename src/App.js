import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import LayoutMain from "./layouts/Layout.js";
import LayoutChat from "./layouts/LayoutChat.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  console.log("App")
  const [user] = useAuthState(auth);

  return (
   
      <Router>
        <Routes>
          <Route path="/home" exact element={
             <div className="App">
             {!user ? (
               <Welcome />
             ) : (
               //<Layout>
               //  <ChatBox />
               //</Layout>
               <LayoutMain>
                <LayoutChat />
                </LayoutMain>
              )}
              </div>
          }/>

          <Route path="/" element={
              <div  className="App">
                <NavBar />
                <LayoutChat />
              </div>
            } 
          />
          
        </Routes>
      </Router>

    
  );
}

export default App;
