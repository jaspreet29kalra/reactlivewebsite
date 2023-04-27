import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/Style.css";

export default class Navbar extends Component {
  //   constructor() {
  //     super()
  //     this.state = {
  //         search: ""
  //     }
  // }   //iski need hi ni h
  changeSearch(e) {
    // this.setState({ search: e.target.value }) //iski bhi kaam ni hora tha isse
    // console.log(this.state.search);

    this.props.changeSearch(e.target.value);
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  background fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="#">
              NewsWeb
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/"
                  >
                    All
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu text-light">
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/Politics"
                      >
                        Politics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/Crime"
                      >
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/Technology"
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/Science"
                      >
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/Education"
                      >
                        Education
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/Sports"
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/IPL"
                      >
                        IPL
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/Covid19"
                      >
                        Covid-19
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeSearch("None");
                          document.getElementById("search").value = "";
                        }}
                        to="/Jokes"
                      >
                        Jokes
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex w-100" role="search">
                <input
                  className="form-control me-2"
                  type="text"
                  id="search"
                  name="search"
                  onChange={(e) => this.changeSearch(e)}
                  placeholder="Search News By typing Some Thing"
                />
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="#"
                  >
                    All
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-light"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </Link>
                  <ul className="dropdown-menu text-light">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeLanguage("hi");
                        }}
                      >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          this.props.changeLanguage("en");
                        }}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <br />
      </>
    );
  }
}
