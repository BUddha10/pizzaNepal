import React from "react";
import "./Body.css";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import bodyImg from "./images/header_background.jpg";

function body() {
  return (
    <div className="body">
      <div className="body_header">
        <p>Hot & fresh local business</p>
      </div>

      <div className="body_items">
        {/* FIRST CART */}
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
              <p className="third_text">
                <div className="review">Be the first to review</div>
              </p>
            </div>
            <div className="item_middleRight">
              <div className="middle_top">
                <AccessTimeOutlinedIcon />
                closed
              </div>
              <div className="middle_button">
                <LocationOnOutlinedIcon />
                Seattle
              </div>
            </div>
          </div>
          <div className="item_button">
            <div className="button_left">
              <MapOutlinedIcon />
              Show map
            </div>
            <div className="button_right">
              <PhoneOutlinedIcon />
              Call
            </div>
          </div>
        </div>

        {/* SECOND CART */}
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
              <p className="third_text">
                <div className="review">Be the first to review</div>
              </p>
            </div>
            <div className="item_middleRight">
              <div className="middle_top">
                <AccessTimeOutlinedIcon />
                closed
              </div>
              <div className="middle_button">
                <LocationOnOutlinedIcon />
                Seattle
              </div>
            </div>
          </div>
          <div className="item_button">
            <div className="button_left">
              <MapOutlinedIcon />
              Show map
            </div>
            <div className="button_right">
              <PhoneOutlinedIcon />
              Call
            </div>
          </div>
        </div>

        {/* THIRD CART */}
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
              <p className="third_text">
                <div className="review">Be the first to review</div>
              </p>
            </div>
            <div className="item_middleRight">
              <div className="middle_top">
                <AccessTimeOutlinedIcon />
                closed
              </div>
              <div className="middle_button">
                <LocationOnOutlinedIcon />
                Seattle
              </div>
            </div>
          </div>
          <div className="item_button">
            <div className="button_left">
              <MapOutlinedIcon />
              Show map
            </div>
            <div className="button_right">
              <PhoneOutlinedIcon />
              Call
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default body;
