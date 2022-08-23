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
            I am Divyapriya. I am lead java developer in RivetLogic Inc (Acquired by Capgemini) with experience in Java and various J2EE technologies. I have ample experience in front end technologies as well. I am currently leading a team of engineers in development of an Enterprise Web Content Management system.  I've lead multiple enterprise level applications for various clients. 
        </div>
        <div className="heading_section">
          <h2 className="section_title">Projects I've led</h2>
        </div>
      <Slider {...settings}
       nextArrow={<Arrow type="next" />}
       prevArrow={<Arrow type="prev" />}
       dots={false}
       customPaging={customPaging}
       appendDots={appendDots}
      >
           <div>
             <h3>Dropbox partner Portal </h3>
             <div className="project-desc">Developed a partner portal for Dropbox by customizing the Web content management system called Liferay.
             Added integrations to Salesforce for Partner Deal management. Added API integrations to Meridian for Training management within the partner portal. Also configured SSO for seamless user experirence from transfering from Dropbox Partner Portal to Meridian Training sites. 
             Worked on this project for about a year from 2016 to 2017.</div>
          </div>
          <div>
            <h3>Marriott International - LOBO </h3>
            <div className="project-desc">LOBO/Global Design is an Application that is used for hosting various blueprints, new project details, existing project renovations of Marriott. Its a one stop portal used by business consultants, Marriott Owners and Users across the globe.
            I worked on porting the Marriott LOBO Application from IBM SoftLayer to AWS EC2 Instances. Transfered the existing MySQL database to RDS using Database Migration System. I did AWS certification prior to working on this project.
            Wrote Ansible scripts for installation of Alfresco application across QA and PROD nodes. Transfered Solr indexes from existing system to new Alfresco Solr instances.
            Working on this project was a real challenge given the complexity and volume of the system. Worked on this project for about three years from 2018 to 2020.
            </div>
          </div>
          <div>
            <h3>NewYork State - Financial Services</h3>
            <div className="project-desc">
               Worked on NYS - Financial Services portal used by NYS business users. Customized the portal using Liferay and JSF. Working on this project was a real challenge due to usage of good old JSF code in existing code and minimum amount of support from Liferay for JSF portlets. Faced and resolved many issues while working on this project including performance issues. 
            </div>
          </div>
          <div>
            <h3>Noridian </h3>
            <div className="project-desc">
              Noridian - Blue Cross Blue shield of North Dakota
            </div>
          </div>
          <div>
            <h3>TRowe Price </h3>
            <div className="project-desc">
              TRowe Price - Alfresco upgrade
            </div>
          </div>
          <div>
          <h3>NuFarm </h3>
          <div className="project-desc">
            NuFarm - Employee Intranet
          </div>
          </div>
      </Slider>
    </div>
  );
}