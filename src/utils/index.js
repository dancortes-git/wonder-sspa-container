/* eslint-disable no-console */
const USER_STORAGE_KEY = "user";
const USER_SIGN_IN_EVENT = "userSignedIn";
const USER_SIGN_OUT_EVENT = "userSignedOut";

export const getUser = () => {
  //console.log("Getting user from localstorage...");
  const usr = localStorage.getItem(USER_STORAGE_KEY);
  //console.log("User retrieved from localstorage.", usr);
  if (usr) {
    try {
      return JSON.parse(usr);
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};

export const onSignIn = () => {
  // Fake user
  const defaultUser = {
    name: "User name",
    email: "user@email.com",
  };
  //console.log("Executing sign in with default user...");
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(defaultUser));
  dispatchEvent(USER_SIGN_IN_EVENT, defaultUser);
  //console.log("User successfully signed in.");
};

export const onSignOut = () => {
  //console.log("Executing sign out...");
  localStorage.removeItem(USER_STORAGE_KEY);
  dispatchEvent(USER_SIGN_OUT_EVENT);
  //console.log("User successfully signed out.");
};

export const dispatchEvent = (eventName, props = null) => {
  //console.log("Dispatching event:", eventName, "With props:", props);
  window.dispatchEvent(
    new CustomEvent(eventName, {
      detail: props,
    })
  );
  //console.log("Event:", eventName, "Successfully dispatched.");
};

export const addEventListener = (eventName, callback) => {
  //console.log("Adding event listener:", eventName);
  window.addEventListener(eventName, (e) => callback && callback(e));
  //console.log("Event listener:", eventName, "Successfully added.");
};

export const removeEventListener = (eventName, callback) => {
  //console.log("Removing event listener:", eventName);
  window.removeEventListener(eventName, (e) => callback && callback(e));
  //console.log("Event listener:", eventName, "Successfully removed.");
};

export const addSignInEventListener = (callback) => {
  addEventListener(USER_SIGN_IN_EVENT, callback);
};

export const removeSignInEventListener = (callback) => {
  removeEventListener(USER_SIGN_IN_EVENT, callback);
};

export const addSignOutEventListener = (callback) => {
  addEventListener(USER_SIGN_OUT_EVENT, callback);
};

export const removeSignOutEventListener = (callback) => {
  removeEventListener(USER_SIGN_OUT_EVENT, callback);
};
