//The Avatar function takes the following props that
//are destructured within the function parameter
//brackets;
// - src: Takes currentUser.profile_image from parent
// - height: takes size data from parent
// - text: To add a text next to profile image
import defaultUser from "../assets/userDefault.png";

const Avatar = ({ src, height = "10vw", text }) => {
  return (
    <span>
      <img
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src={src ? src : defaultUser}
        style={{ height: height, width: height }}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;
