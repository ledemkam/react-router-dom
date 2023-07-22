import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="p-2 text-center bg-slate-200">
        {/* <NavLink to="/" className={({isActive}) =>`${isActive ? "bg-amber-400": "mx-2 text-md text-semibold"}`}>Home</NavLink> */}
        <NavLink to="/" className="mx-2 text-md text-semibold">Home</NavLink>
        <Link to="/contact" className="mx-2 text-md text-semibold">Kontakt</Link>
        <Link to="/analytics" className="mx-2 text-md text-semibold">Analytics</Link>
        <Link to="/services" className="mx-2 text-md text-semibold">Services</Link>
    </nav>
  )
}
export default NavBar