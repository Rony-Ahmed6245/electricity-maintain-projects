import { NavLink, Outlet } from "react-router-dom"


function App() {


  return (
    <>
      {/*----------------- nav ------------- */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/reportBox">Report Box</NavLink>
      <NavLink to="/viewWork">View Work</NavLink>
      <NavLink to="/login">Login</NavLink>




      {/* ------------------children component render  ------------------*/}
      <Outlet></Outlet>
    </>
  )
}

export default App
