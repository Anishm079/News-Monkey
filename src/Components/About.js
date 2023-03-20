import React, { Component } from 'react'

export default class About extends Component {
  render() {
    let styles = {
        backgroundColor: this.props.theme === "dark" ? "#2c2b2b" : "#eeeeee",
        color: this.props.theme === "dark" ? "white" : "black"
      };
    return (
        <div className="gapmake">
        <div className="container mt-lg-5" style={styles}>
          <div className="accordion mt-lg-5 pb-4" id="accordionExample">
            <h2 style={{ padding: "20px" }}>Frequently Asked Questions</h2>
            <div className="accordion-item" style={styles}>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={styles}
                >
                  Who are we?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Hello, This is the Anishahammad Mulla</strong> .The
                  developer of this page I developed this page to get latest information from around the world and to take a quick look on it
                </div>
              </div>
            </div>
            <div className="accordion-item" style={styles}>
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={styles}
                >
                  What is this app?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the newsMonkey app.</strong>It get's you the latest news from famous publishers or you can have quick look on trending News
                  . Features:-
                  1)Quick Look at trending News from famous publishers    2)News about Sports , Business , Science etc..    3)onClick redirect to the original auther page
                </div>
              </div>
            </div>
            <div className="accordion-item" style={styles}>
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={styles}
                >
                  What are the Tech Stacks Used ?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Techs used are:- React , Bootstrap , External API usage</strong> 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
  }
}