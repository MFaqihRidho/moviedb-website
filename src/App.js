import Home from "./pages/home";
import Movie from "./pages/movie";
import Tv from "./pages/tv";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./Components/result";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/tv/:id" element={<Tv />} />
                    <Route path="/search/:keyword" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
