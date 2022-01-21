import React, { Component } from "react";
import TutorialDataService from "./dataservice";

export default class Tutorial extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTutorial: {
          id: null,
          title: "",
          description: "",
          published: false
        },
        message: ""
      };
    }

getTutorial(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
}
