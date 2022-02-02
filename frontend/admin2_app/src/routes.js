import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Overview from "./views/Overview";
import About from "./views/About";
import AddNewEvent from "./views/AddNewEvent";
import Logs from "./views/Logs";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/overview" />
  },
  {
    path: "/overview",
    layout: DefaultLayout,
    component: Overview
  },
  {
    path: "/about",
    layout: DefaultLayout,
    component: About
  },
  {
    path: "/add-new-event",
    layout: DefaultLayout,
    component: AddNewEvent
  },
  {
    path: "/logs",
    layout: DefaultLayout,
    component: Logs
  }
];
