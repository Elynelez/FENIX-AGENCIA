import React from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const Darkmode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const element = document.documentElement

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme == "dark") {
            element.classList.add("dark")
        } else {
            element.classList.remove("light")
            element.classList.remove("dark")
        }
    })
    return (
        <div className='relative'>
            <IoMdSunny
                onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                className={'w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300' + theme == "dark" ? "opacity-0" : "opacity-100"}
            />
            <IoMdMoon
                onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                className={'w-12 cursor-pointer'}
            />
        </div>
    )
};

export default Darkmode;