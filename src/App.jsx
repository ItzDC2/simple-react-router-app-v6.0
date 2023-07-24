import Navbar from "./components/Navbar";
import LayoutPublic from "./layout/LayoutPublic";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";
import LayoutBlogDetails from "./layout/LayoutBlogDetails";

const App = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route element={<Inicio />} index></Route>
                    <Route element={<Contacto />} path="/contacto"></Route>
                    <Route element={<Blog />} path="/blog"></Route>
                    <Route element={<NotFound />} path="*"></Route>
                </Route>
                <Route path="/blog/:id" element={<LayoutBlogDetails />}>
                    <Route path="/blog/:id" element={<BlogDetails />}></Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
