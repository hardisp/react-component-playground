import { Select } from "../components";
import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "SearchableSelect/Basic",
};

export default meta;

type SelectStoryArgs = {
  multiple: boolean;
  searchable: boolean;
  markMatchKeyword: boolean;
  searchPosition: "top" | "bottom";
  options: { value: string; label: string }[];
  outlined: boolean;
  hideLabel: boolean;
  label: string;
};

export const Playground: StoryObj<SelectStoryArgs> = {
  args: {
    multiple: true,
    searchable: true,
    markMatchKeyword: true,
    searchPosition: "top",
    outlined: true,
    hideLabel: false,
    label: "Label",
    options: [
      { value: "1", label: "Apple" },
      { value: "2", label: "Banana" },
      { value: "3", label: "Orange" },
      { value: "4", label: "Mango" },
    ],
  },

  render: (args) => {
    const [value, setValue] = useState<
      SelectStoryArgs["options"] | SelectStoryArgs["options"][number]
    >(args.multiple ? [] : args.options[0]);

    return (
      <Select
        value={value}
        onChange={setValue}
        multiple={args.multiple}
        searchable={args.searchable}
        outline={args.outlined}
        options={args.options}
        hideLabel={args.hideLabel}
        label={args.label}
      />
    );
  },
};
