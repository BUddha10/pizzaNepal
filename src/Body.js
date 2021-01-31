import React from "react";
import "./Body.css";
import bodyImg from "./images/header_background.jpg";

function body() {
  return (
    <div className="body">
      <div className="body_header">
        <p>Hot & fresh local business</p>
      </div>

      <div className="body_items">
        <div className="body_item">
          <div
            className="item_top"
            style={{
              backgroundImage: `url(${bodyImg})`,
            }}
          ></div>
          <div className="item_middle">
            <div className="item_middleLeft">
              <p className="first_text">Japonessa</p>
              <p className="second_text">Japenese sushi bar</p>
              <p className="third_text">Be the first to review</p>
            </div>
            <div className="item_middleRight">
              <div className="middle_top">closed</div>
              <div className="middle_button">Seattle</div>
            </div>
          </div>
          <div className="item_button"></div>
        </div>
      </div>
    </div>
  );
}

export default body;
