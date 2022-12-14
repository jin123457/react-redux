import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
