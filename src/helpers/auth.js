import * as Cookies from "js-cookie";

// TODO Move to constants file
const AUTHENTICATING_KEY = "AUTHENTICATING";
const SESSION_KEY = "SESSION";

const startAuthentication = () =>
  sessionStorage.setItem(AUTHENTICATING_KEY, "true");

const completeAuthentication = () =>
  sessionStorage.removeItem(AUTHENTICATING_KEY);

const isAuthenticating = () =>
  sessionStorage.getItem(AUTHENTICATING_KEY) === "true";

const removeSessionCookie = () => {
  Cookies.remove(SESSION_KEY);
};

const setSessionCookie = session => {
  removeSessionCookie();
  Cookies.set(SESSION_KEY, session, { expires: 14 });
};

const getSessionCookie = () => {
  const sessionCookie = Cookies.get(SESSION_KEY);

  return sessionCookie === undefined ? undefined : JSON.parse(sessionCookie);
};

export {
  startAuthentication,
  completeAuthentication,
  isAuthenticating,
  removeSessionCookie,
  setSessionCookie,
  getSessionCookie
};
