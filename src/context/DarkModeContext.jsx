import { createContext , useState, useContext} from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setdarkMode] = useState(false);

    const toggleDarkMode = ()=>{
        setdarkMode(!darkMode);
        updateDarkMode(!darkMode);
    };

    useEffect(()=>{},[])

return <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
}

function updateDarkMode(darkMode){
    if( darkMode){
        document.documentElement.classList.add('dark');
    } else{
        document.documentElement.classList.remove('dark');
    }
}

export const useDarkMode =()=> useContext(DarkModeContext)