import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <p className="text-3xl font-medium text-center">Page not Found 🤖</p>
        <div className="text-center">
          <Link to="/">Back to Home-page</Link>
        </div>
    </div>
  )
}
export default NotFound