import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Nav, NavItem, Container } from "reactstrap";
// import logo from "../logo.svg";

export function Layout(props) {
  const layoutTemplate = (
    <>
      {false && (
        <>
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <main></main>
          <footer></footer>
        </>
      )}{" "}
      {true && (
        <>
          <Nav className="navbar navbar-dark bg-dark">
            <NavItem>
              <Link href="/">
                <a className="navbar-link">
                  Home {/*<img src={logo} className="App-logo" alt="logo" />*/}
                </a>
              </Link>
            </NavItem>

            <NavItem className="ml-auto p-1">
              <Link href="/login">
                <a className="navbar-link">Login</a>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/register">
                <a className="navbar-link">Register</a>
              </Link>
            </NavItem>
          </Nav>
          <Container>{props.children}</Container>
        </>
      )}
    </>
  );
  const title = "Welcome to Next.js";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      {layoutTemplate}
    </>
  );
}
