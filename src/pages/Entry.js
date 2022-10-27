import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/entry_content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HelmetMeta } from "../app/HelmetMeta";
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { FooterText } from '../components/footer/FooterText';
import { SocialIcons } from '../components/entry_content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Entry = () => {
  const classes = useStyles();

  return (
    <>
      <HelmetMeta />
      <div className={classes.root}>
        
        <DisplacementSphere />
        {/* <LogoLink /> */}
        <Content />
        <ThemeToggle />
        {/* <Hidden smDown>
          <SocialIcons />
        </Hidden> */}
        {/* <Hidden mdUp>
          <SpeedDials />
        </Hidden> */}
        {/* <FooterText /> */}
      </div>
    </>
  );
};

export default Entry;