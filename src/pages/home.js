import React from "react";

const home = () => (
  <div>
    <h1>Example A11y React Application</h1>
    <p>
      This application is used to help guide and teach React users how to create
      accessible applications that can be used by all users.
    </p>
    <p>
      React has always been very conscious of accessibility, but unfortunately
      gets a bad reputation in the accessibility community because it falls
      under a Single-Page Application. Single-page applications have always had
      their issues when it comes to accessibility. Initially created to speed up
      websites, single-page apps put more work on the client as opposed to
      relying on the usual server/response method.
    </p>
    <p>
      Typically loaded in a single-page frame (body), any changes within the
      page or between pages are ‘injected’ onto the page. As a single-page
      application framework, accessibility is supported very well compared to
      other application frameworks. The other added benefit within React is
      accessibility does not just work at a high level but also is much more
      fluid and detailed at a component level in React. Accessibility in React
      comes down to using the support and tools built into the framework itself
      and having an awareness of the issues that it can bring to the table from
      an accessibility standpoint.
    </p>
    <br />
    <p>React A11y Guidance: </p>
    <ul>
      <li>
        <a href="https://reactjs.org/docs/accessibility.html">
          React Accessibility Documentation
        </a>
      </li>
      <li>
        <a href="https://github.com/reactjs/react-a11y">React-A11y</a>
      </li>
      <li>
        <a href="https://github.com/dequelabs/react-axe">React-Axe</a>
      </li>
    </ul>
  </div>
);
export default home;
