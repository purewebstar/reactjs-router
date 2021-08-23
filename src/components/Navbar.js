import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar,Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '2px 2px 2px 2px'
  },
})

const Navbar = () =>{
  const classes = useStyles()
    return(
     <AppBar position="static">
     <Toolbar>
       <Typography variant="h6" className={classes.title}>
         Reactjs-Router
       </Typography>
       <Button color="primary"><Link to='/home'>Home</Link></Button>
       <Button color="inherit"><Link to='/about'>About</Link></Button>
       <Button color="inherit"><Link to='/contact'>Contact</Link></Button>
     </Toolbar>
    </AppBar>
    )
}

export default Navbar
