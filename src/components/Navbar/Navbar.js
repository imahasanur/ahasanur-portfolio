import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import navIcon from '../../images/navIcon2.png';
import { faClipboardList, faFile, faHome } from '@fortawesome/free-solid-svg-icons';
import { faRProject } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <div class={classes.root}>
                    <Avatar className={classes.large} alt="Remy Sharp" src={navIcon} />
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto" style={{fontWeight:'bold'}}>
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/home"><FontAwesomeIcon icon={faHome} />  Home </Link>
                    </li>
                    {/* <li class="nav-item">
                         <Link class="nav-link active" aria-currenthref="#" to="#"><FontAwesomeIcon icon={faClipboardList} /> Projects </Link>
                    </li> */}
                    <li class="nav-item">
                        <Link class="nav-link" to="/resume"><FontAwesomeIcon icon={faFile} /> Resume </Link>
                    </li>

                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;