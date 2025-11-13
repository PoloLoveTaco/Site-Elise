import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="bg-[#FAEEDA] min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-orange-300 mb-4">
                404
            </h1>

            <h2 className="text-2xl font-oswald mb-2">
                Page non trouvée
            </h2>

            <p className="text-gray-600 mb-6 max-w-md">
                Oups ! La page que vous cherchez n’existe pas ou a été déplacée.
            </p>

            <Link
                to="/home"
                className="mt-4 inline-block bg-orange-400 text-white px-6 py-3 rounded-lg font-oswald hover:bg-orange-500 transition"
            >
                Retour à l’accueil
            </Link>
        </div>
    )
}

export default NotFound