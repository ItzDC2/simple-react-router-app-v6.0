import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h1>Error 404: Not Found</h1>
            <Link to="/" className="btn btn-outline-primary">Volver al inicio</Link>
        </>
    );
}

export default NotFound;