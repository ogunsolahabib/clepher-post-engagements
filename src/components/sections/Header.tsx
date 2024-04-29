import ThemeSwitcher from "../ui/ThemeSwitcher";

export default function Header() {
    return <header className="header">
        <div className="container mx-auto">
            <div className="flex justify-between">
                <span>App Logo</span>
                <ThemeSwitcher />
            </div>
        </div>
    </header>
}