import React from "react";
import myphoto from "./walid.jpg";

function ProfilePhoto() {
  return (
    <div className="profile-photo">
      <img src={myphoto} alt="walid" />
    </div>
  );
}

export default ProfilePhoto;