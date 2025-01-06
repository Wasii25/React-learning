import NavBar from "./components/Navbar";
import Main from "./components/Main";
import { createRoot } from "react-dom/client";

export default function app() {
    createRoot(document.getElementById("root")).render(
        <div>
            <Main />
            <NavBar />
        </div>
    );
};