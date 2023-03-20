import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;

    return (
      <div className="my3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.moneycontrol.com/static-mcnews/2023/01/image-1-2-655x435.jpg"
            }
            style={{ height: "250px" }}
            className="card-img-top"
            alt="jjohn"
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 44) : ""}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 88) : ""}...
            </p>
            <span className="position-absolute text-center px-3 top-0 p bg-danger" style={{right:0,zIndex:1}}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl ? newsUrl : "/"}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
