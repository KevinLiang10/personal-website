import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import { Home } from "../pages/Home";
import Main from "../components/layout/Main";
import { Entry } from "../pages/Entry";
import { Resume } from "../pages/Resume";
import { PageNotFound } from "../pages/PageNotFound"; 
import { Contact } from "../pages/Contact";
// const Entry = lazy(() => import("../pages/Entry"));
// const Resume = lazy(() => import("../pages/Resume"));
// const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    logCredits();
    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
            {/* <Suspense fallback={<Main/>}> */}
                    <Switch>
                        <Route path="/" exact>
                                <Entry/>
                        </Route>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/home" component={Home} />
                        <Route path="/resume" component={Resume} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
            {/* </Suspense> */}
            </Router>
        </ThemeProvider> 
    );
};

{/* function SuspenseContainer(props) {
    return <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>;
   } */}