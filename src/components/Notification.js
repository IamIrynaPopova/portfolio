import React from "react";

const Notification = ({ message, onNotification }) => {
  return (
    <div className="notification" onClick={onNotification}>
      <div className="notification__wrapper">
        <p className="notification__text">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
