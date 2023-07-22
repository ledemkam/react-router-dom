import { Link, Outlet } from "react-router-dom"

const Analytics = () => {
  return (
    <div className="bg-slate-400">
        <p className="text-center mb-10 pt-1">anakxtix here is compagny</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident vitae neque iusto voluptatum commodi, sequi, aperiam dicta obcaecati eum totam pariatur nulla excepturi esse, rem ipsum repellendus. Cupiditate, corrupti placeat.
        Est aliquam accusamus maxime, cupiditate voluptate explicabo illum odio ullam dolor esse quo, maiores ut commodi iste ea nostrum. Sunt ratione dolorem, in esse enim quibusdam expedita explicabo! Esse, necessitatibus?</p>
        <nav className="text-center">
            <Link className="mx-2 font-semibold text-lg" to="/analytics/developmnt">Developmnt</Link>
            <Link className="mx-2 font-semibold text-lg" to="/analytics/cybersecurity">Cybersecurity</Link>
            <Link className="mx-2 font-semibold text-lg" to="/analytics/uiux">UI/UX</Link>

        </nav>
        <Outlet/>
    </div>
  )
}
export default Analytics