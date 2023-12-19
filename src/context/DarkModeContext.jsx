import { createContext , useState, useContext, useEffect} from 'react';
import styles from './DarkModeContext.module.css'

export const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setdarkMode] = useState(false);

    const toggleDarkMode = ()=>{
        
        setdarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };

    useEffect(()=>{
        const isDark=
        localStorage.theme ==='dark'|| 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches);

        setdarkMode(isDark);
        updateDarkMode(isDark);
    },[]);

return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
}

function updateDarkMode(darkMode){
    if( darkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme ='dark';
    } else{
        document.documentElement.classList.remove('dark');
        localStorage.theme ='light';
    }
}

export const useDarkMode =()=> useContext(DarkModeContext)