import { Link } from "react-router-dom";
import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function Header() {
    return <header className="navbar bg-base-100 sticky inset-0  z-20 border-b border-b-base-300">
        <div className="container mx-auto">
            <div className="flex justify-between items-center w-full ">
                <Link to="/"><span className="p-4">App Logo</span></Link>
                <ThemeSwitcher />
            </div>
        </div>
    </header>
}