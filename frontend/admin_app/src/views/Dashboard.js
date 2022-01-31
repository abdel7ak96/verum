import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MaterialLink from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems } from "./listItems";
import SimpleLineChart from "./components/SimpleLineChart";
import Logs from "./Logs";
import CreationForm from "./components/CreationForm";

import CandidateCard from "./components/CandidateCard";
import SimplePieChart from "./components/SimplePieChart";

import Web3 from 'web3';
import contractConfig from "../config";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink color="inherit" href="https://material-ui.com/">
        Verum Voting Platform
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const [candidates, setCandidates] = React.useState(null);
  const [total, setTotal] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const loadBlockchainData =  async () => {
    const web3 = new Web3("http://localhost:8545");
    const contract = await new web3.eth.Contract(contractConfig.VOTING_CONTRACT_ABI, contractConfig.VOTING_CONTRACT_ADDRESS);
    let candidates = [];
    let total = 0;
    for(let i=0; i<4; i++) {
      let candidate = await contract.methods.candidates(i).call();
      candidates.push(candidate);
      total = total + parseInt(candidate.voteCount);
    }
    setCandidates(candidates);
    setTotal(total);
  }

  useEffect(() => {
    loadBlockchainData();
  }, [candidates]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        {/* ---- App Bar ----- */}
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* ---- App Bar ----- */}

        {/* ---- Drawer ----- */}
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        {/* ---- Drawer ----- */}

        {/* ---- Main conatiner ----- */}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>

              <Route exact path="/">
                <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <CandidateCard name={candidates === null ? [] : candidates[0].name} voteCount={candidates === null ? 0 : candidates[0].voteCount} percentage={candidates === null ? 0 : (candidates[0].voteCount * 100) / total}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <CandidateCard name={candidates === null ? [] : candidates[1].name} voteCount={candidates === null ? 0 : candidates[1].voteCount} percentage={candidates === null ? 0 : (candidates[1].voteCount * 100) / total}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <CandidateCard name={candidates === null ? [] : candidates[2].name} voteCount={candidates === null ? 0 : candidates[2].voteCount} percentage={candidates === null ? 0 : (candidates[2].voteCount * 100) / total}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <CandidateCard name={candidates === null ? [] : candidates[3].name} voteCount={candidates === null ? 0 : candidates[3].voteCount} percentage={candidates === null ? 0 : (candidates[3].voteCount * 100) / total}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={8}>
                    <Paper className={fixedHeightPaper}>
                      <SimpleLineChart />
                    </Paper>
                  </Grid>
                  {/* <Grid item xs={4}>
                    <Paper className={fixedHeightPaper}>
                      <SimplePieChart data={
                        [
                          { name: candidates === null ? "?" : candidates[0].name, value: candidates === null ? 10 : candidates[0].voteCount},
                          { name: candidates === null ? "?" : candidates[1].name, value: candidates === null ? 30 : candidates[1].voteCount},
                          { name: candidates === null ? "?" : candidates[2].name, value: candidates === null ? 40 : candidates[2].voteCount},
                          { name: candidates === null ? "?" : candidates[3].name, value: candidates === null ? 50 : candidates[3].voteCount},
                        ]
                      } />
                    </Paper>
                  </Grid> */}
                </Grid>
              </Route>

              <Route exact path="/create">
                <Grid container spacing={3}>
                  {/* Event creation tab */}
                  <Grid item lg={8}>
                    <Paper className={classes.paper}>
                      <CreationForm />
                    </Paper>
                  </Grid>
                </Grid>
              </Route>

              <Route exact path="/logs">
                <Grid container spacing={3}>
                  {/* Recent Deposits */}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Logs />
                    </Paper>
                  </Grid>
                </Grid>
              </Route>

              <Route exact path="/about">
                <Grid container spacing={3}>
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <h1>About</h1>
                    </Paper>
                  </Grid>
                </Grid>
              </Route>
            </Switch>

            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
          {/* ---- Main conatiner ----- */}
        </main>
      </Router>
    </div>
  );
}
