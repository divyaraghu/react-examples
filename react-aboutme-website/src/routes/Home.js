import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char = props.type === "next" ? "next" : "prev";
  return (
    <button className={className} onClick={props.onClick}>
      {props.type === "next" ? <ArrowForwardIosIcon/> : <ArrowBackIosIcon/>}
    </button>
  );
}

function customPaging(i) {
  return <span>{i + 1}</span>;
}

function appendDots(dots) {
  return (
    <> </>
  );
}

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };

  return (
    <div className="home section-container">
       <div className="intro">
            I am lead java developer with experience in Java and various J2EE technologies. I have ample experience in front end technologies as well. I've worked on Enterprise level Web Content Management systems such as Liferay, Crafter and Content Management Systems such as Alfresco. I've led multiple enterprise level applications for various clients across various domains. 
        </div>
        <div className="heading_section">
          <h2 className="section_title">Projects I've worked on</h2>
        </div>
      <Slider {...settings}
       nextArrow={<Arrow type="next" />}
       prevArrow={<Arrow type="prev" />}
       dots={false}
       customPaging={customPaging}
       appendDots={appendDots}
      >
           <div>
             <h3>Project 1 for a Content Management Client </h3>
             <div className="project-desc">Developed a partner portal for Client by customizing the Web content management system called Liferay.
             Added integrations to Salesforce for Partner Deal management. Added API integrations to Meridian for Training management within the partner portal. Also configured SSO for seamless user experirence from transfering from the Partner Portal to Meridian Training sites. 
             </div>
          </div>
          <div>
            <h3>Project 2 - for a Hospitality Client </h3>
            <div className="project-desc">Client had an Application that is used for hosting various blueprints, new project details, existing project renovations of the client. Its a one stop portal used by business consultants, Client Owners and Users across the globe.
            I worked on porting application from an external server to AWS EC2 Instances. Transfered the existing MySQL database to RDS using Database Migration System. I did AWS certification prior to working on this project.
            Wrote Ansible scripts for installation of Content Management application across QA and PROD nodes. Transfered Solr indexes from existing system to new Solr instances.
            Working on this project was a real challenge given the complexity and volume of the system.
            </div>
          </div>
          <div>
            <h3>Project 3  - User Portal for a State Client</h3>
            <div className="project-desc">
               Worked on a State project used by State service workers. Customized the portal using Liferay and JSF. Working on this project was a real challenge due to usage of good old JSF code in existing code and minimum amount of support from Liferay for JSF portlets. Faced and resolved many issues while working on this project including performance issues. 
            </div>
          </div>
          <div>
            <h3>Project 4 - Claims Portal for an Insurance client  </h3>
            <div className="project-desc">
              Worked on a Claims system for an insurance client
            </div>
          </div>
          <div>
            <h3>Project 5 - Enterprise Content Management Application upgrade for an Investment Client</h3>
            <div className="project-desc">
              Worked on upgrading an Enterprise Content Management Application to latest version for an investment client
            </div>
          </div>
          <div>
          <h3>Project 6 - Employee Intranet for an Australian client </h3>
          <div className="project-desc">
            Worked on employee Intranet portal using web content management system for an Australian client.
          </div>
          </div>
      </Slider>
    </div>
  );
}
