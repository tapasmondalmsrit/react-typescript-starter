import Image1 from "./images/image1.jpg";
import Image2 from "./images/image2.svg";
export const Profile = () => {
  return (
    <div>
      <h2>Images</h2>
      <img src={Image1} alt="image1" style={{ width: "200px" }} />
      <img src={Image2} alt="image1" style={{ width: "200px" }} />
    </div>
  );
};
