import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DisplacementSphere from '../background/DisplacementSphere';
import {ThemeToggle} from "../theme/ThemeToggle"
import Navigation from './Navigations';
import ScrollToTop from './ScrollToTop';



function Main(props){
    return(
        <>
        <HelmetProvider>
            <DisplacementSphere />
            <ScrollToTop />
            <Helmet titleTemplate="%s | Kevin Liang" defaultTitle="Kevin Liang" defer={false}>
                {props.title&&<title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            <div id="wrapper">
            <Navigation theme/>
            
                {props.children}

            {/* {props.fullPage ? null : <SideBar />} */}
            </div>
        </HelmetProvider>
        <div >
        <ThemeToggle/>
        </div>
        </>
    );
};

Main.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
  };
  
Main.defaultProps = {
children: null,
fullPage: false,
title: null,
description: "Kevin Liang's personal website",
};

export default Main;