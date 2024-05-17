import { Link, Outlet } from "react-router-dom";

import { FcManager } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";



function App() {

  return (
    <>
      {/* Nav links using NavLink */}


      {/* Navbar */}



      <Outlet></Outlet>
      <div className="flex justify-center  fixed w-full bottom-0">
        <div className="button-container  mx-auto mt-2 py-7">
        
          <Link to="/reportBox" className="button text-2xl image2 ">
            <FcDocument /> 
          </Link>
          <Link to="/" className="button text-2xl image2">
            <FcHome />
          </Link>
          <Link to="/login" className="button text-2xl image2">
            <FcManager />
          </Link>
        </div>
      </div>



    </>
  );
}

export default App;
