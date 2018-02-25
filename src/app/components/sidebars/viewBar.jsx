import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    // marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    // marginTop: 56,
    marginTop: 0,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      // marginTop: 64,
      marginTop: 0,
    },
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class ViewBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchor: 'left',
    }
  }

  formatObject = (obj) => {
    const {title} = obj
    return (
      <List>
        <ListItem button>
          <ListItemText primary={title} />
        </ListItem>
      </ List>
    )
  }


  render() {
    const { classes, theme, onHideClick, currentObject } = this.props;
    const { anchor } = this.state;
    const open = this.props.isOpen;
    let formatedObj = null;
    if (currentObject != null) {
      formatedObj = this.formatObject(currentObject)
    }
    console.log(formatedObj)

    const drawer = (
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={onHideClick}>
              {<ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          {formatedObj}
          <Divider />
          <List />
        </div>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div style={{width: 'auto'}} className={classNames(classes.root)}>
        <div className={classes.appFrame}>
          {before}
          {after}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ViewBar)