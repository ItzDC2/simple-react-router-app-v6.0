import { Outlet } from "react-router-dom"

const LayoutBlogDetails = () => {
    return (
        <div className="container">
            <Outlet />
        </div>
    )
}

export default LayoutBlogDetails;