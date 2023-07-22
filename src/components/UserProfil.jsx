import { useParams } from "react-router-dom"

const UserProfil = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>
        <p className="text-4xl text-center stroke-lime-200">
            Your profil:{params.id}
        </p>
    </div>
  )
}
export default UserProfil