import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import SignIn from "./NavMainComponents/SignIn";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as action from "../ListProduct/module/action/action";
import * as ActionType from "../ListProduct/module/constant/constant";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "white !important",
    color: "black !important",
    paddingLeft: "36px",
    paddingTop: "38px",
    position: "relative",
    boxShadow: "none",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    zIndex: 1000,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    padding: 0,
    minHeight: 36,
  },
  linkJordan: {
    height: "0 12px",
    minHeight: 34,
    display: "flex",
    alignItems: "center",
  },
  jordan: {
    height: 24,
    width: 24,
    "&hover": {
      opacity: 0.7,
    },
  },
  nav1: {
    height: 34,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  nav1Menu: {
    margin: "0 12px",
    textDecoration: "none",
    color: "black",
    fontSize: 12,
    "&:hover": {
      color: "grey",
    },
    cursor: "pointer",
  },
  helpMenuContainer: {
    padding: "24px 24px 24px 18px",
    position: "absolute",
    right: 18,
    zIndex: 10,
    width: 200,
    fontSize: 14,
    textAlign: "left",
    backgroundColor: "white",
  },
  helpMenuHeader: {
    padding: "4px 8px",
    marginBottom: 12,
    fontSize: 16,
    cursor: "pointer",
  },
  helpMenuItem: {
    color: "#757575",
    padding: "4px 8px",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
  },
}));
const Navsub = () => {
  const classes = useStyles();
  const [helpMenu, setHelpMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <AppBar className={classes.nav} id="navsub">
      <Toolbar className={classes.toolbar}>
        <div id="jordan" className={classes.linkJordan}>
          <img src="" className={classes.jordan} />
          <Link
            to="/listProduct"
            className={classes.menuItem}
            onClick={() => {
              dispatch(
                action.createAction({
                  type: ActionType.CHANGE_GENDER_TYPEPRODUCT,
                  payload: { gender: "male", typeProduct: "shoes" },
                })
              );
            }}
          >
            All shoes
          </Link>
        </div>
        <Typography variant="h6" className={classes.title}></Typography>
        <div className={classes.nav1}>
          <div
            onMouseOver={() => setHelpMenu(true)}
            onMouseLeave={() => setHelpMenu(false)}
          >
            <span className={classes.nav1Menu}>Help</span>
            {helpMenu && (
              <div className={classes.helpMenuContainer}>
                <div className={classes.helpMenuHeader}>Help</div>
                <div className={classes.helpMenuItem}>Order Status</div>
                <div className={classes.helpMenuItem}>
                  Dispatch and Delivery
                </div>
                <div className={classes.helpMenuItem}>Returns</div>
                <div className={classes.helpMenuItem}>Contact Us</div>
                <div className={classes.helpMenuItem}>Privacy Policy</div>
                <div className={classes.helpMenuItem}>Terms of Sale</div>
                <div className={classes.helpMenuItem}>Terms of Use</div>
                <div className={classes.helpMenuItem}>Send us FeedBack</div>
              </div>
            )}
          </div>
          <SignIn />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navsub;
