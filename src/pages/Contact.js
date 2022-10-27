import React, {useContext} from 'react'
import Main from "../components/layout/Main";
import { ThemeContext } from '../components/theme/ThemeProvider';
import { EmailLink } from "../components/contact/EmailLink";
import { ContactIcons } from "../components/contact/Contacts";




export const Contact = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        
        <Main
        title="Contact"
        description="Contact me here.">
            <div 
            className={`container mx-auto box-border w-3/4 
            border-2 mt-20 p-10 bg-clip-padding shadow-lg
            ${theme==="light"?"border-teal-300 border-double":"border-teal-700"} 
            ${theme ==="light"? "bg-gray-100":"bg-zinc-900"}`}>
            <article className="post" id="contact">
            <header>
                <div className="title">
                <h2 className = "font-extrabold text-lg">Contact</h2>
                </div>
            </header>
            <br/>
            <div className="email-at">
                <p>Feel free to get in touch. You can email me by the following ways: </p>
                {/* <EmailLink /> */}
            </div>
            <ContactIcons />
            </article>
            </div>
        </Main>
    )
}
