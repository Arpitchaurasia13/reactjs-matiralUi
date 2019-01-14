import React, { Component, Fragment } from "react";
//import logo from './logo.svg';
//import './App.css';
import { Header, Footer } from "./Layouts/index";
import Exersises from "./Exersises";

import { muscles, exersises } from "../store";

class App extends Component {
  state = { exersises, exersise: {} };

  getExersiseByMuscles() {
    const initExersises = muscles.reduce(
      (exersises, category) => ({ ...exersises, [category]: [] }),
      {}
    );
    console.log(muscles, initExersises);

    return Object.entries(
      this.state.exersises.reduce((exersises, exersise) => {
        const { muscles } = exersise;

        exersises[muscles] = exersises[muscles]
          ? [...exersises[muscles], exersise]
          : [exersise];

        return exersises;
      }, initExersises)
    );
  }

  handleCategorySelect = category => {
    this.setState({ category });
  };

  handleExersiseSelect = id => {
    this.setState(({ exersises }) => ({
      exersise: exersises.find(ex => ex.id === id)
    }));
  };

  handleExersiseCreate = exersise => {
    this.setState(({ exersise }) => ({
      exersises: [...exersises, exersise]
    }));
  };

  handleCategoryDelete = id => {
    this.setState(({ exersises }) => ({
      exersises: exersises.filter(ex => ex.id !== id)
    }));
  };

  handleExersiseSelectEdit = id => {
    this.setState(({ exersises }) => ({}));
  };

  render() {
    const exersises = this.getExersiseByMuscles(),
      { category, exersise } = this.state;

    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExersiseCreate={this.handleExersiseCreate}
        />
        <Exersises
          exersise={exersise}
          category={category}
          exersises={exersises}
          onSelect={this.handleExersiseSelect}
          onDelete={this.handleCategoryDelete}
          onSelectEdit={this.handleExersiseSelectEdit}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

export default App;
