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
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
      <ComboboxInput
        aria-label="Assignees"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="please search skills"
        className="w-[200px] border border-black-300 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 cursor-pointer rounded-md focus:ring-0 "
      />
      <ComboboxOptions
        anchor="bottom"
        className="absolute mt-1 max-h-60 w-[200px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
      >
        {filteredOptions.map((option) => (
          <ComboboxOption
            key={option.id}
            value={option.name}
            className={({ active }) =>
              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                active ? "bg-teal-600 text-white" : "text-gray-900"
              }`
            }
          >
            {option.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};

export default MultiSelect;
