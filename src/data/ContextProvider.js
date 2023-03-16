import React,{useContext,useState} from 'react'

// Create a context for the current user with default empty values
const LanguageContext = React.createContext({
  lang: "",
  handleLangChange : () => {},
});

// Create a custom hook that is used to consume the context
function ContextProvider({children}) {
      const [lang, setLang] = useState("");

    const handleLangChange = (value) => {
        setLang(value);
     }
      
      
    const languageValue = {
      lang,
      handleLangChange,
    };
  return (
      <LanguageContext.Provider value={languageValue}>
        {children}
    </LanguageContext.Provider>
  );
}

export default ContextProvider

// useLanguage.js
export  const useLanguage = () => useContext(LanguageContext);