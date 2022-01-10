import Home from "./pages/home";
import Movie from "./pages/movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Movie />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
