import { NavLink, Outlet } from "react-router-dom";

function App() {

  return (
    <>
      {/* Nav links using NavLink */}


      {/* Navbar */}

      <div className="drawer flex flex-col ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content sticky top-0 bg-gradient-to-r from-[#65B741]  to-[#FFB534] ">
          {/* Navbar */}
          <div className="max-w-7xl mx-auto navbar px-2 p-0">

            <div className="flex-1 px-2 text-xl font-bold text-white ">আলোকৃত ভাঙ্গুড়া পৌরসভা</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal flex gap-5 text-lg text-white ">
                {/* Navbar menu content here */}
                <NavLink className="hover:text-black hover:underline" to="/">হোম</NavLink>
                <NavLink className="hover:text-black hover:underline" to="/reportBox">অভিযোগ</NavLink>
                <NavLink className="hover:text-black hover:underline" to="/viewWork"> কার্যবলি   </NavLink>
                <NavLink className="hover:text-black hover:underline"  to="/login">লগইন</NavLink>
                <NavLink className="hover:text-black hover:underline"  to="/login">ডেভেলপার</NavLink>
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
          </div>
          {/* Page content here */}
          {/* Render child components */}
        </div>
        <div className="max-w-7xl mx-auto px-2">

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 min-h-full bg-base-200  rounded-r-md border1">
            {/* Sidebar content here */}
            <ul className="grid grid-cols-1 mt-16 ml-10 text-lg font-bold gap-5 text-white">
              <NavLink className="hover:text-[#65B741] hover:underline" to="/">হোম</NavLink>
              <NavLink className="hover:text-[#65B741] hover:underline" to="/reportBox">অভিযোগ</NavLink>
              <NavLink className="hover:text-[#65B741] hover:underline" to="/viewWork"> কার্যবলি   </NavLink>
              <NavLink className="hover:text-[#65B741] hover:underline" to="/login">লগইন</NavLink>
              <NavLink className="hover:text-[#65B741] hover:underline" to="/login">ডেভেলপার</NavLink>
            </ul>
          </ul>
        </div>
      </div>

    </>
  );
}

export default App;
