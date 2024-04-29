import { Link } from "react-router-dom";
import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function Header() {
    return <header className="header bg-base-100 sticky inset-0">
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <Link to="/"><span className="p-4">App Logo</span></Link>
                <ThemeSwitcher />
            </div>
        </div>
    </header>
}