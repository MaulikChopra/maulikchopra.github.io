import Tilt from "react-parallax-tilt";

import TechGauntlet from "../../Assets/my-tech-gauntlet-stonesV2.png";
import gauntletmini from "../../Assets/gauntlet-mini.png";
import Technologies from "../../Assets/Technologies.png";

function SkillList() {
  return (
    <>
      <h2 id="skills">
        <h1 className="text-textColor font-bold md:text-5xl text-4xl text-center mt-4 mb-8">
          Skills
        </h1>
      </h2>
      <Tilt>
        <img
          src={Technologies}
          className="img-fluid"
          alt="technologies"
          style={{ borderRadius: "15px" }}
        />
      </Tilt>
    </>
  );
}
function SkillGauntlet() {
  return (
    <>
      <h3
        style={{
          marginTop: "1rem",
        }}
      >
        My <b className="secondary-color-heading">Tech</b> Gauntlet
        <img src={gauntletmini} style={{ width: "10%" }} alt="gauntlet mini" />
      </h3>
      <Tilt>
        <span>
          <img
            src={TechGauntlet}
            style={{
              width: "100%",
              marginBottom: "1rem",
              borderRadius: "10px",
            }}
            alt="techGauntlet"
          ></img>
        </span>
      </Tilt>
    </>
  );
}

export { SkillList, SkillGauntlet };
