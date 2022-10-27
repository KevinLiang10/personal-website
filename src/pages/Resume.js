import React,  {useContext, useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { ThemeContext } from '../components/theme/ThemeProvider';
import Main from '../components/layout/Main';
import {PdfResume} from '../components/resume/PdfResume';

// import Education from '../components/resume/Education';
// import Experience from '../components/resume/Experience';
// import Skills from '../components/resume/Skills';
// import Courses from '../components/resume/Courses';
// import References from '../components/resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   'Courses',
//   'References',
// ];



export const Resume = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [divWidth, setDivWidth] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        setDivWidth(ref.current.clientWidth);
        console.log('width: ', ref.current.clientWidth);
    }, []);
    return(
    <Main
      title="Resume"
      description="My Resume."
    >
      {/* <article className="post" id="resume">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div>
  
          </div>
        </header>
        <Education data={degrees} />
        <Experience data={positions} />
        <Skills skills={skills} categories={categories} />
        <Courses data={courses} />
        <References />
  
      </article> */}
      <div
        ref={ref}
        className='container mx-auto content-center w-3/4'>
      <PdfResume theme = {theme} width = {divWidth}/>
      </div>
    </Main>
  );
};

export default Resume;