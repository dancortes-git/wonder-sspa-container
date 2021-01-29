import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import {
  getUser,
  onSignIn,
  onSignOut,
  dispatchEvent,
  addEventListener,
  removeEventListener,
  addSignInEventListener,
  removeSignInEventListener,
  addSignOutEventListener,
  removeSignOutEventListener,
} from "./utils";

const data = {
  props: {
    getUser,
    onSignIn,
    onSignOut,
    dispatchEvent,
    addEventListener,
    removeEventListener,
    addSignInEventListener,
    removeSignInEventListener,
    addSignOutEventListener,
    removeSignOutEventListener,
  },
};

const routes = constructRoutes(
  document.querySelector("#single-spa-layout"),
  data
);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

start();

/*
registerApplication({
  name: "@rd/wonder-sspa-customer",
  app: () => System.import("@rd/wonder-sspa-customer"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@rd/wonder-sspa-legal",
  app: () => System.import("@rd/wonder-sspa-legal"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@rd/wonder-sspa-marketing",
  app: () => System.import("@rd/wonder-sspa-marketing"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@rd/wonder-sspa-purchase",
  app: () => System.import("@rd/wonder-sspa-purchase"),
  activeWhen: ["/auth"],
});

registerApplication({
  name: "@rd/wonder-sspa-product",
  app: () => System.import("@rd/wonder-sspa-product"),
  activeWhen: ["/app"],
});

start({
  urlRerouteOnly: true,
});
*/
