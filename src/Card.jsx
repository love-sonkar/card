import React from "react";
import "./card.css";
import { FiStar } from "react-icons/fi";
import { ContentList } from "./ContentList";

const Botton = (props) => {
  return <button className="button">{props.children}</button>;
};

const Lable = ({ icon, text }) => {
  return (
    <div className="lable">
      <i>{icon}</i>
      <p>{text}</p>
    </div>
  );
};

const Card = ({ OldPrice, NewPrice, Labled }) => {
  return (
    <div className="card__container">
      <div className="card flex ">
        {Labled && <Lable icon={<FiStar />} text="RECOMMENDED" />}
        <div className="img">
          <img src="./professional.webp" alt="professional" />
        </div>
        <div className="content">
          <h2>Devloper Marketing Mastery</h2>
          <ul>
            {ContentList?.map((item) => {
              return (
                <div key={item.title} className="flex list">
                  <i style={{ marginTop: "3px" }}>{item?.icon}</i>
                  <p>{item?.title}</p>
                </div>
              );
            })}
          </ul>
          <div className="price">
            <span className="spanOldPrice">
              ₹{OldPrice}
              <p className="line_cut" />
            </span>
            -₹{NewPrice}
          </div>
        </div>

        <Botton>Click For Enroll</Botton>
      </div>
    </div>
  );
};

export default Card;
