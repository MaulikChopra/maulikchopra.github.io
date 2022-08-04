function Experience() {
  return (
    <>
      <h1 id="experience">
        My <span className="secondary-color-heading">Experience</span>
      </h1>
      <p style={{ textAlign: "left" }}>
        <h4>
          Founder @ <b className="secondary-color-heading">AssitCheck.org</b>
        </h4>
        <i>June 2021 - February 2022</i>
        <br />
        <span style={{ opacity: "0.75" }}>
          AssistCheck is a volunteer/task management application that helps
          small-scale institutions and nonprofits that cannot employ
          technologically literate employees and require User Interfaces in the
          local language.
        </span>
        <br />
        <ul>
          <li>
            Built native windows application using python Tkinter library.
            Ability to import .csv data using pandas and generate “task buttons”
            that are displayed in a simple UI with the local language.
          </li>
          <li>
            <b>Pitched</b> the idea to various institutes and partnered with{" "}
            <b>
              swera rising run, khushboo welfare society, and Benson medical
              India.
            </b>{" "}
            The application now runs at <b>multiple NGOs</b> like the above.
          </li>
        </ul>
      </p>
    </>
  );
}

export default Experience;
