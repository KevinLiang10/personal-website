import React , {useContext}from "react";
import {Link} from "react-router-dom";
import { ThemeContext } from '../components/theme/ThemeProvider';
import Main from "../components/layout/Main";



export const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Main 
            title="Home"
            description="Welcome to my home page.">
            <div 
            className={`container mx-auto box-border w-3/4 
            border-2 mt-20 p-10 bg-clip-padding shadow-lg
            ${theme==="light"?"border-teal-300 border-double":"border-teal-700"} 
            ${theme ==="light"? "bg-gray-100":"bg-zinc-900"}`}>
            <article >
            {/* <header>
                <div className="title ">
                </div>
            </header> */}
            <section className = "tracking-wider pt-16">
                <h2 className = "font-extrabold text-lg">Hello, I am Kevin Liang!</h2>
                <div className = "pt-4">I'm a 4th year CS student fron University of Waterloo. My main interests are software development and financial investment. I have completed 3 Co-op work terms and seeking for the 4th Co-op opportunity. Also currently working with Dr. Meng Xu as undergraduate research assistant.</div>
            </section>
            <br/>
            <p> Please feel free to read more <Link to="/about">about me</Link>,
                or you can check out my {' '}
                <Link to="/resume">resume</Link>, {' '}
                {/* <Link to="/projects">projects</Link>, {' '}
                or <Link to="/contact">contact</Link> me. */}
            </p>
            </article>
            </div>
        </Main>
    );

};

export default Home;