import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.js'

const BlogDetails = () => {

    const params = useParams();
    console.log(params.id);

    const { data, loading, error } = useFetch(`http://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (loading)
        return <p>Loading data...</p>;

    if (error)
        return <p>Error: {error.message}</p>

    return (
        <>
            <h1>{data.id} - {data.title}</h1>
            <p>{data.body}</p>
            <Link to="/blog" className="btn btn-outline-primary">Volver al blog</Link>
        </>
    )

}

export default BlogDetails;