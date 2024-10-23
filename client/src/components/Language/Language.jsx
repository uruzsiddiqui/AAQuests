import React from 'react'
 import "./language.css";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
const languages = [
  {code: "en", lang: "English"},
  {code: "hi", lang: "Hindi"},
  {code: "fr", lang: "French"},
  {code: "ch", lang: "Chinese"},
  {code: "po", lang: "Portugese"},
  {code: "sp", lang: "Spanish"},
  // {code: "en", lang: "English"},

]
function Language() {
  const {i18n} =  useTranslation();
 const changeLanguage = (lng) => {
     i18n.changeLanguage(lng);   
     }
 
  
  return (
    <>
    <div className='btn-lang' >
      <div className='inner' >
         <h1>Select Language</h1>
         {languages.map((lng) => {
          return (
            <button  key={lng.code} className='buttons'  onClick={() => changeLanguage(lng.code)} >{lng.lang}</button>
          )
        })}
        </div>
    </div>
      <div>
        
      </div>
    </>
  )
}

export default Language