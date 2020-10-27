import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";
import { setContext } from "apollo-link-context";

export const API_URL =
  process.env.REACT_APP_PUBLIC_URL_STRAPI_BE || "http://localhost:1337";

const configureHttp = new HttpLink({
  uri: `${API_URL}/graphql`,
  /* opts: {
    credentials: "include",
  }, **/
});

const configureAuth = setContext((_, prevContext) => ({
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAzNzM4NjU4LCJleHAiOjE2MDYzMzA2NTh9.4KiaJMjH2VPAa8FTrnj9vw3bLJWX1IUz3hjGtInM7ck",
  },
})).concat(configureHttp);

const configure = { link: configureAuth };

export default withData(configure);
