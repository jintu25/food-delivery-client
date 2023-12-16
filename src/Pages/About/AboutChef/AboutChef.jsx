import React from "react";
import chef1 from "../../../assets/about/team_2_2.jpg";
import chef2 from "../../../assets/about/team_2_3.jpg";
import chef3 from "../../../assets/about/team_2_4.jpg";
import chef4 from "../../../assets/about/team_2_5.jpg";
const AboutChef = () => {
  return (
    <div className="m-auto max-w-screen-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 lg:mx-0">
        <div>
          <div className="team-img">
            <img src={chef1} alt="" />
          </div>
          <div>
            <h2>chef chef</h2>
            <div>
                <h2>David Latham</h2>
                <ul>
                    
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChef;
