import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./redux/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap ">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet /> 
          {/* Outlet for rendering child routes */}
        </main>
        <Footer />
      </div>
    </div>
  ) :(
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p> {/* Added a simple loader */}
    </div>
  );

}

export default App;
