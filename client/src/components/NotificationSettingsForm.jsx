import React, { useState } from "react";

const NotificationSettingsForm = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [notificationTime, setNotificationTime] = useState("9:00AM");

  const handleEmailChange = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handlePushChange = () => {
    setPushNotifications(!pushNotifications);
  };

  const handleTimeChange = (event) => {
    setNotificationTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Notification settings submitted:", {
      emailNotifications,
      pushNotifications,
      notificationTime,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Notification Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={handleEmailChange}
        />
        Receive email notifications
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={pushNotifications}
          onChange={handlePushChange}
        />
        Receive push notifications
      </label>
      <br />
      <label>
        Notify me at:
        <input
          type="time"
          value={notificationTime}
          onChange={handleTimeChange}
        />
      </label>
      <br />
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default NotificationSettingsForm;
