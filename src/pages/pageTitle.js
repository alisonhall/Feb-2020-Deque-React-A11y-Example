import React, { Component } from "react";
import DocumentTitle from "react-document-title";
class PageTitle extends Component {
  render() {
    return (
      <DocumentTitle title="Title Fixes Page">
        <div>
          <h1>Page Title Fixes</h1>
          <br />
          <h2>React-Document-Title</h2>
          <p>
            Provides a declarative way to specify document.title in a
            single-page app. This component can be used on server side as well.
          </p>
          <a href="https://github.com/gaearon/react-document-title">
            React Document Title Documentation
          </a>
          <br />
          <br />
          <h2>After Component Mounts</h2>
          <p>
            You can set the document title after the component has rendered
            using <b>document.title.</b>
          </p>
          <br />
          <h2>React Helmet</h2>
          <p>
            This reusable React component will manage all of your changes to the
            document head. You can use this as well to set your title of your
            page as well.
          </p>
          <a href="https://github.com/nfl/react-helmet">
            React Helmet Documentation
          </a>
        </div>
      </DocumentTitle>
    );
  }

  componentDidMount() {
    document.title = "Mark is awesome";
  }
}
export default PageTitle;
