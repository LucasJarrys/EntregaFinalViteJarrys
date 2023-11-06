import "./Acordeon.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";

const Acordeon = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Acordeon">
      <Button className="Acordeon"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <Link className="category" to="paddle-type/Carbon 12k"><MenuItem onClick={handleClose}>Paletas Carbono 12K</MenuItem></Link>
       <Link className="category" to="paddle-type/Carbon 3k"><MenuItem onClick={handleClose}>Paletas Carbono 3K</MenuItem></Link>
       <Link className="category" to="paddle-type/Fibra de Vidrio"><MenuItem onClick={handleClose}>Paletas Fibra de Vidrio</MenuItem></Link>
      </Menu>
    </div>
  );
}

export default Acordeon