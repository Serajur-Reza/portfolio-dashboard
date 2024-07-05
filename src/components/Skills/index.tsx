import { useEffect, useState } from "react";
import MultiSelect from "../../common/MultiSelect";
import { useGetSkills } from "../../queryHooks/skills/useGetSkills";
import { useCreateSkills } from "../../queryHooks/skills/useCreateSkills";
import toast from "react-hot-toast";

const Skills = () => {
  const [coreSkills, setCoreSkills] = useState([]);

  const [coreSkillsQuery, setCoreSkillsQuery] = useState("");

  const [moderateSkills, setModerateSkills] = useState([]);

  const [moderateSkillsQuery, setModerateSkillsQuery] = useState("");

  const { data: skills } = useGetSkills();

  const { mutateAsync: createSkills, isLoading } = useCreateSkills();

  useEffect(() => {
    if (skills?.data?.data[0]) {
      setCoreSkills(skills?.data?.data[0]?.core);
      setModerateSkills(skills?.data?.data[0]?.moderate);
    }
  }, [skills?.data?.data]);

  const onSubmit = async () => {
    // console.log(coreSkills, moderateSkills);
    const res = await createSkills({
      core: coreSkills,
      moderate: moderateSkills,
    });
    console.log(res);
    if (res?.status === 200) {
      toast.success("successfully updated skills");
    }
  };

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
      <h1 className="text-center">Skills</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
        <div className="mt-5">
          <h3 className="mb-5">Core</h3>

          <MultiSelect
            options={coreSkills}
            setOptions={setCoreSkills}
            query={coreSkillsQuery}
            setQuery={setCoreSkillsQuery}
          ></MultiSelect>
        </div>

        <div className="mt-5">
          <h3 className="mb-5">Moderate</h3>

          <MultiSelect
            options={moderateSkills}
            setOptions={setModerateSkills}
            query={moderateSkillsQuery}
            setQuery={setModerateSkillsQuery}
          ></MultiSelect>
        </div>

        <div className="mt-5">
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md disabled:bg-slate-400"
            onClick={onSubmit}
            disabled={isLoading}
          >
            Update Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
