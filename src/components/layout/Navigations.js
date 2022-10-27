import React, {useContext}from "react";
import {
  AppBar,
  Toolbar,
  Button,
  CssBaseline,
  Typography,
  makeStyles,
    Divider,
    Grid,
    withWidth,
} from "@material-ui/core";
import { ThemeContext } from "../theme/ThemeProvider";
import { TextDecrypt } from "../entry_content/TextDecrypt";
import { Link, useLocation } from "react-router-dom";
import  routes from '../../settings/routes';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (

    <AppBar  position="static" color="secondary">
      <CssBaseline />
      <Toolbar variant="regular">
      <Grid container >
        {
            routes.filter((l) => l.index).map(
                (l) => (
                    <Grid item className={"px-14"}  style={{justifyContent:"center"}} >
                    <Link to={l.path} >
                    <Button color="inherit" className={`${l.path === location.pathname ? "italic" : ""}`}>
                            {l.label}
                    </Button>
                    </Link>
                    </Grid>
                )
            )
        }
        {routes.filter((l) => !l.index).map((l) => (
            <>
            <Grid item className={`border-l-2 px-10 ${theme==="light"?"border-teal-500 border-double":"border-teal-700"}`}  style={{justifyContent:"center"}}>
            <Link to={l.path}>
                <Button color="inherit" >{l.label}</Button>
            </Link>
            </Grid>
            </>
        ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;