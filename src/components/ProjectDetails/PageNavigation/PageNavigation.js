import React from 'react';
import './PageNavigation.css'
import { Link } from 'react-router-dom';
const PageNavigation = (props) => {
    return (
      <span className="pl-5 block paragraphs whitespace-nowrap ms-3 solaso my-30px max-w-[1200px] max-width">
        <Link to="/" className>
          <span className="hover:underline">Home</span> &gt;
        </Link>{" "}
        <Link to="/launchpad" className>
          <span className="hover:underline">Projects</span> &gt;
        </Link>{" "}
        <b className="mb-5 w-fit nuxt-link-active">{props.projectTitle}</b>
      </span>
    );
}

export default PageNavigation;
