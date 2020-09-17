import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer :{
        margin:'2%',
        backgroundColor: '#fff'
    }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className="text-center">
      <footer className={classes.footer}>
        <p>
            Designed and Developed by <a href="https://hiteshsubnani.js.org">Hitesh Subnani</a> using <img src="https://hiteshsubnani.js.org/images/ReactJS.png" alt="React"  width="2%" />
        </p>
      </footer>
      </div>
  );
}