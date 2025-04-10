import React, {Component} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";
import Profile from "./profile/Profile";

export default class Main extends Component {
  constructor(props) {
    super(props);
    // Set isDark to false permanently
    this.state = {
      isDark: false
    };
  }

  // No need to check for dark mode preference or load from localStorage
  componentDidMount() {
    // Always use light mode
    localStorage.setItem("isDark", false);
  }

  // Keep this method but make it do nothing (for compatibility with StyleContext)
  changeTheme = () => {
    // Do nothing - we're keeping light mode only
  };

  render() {
    return (
      <div>
        <StyleProvider
          value={{isDark: false, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast />
          <Profile />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
