import React from "react";
import "./Figma.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./image 1.png";
import logo1 from "./Vector.png";
import logo2 from "./Vector (1).png";
import fsrt from "./first.png"
import second from "./secnd.png"
import third from "./thrd.png";
import forth from "./forth.png";
import five from "./five.png";


const Figma = () => {
  const navigate = useNavigate();

  const handleclick = ()=>{
    navigate("/mobile");
  }
  return (
    <div className="main_con">
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

      {/* second part */}
      <div className="main_part3">
        <p>UI/UX {">"} Refer & Earn </p>
      </div>

      {/* third_part */}

      <div className="third_part">
        <div>
          <div className="third_part0">
            <div>
              <p>Referral Earning</p>
              <p>₹ 2,500</p>
            </div>
            <div>
              <p>Total Referrals</p>
              <p>7</p>
            </div>
            <div>
              <p>Wallet Balance</p>
              <p>₹ 500</p>
            </div>
          </div>
          <div className="third_part_1">
            <p>Withdraw Balance</p>
          </div>
        </div>

        <div className="third_part1">
          <p>Your Referral Code </p>
          <div className="third_part2">
            <p>EDCH54</p>
          </div>
        </div>
      </div>

      {/* forth part here  */}

      <div className="forth">
        <p className="how">How does it work ?</p>
        <div className="forth_part">
          <div className="forth_part1">
            <div className="elip1">
              <img src={fsrt} />
            </div>
            <div className="forthp">
              <h4>Invite your Friends</h4>
              <p>Share the link tutedude.com with your friends</p>
            </div>
          </div>

          <div className="forth_part1">
            <div className="elip2">
              <img src={second} />
            </div>
            <div className="forthp">
              <h4>Invite your Friends</h4>
              <p>Share the link tutedude.com with your friends</p>
            </div>
          </div>

          <div className="forth_part1">
            <div className="elip3">
              <img src={third} />
            </div>
            <div className="forthp">
              <h4>Invite your Friends</h4>
              <p>Share the link tutedude.com with your friends</p>
            </div>
          </div>
          <div className="forth_part1">
            <div className="elip4">
              <img src={forth} />
            </div>
            <div className="forthp">
              <h4>Invite your Friends</h4>
              <p>Share the link tutedude.com with your friends</p>
            </div>
          </div>
          <div className="forth_part1">
            <div className="elip5">
              <img src={five} />
            </div>
            <div className="forthp">
              <h4>Invite your Friends</h4>
              <p>Share the link tutedude.com with your friends</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="footer" onClick={handleclick}>Friends Who Enrolled</h3>
      <h3 className="footer foo1">Terms & Conditions</h3>
    </div>
  );
};

export default Figma;
