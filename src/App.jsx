import { useEffect } from "react"
import { currentUser } from "./services/auth";
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import LogIn from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import User from "./pages/User.jsx";
function App() {

  const dispatch = useDispatch();
  const state = useSelector((state)=> state.auth);

  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [])

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-neutral-900'>
      <div className='w-full block'>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
