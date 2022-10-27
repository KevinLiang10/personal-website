import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: "auto",
        marginBottom: "auto",
        "@media (max-width: 768px)": {
            marginLeft: theme.spacing(4),
        },
    },
}));

export const Content = () => {
    const classes = useStyles();

    return (
        

        <Container className={`border-8 ${classes.main}`}>
            
            <div className="grid grid-cols-1 grid-rows-2">
                <div className="grid grid-cols-2">
                <Typography variant="h2" component="h1" gutterBottom>
                    <TextDecrypt text={`${Resume.basics.x_title} ${FirstName}`} />
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    <TextDecrypt text={`a ${Resume.basics.job}`} />
                    <TextDecrypt text={`from the University of Waterloo`}/>
                </Typography>
                </div>
                <Link
                    to="/home"
                    underline="none"
                    color="inherit"
                    noWrap
                    className={classes.svg}
                >   
                <Button 
                    fullWidth={true}
                    style={{height: 100}}
                >
                <Typography variant="h5" component="h2" gutterBottom>
                        <TextDecrypt text={`Enter Home Page::->->`}/>  
                </Typography>
                </Button>
                </Link>
                

            </div>
        </Container>
        
        
    );
};
