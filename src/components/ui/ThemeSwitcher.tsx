import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import Button from "./Button";

export default function ThemeSwitcher() {
    return <Button className="btn-circle" variant="ghost">
        <label className="swap swap-rotate btn btn-circle btn-ghost" >
            <input type="checkbox" className="theme-controller" value="night" />
            <Moon />
            <Sun />
        </label>
    </Button>
}