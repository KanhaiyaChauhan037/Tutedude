import React from "react";
import logo from "./image 1.png";
import logo1 from "./Vector.png";
import logo2 from "./Vector (1).png";
import "./Mobile.css";
const Mobile = () => {
  return (
    <div className="main">
      <div className="main_part1">
        <div className="imgurl">
          <img src={logo} />
        </div>
        <div className="main_part2">
          <p>My Assignment</p>
          <p>Chat with Mentor</p>
          <div className="right_logo">
            <img src={logo1} />
            <p>ProfileName</p>
            <img src={logo2} />
          </div>
        </div>
      </div>

      <div className="main_part3">
        <p>
          UI/UX {">"} Refer & Earn {">"} Friends Referred{" "}
        </p>
      </div>

      <div className="reff1">
        <div className="reff2">
          <p>Your Referral Code </p>
          <div className="reff_1">
            <h4>EDCH54</h4>
          </div>
        </div>
        <div className="reff3">
          <p>Wallet Balance</p>
          <h4>₹ 500</h4>
        </div>
      </div>

      <div className="reff_41">
        <h3 className="frnd">Friends who enrolled(3)</h3>
        <div className="reff4">

          <div className="elip1">
            <div className="flex1">
              <h4>Dhiraj Saxsena</h4>
              <p>14 Sep, 2022</p>
            </div>

            <p className="sing">Courses Enrolled(6)</p>
            <div className="flex2">
              <div className="colort">
                <p>UI/UX</p>
              </div>
              <div className="colort1">
                <p>Photoshop</p>
              </div>
              <div className="colort2">
                <p>Illustrator</p>
              </div>
              <div className="colort3">
                <p>Python</p>
              </div>
              <div className="colort4">
                <p>MERN</p>
              </div>
              <div className="colort5">
                <p>JAVA</p>
              </div>
            </div>
            <div className="flex3">
              <p>Referral Amount </p>
              <h3>₹185</h3>
            </div>
          </div>

          
          <div className="reff4 ">  <div className="elip1">
            <div className="flex1">
              <h4>Subhash Mishra</h4>
              <p>15 Sep, 2022</p>
            </div>

            <p className="sing">Courses Enrolled(23)</p>
            <div className="flex2">
              <div className="colort">
                <p>UI/UX</p>
              </div>
              <div className="colort1">
                <p>Photoshop</p>
              </div>
              <div className="colort2">
                <p>Illustrator</p>
              </div>
              <div className="colort3">
                <p>Python</p>
              </div>
              <div className="colort4">
                <p>MERN</p>
              </div>
              <div className="colort5">
                <p>JAVA</p>
              </div>
              <div className="colort6">
                <p>C++</p>
              </div>
            </div>
            <div className="flex3">
              <p>Referral Amount </p>
              <h3>₹485</h3>
            </div>
          </div>
          
          </div>
         <div className="reff4 reff5">  <div className="elip1">
            <div className="flex1">
              <h4>Prafull Kumar</h4>
              <p>16 Sep, 2022</p>
            </div>

            <p className="sing">Courses Enrolled(6)</p>
            <div className="flex2">
              <div className="colort">
                <p>UI/UX</p>
              </div>
              <div className="colort1">
                <p>Photoshop</p>
              </div>
              <div className="colort2">
                <p>Illustrator</p>
              </div>
              <div className="colort3">
                <p>Python</p>
              </div>
              <div className="colort4">
                <p>MERN</p>
              </div>
              <div className="colort5">
                <p>JAVA</p>
              </div>
              <div className="colort6">
                <p>C++</p>
              </div>
            </div>
            <div className="flex3">
              <p>Referral Amount </p>
              <h3>₹185</h3>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      <h3 className="terms">Terms & Conditions</h3>
      {/* last */}
    </div>
  );
};

export default Mobile;
