import { useState } from "react";
import MultiSelect from "../../common/MultiSelect";

const Skills = () => {
  const [coreSkills, setCoreSkills] = useState([]);

  const [coreSkillsQuery, setCoreSkillsQuery] = useState("");

  const [moderateSkills, setModerateSkills] = useState([]);

  const [moderateSkillsQuery, setModerateSkillsQuery] = useState("");

  // const onSubmit = () =>{

  // }

  // const filteredCoreSkills =
  //   coreSkillsQuery === ""
  //     ? skills
  //     : skills.filter((skill) => {
  //         return skill.name
  //           .toLowerCase()
  //           .includes(coreSkillsQuery.toLowerCase());
  //       });
  return (
    <div>
      <h1>Skills</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
        <div>
          <h3>Core</h3>

          <MultiSelect
            options={coreSkills}
            setOptions={setCoreSkills}
            query={coreSkillsQuery}
            setQuery={setCoreSkillsQuery}
          ></MultiSelect>
        </div>

        <div>
          <h3>Moderate</h3>

          <MultiSelect
            options={moderateSkills}
            setOptions={setModerateSkills}
            query={moderateSkillsQuery}
            setQuery={setModerateSkillsQuery}
          ></MultiSelect>
        </div>
      </div>
    </div>
  );
};

export default Skills;
