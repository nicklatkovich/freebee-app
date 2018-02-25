import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import LogoutBtn from '../buttons/logoutBtn'
import ProfileBtn from '../buttons/profileBtn'
import MenuIcon from 'material-ui-icons/Menu'
import { login, logout, isLoggedIn } from '../../utils/authService'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class MainHeader extends Component {
  handlerLogout = () => {
    logout()
  }

  render() {
    const { classes, onMenuClick } = this.props;
    return (
      <div className="main-header">
        <div className="main-header__inner">
          <AppBar position="static">
            <Toolbar>
              <IconButton 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="Menu"
                onClick={onMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
            Freebee
              </Typography>
              <Button color="inherit">
                Profile
              </Button>
              <Button color="inherit">
              <Link className="logout-btn" to="/">
                  Logout
                </Link >
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MainHeader);