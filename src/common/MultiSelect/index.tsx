import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import React from "react";
import skills from "../../data/skills";

type Props = {
  options: any[];
  setOptions: React.SetStateAction<any>;
  query: string;
  setQuery: React.SetStateAction<any>;
};

const MultiSelect = (props: Props) => {
  const { options, setOptions, query, setQuery } = props;

  const filteredOptions =
    query === ""
      ? skills
      : skills.filter((skill) => {
          return skill.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox
      multiple
      value={options}
      onChange={setOptions}
      onClose={() => setQuery("")}
    >
      {options.length > 0 && (
        <ul>
          {options.map((option) => (
            <li key={option.id}>{option.name}</li>
          ))}
        </ul>
      )}
      <ComboboxInput
        aria-label="Assignees"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="please add skills"
      />
      <ComboboxOptions anchor="bottom" className="border empty:invisible">
        {filteredOptions.map((option) => (
          <ComboboxOption
            key={option.id}
            value={option}
            className="data-[focus]:bg-blue-100"
          >
            {option.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export default MultiSelect;
