export default () => ({
  request: {
    method: "GET",
    url: "https://httpbin.org",
    path: "/get",
    label: "",
    auth: "None",
    httpUser: "",
    httpPassword: "",
    passwordFieldType: "password",
    bearerToken: "",
    headers: [],
    params: [],
    bodyParams: [],
    rawParams: "",
    rawInput: false,
    requestType: "",
    contentType: ""
  },
  gql: {
    url: "https://rickandmortyapi.com/graphql",
    headers: [],
    variablesJSONString: "{}",
    query: ""
  },
  oauth2: {
    tokens: [],
    tokenReqs: [],
    tokenReqSelect: "",
    tokenReqName: "",
    accessTokenName: "",
    oidcDiscoveryUrl: "",
    authUrl: "",
    accessTokenUrl: "",
    clientId: "",
    scope: ""
  }
});
