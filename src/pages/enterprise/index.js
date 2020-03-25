import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { RingSpinner } from "react-spinners-kit";
import Navbar from "../../components/enterprise-2020/containers/navbar";
import Banner from "../../components/enterprise-2020/containers/banner";
import Service from "../../components/enterprise-2020/containers/service";
import About from "../../components/enterprise-2020/containers/about";
import Blog from "../../components/enterprise-2020/containers/blog";
import Video from "../../components/enterprise-2020/containers/video";
import Skills from "../../components/enterprise-2020/containers/skills";
import Project from "../../components/enterprise-2020/containers/project";
import Portfolio from "../../components/enterprise-2020/containers/portfolio";
import Testimonial from "../../components/enterprise-2020/containers/testimonial";
import Contact from "../../components/enterprise-2020/containers/contact";
import Brand from "../../components/enterprise-2020/containers/brands";
import Footer from "../../components/enterprise-2020/containers/footer";
import CopyRight from "../../components/enterprise-2020/containers/copyright_text";
import ThemeColor from "../../components/enterprise-2020/containers/themecolor";
import ThemeOption from "../../components/enterprise-2020/containers/themeoptions";
import "../../assets/enterprise-2020/scss/style.scss";

const IndexPage = () => {
  return (
    <div className="main-wrapper">
      <Navbar/>
      <div id="main-content">
        <Banner ChangeClass={"demo1"}/>
        <Service/>
        <About/>
        <Blog/>
        <Video/>
        <Skills/>
        <Project/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Brand/>
        <Footer/>
        <CopyRight/>
        <ThemeColor/>
        <ThemeOption/>
      </div>
    </div>);
  // <div className="theme-loader">
  //   <RingSpinner size={80} color="#e100ff" loading={!loader} />
  // </div>
};

export default IndexPage;
