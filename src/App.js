import Home from "./pages/home";
import Movie from "./pages/movie";
import Search from "./pages/search";
import Tv from "./pages/tv";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/tv/:id" element={<Tv />} />
                    <Route path="/search/:keyword" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
