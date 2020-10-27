import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../lib/apollo";

const initState = {
  data: [],
  queryParam: "",
};

const reducers = (state = initState, actions) => {
  const { action, value } = actions;
  switch (action) {
    case "addData":
      return { ...state, data: value };
    case "addQueryParams":
      return { ...state, queryParam: value };
    default:
      return state;
  }
};

export function PageList() {
  const [state, dispatch] = useReducer(reducers, initState);

  async function fetchPage(options) {
    const params = {};
    const serializeParams = Object.entries(Object.assign({}, params, options))
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    console.log(serializeParams);
    const endpoint = await axios.get(`${API_URL}/pages`, {
      params: options,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAzNzM4NjU4LCJleHAiOjE2MDYzMzA2NTh9.4KiaJMjH2VPAa8FTrnj9vw3bLJWX1IUz3hjGtInM7ck",
      },
    });
    return await endpoint.data;
  }

  useEffect(() => {
    const options = {};
    if (state["queryParam"].length) {
      options["pagetitle_contains"] = state["queryParam"];
    }
    const pagePromise = fetchPage(options);
    pagePromise
      .then((res) => dispatch({ action: "addData", value: res }))
      .catch((e) => console.log(e));
  }, [dispatch, state["queryParam"]]);

  return (
    <>
      <p className="h5 text-center">Pages</p>
      <input
        type="search"
        onChange={({ currentTarget }) =>
          dispatch({ action: "addQueryParams", value: currentTarget["value"] })
        }
        value={state["queryParam"]}
        placeholder="ricerca..."
        className="form form-control text-capitalize w-5"
      />
      {React.Children.toArray(
        state["data"].map((page) => (
          <>
            <p className="h4">{page["pagetitle"]}</p>
            <img
              width={300}
              src={`${API_URL}${page["pagemedia"][0]["url"]}`}
              alt={page["pagetitle"]}
            />
          </>
        ))
      )}
    </>
  );
}
