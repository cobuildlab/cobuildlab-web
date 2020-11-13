import React, { Component } from 'react';
import { HeroHeader } from 'bloomer';
import Header from '../components/2020/Header/Header';
import '../assets/css/index.css';

class HeaderBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  onClickNav = () => {
    this.setState(({ isActive }) => ({
      isActive: !isActive,
    }));
  };
  render() {
    return (
      <HeroHeader>
        <Header />
      </HeroHeader>
    );
  }
}
export default HeaderBlog;
