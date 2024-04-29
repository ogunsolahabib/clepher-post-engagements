import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import Button from "./Button";
import { useEffect } from "react";
import useLocalStorage from "../../custom-hooks/useLocalStorage";

import mergeClassNames from "../../utills/mergeClassNames";


export default function ThemeSwitcher() {
    const [theme, setTheme] = useLocalStorage('theme', 'winter');

    useEffect(() => {
        document.querySelector('html')?.setAttribute('data-theme', theme)
    }, [theme, setTheme])


    const handleChangeTheme = () => {
        if (theme === 'winter') {
            setTheme('night');
        }
        if (theme === 'night') {
            setTheme('winter');
        }
    }


    return <Button className={mergeClassNames("btn btn-circle swap btn-ghost", theme === 'night' ? 'swap-active' : '')} data-toggle-theme="winter,night"
        data-act-class="ACTIVECLASS"
        onClick={handleChangeTheme}
    >
        <Sun />
        <Moon />
    </Button>


}