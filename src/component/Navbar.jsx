import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShareIcon from "@mui/icons-material/Share";
import TaskIcon from "@mui/icons-material/Task";
 
import Tap from "@mui/icons-material/CurrencyExchange";
import "../App.css";
const Navbar = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="bottom">
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <a href="/tasks">
            <BottomNavigationAction label="Tasks" icon={<TaskIcon className="icon" fontSize="large"/>} />
          </a>

          <a href="/">
            {" "}
            <BottomNavigationAction label="Tap" icon={<Tap className="icon" fontSize="large"/>} />
          </a>
          <a href="/friends">
            <BottomNavigationAction label="share" icon={<ShareIcon className="icon" fontSize="large"/>} />
          </a>
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Navbar;
