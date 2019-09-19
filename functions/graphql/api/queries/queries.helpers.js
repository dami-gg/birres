const getApiRequestOptions = ({ method = "get", body, context = {} }) => ({
  method,
  credentials: "same-origin",
  body: body && JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
    authorization: context.token
  }
});

module.exports = {
  getApiRequestOptions
};
