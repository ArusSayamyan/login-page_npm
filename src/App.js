import bear from "./imgs/npmBear.png";
// import Input from "./components/input/Input.component";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("text");
  };

  handleChange = (event) => {
    //? INPUTVALUE
    const searchValue = event.target.value;
    console.log(searchValue);
    //? SET INPUT VALUE TO STATE
    this.setState({ search: searchValue });
  };

  render() {
    return (
      <div className="app">
        <svg viewBox="0 0 780 250">
          <path
            fill="#231F20"
            d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
          ></path>
        </svg>
        <form className="app__form" onSubmit={this.handleSubmit}>
          <img src={bear} className="app__image" alt="npm_bear" />
          <h1 className="app__title">Sign In</h1>
          <div className="form__group">
            <label className="form__label">Username</label>
            <input
              className="form__input"
              type="text"
              onChange={(event) => this.handleChange(event)}
              value={this.state.search}
              name="search"
            />
          </div>
          <div className="form__group">
            <span>Password</span>
            <a href="https://www.npmjs.com/" className="form__link">
              Forgot password?
            </a>
            <input
              className="form__input"
              type="password"
              name="search"
            />
           
          </div>

          <button type="submit" className="form__button">
            Sign In
          </button>
          <a href="https://www.npmjs.com/" className="form__link--center">
            Create Account
          </a>
        </form>
      </div>
    );
  }
}

export default App;
