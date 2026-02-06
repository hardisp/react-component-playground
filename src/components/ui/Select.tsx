import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectDropdown,
  type SelectOptionProps,
} from "@hrdi/searchable-select";

import { MagnifyingGlassIcon, ChevronDownIcon } from "@radix-ui/react-icons";

import { twMerge } from "tailwind-merge";

type SelectProps = {
  multiple?: boolean;
  value?: SelectOptionProps | SelectOptionProps[];
  searchable?: boolean;
  options?: SelectOptionProps[];
  onChange: (value: SelectOptionProps | SelectOptionProps[]) => void;
  outline?: boolean;
  hideLabel?: boolean;
  label?: string;
};

export default function Select({
  options,
  multiple = true,
  searchable = true,
  onChange,
  value,
  outline = false,
  hideLabel = false,
  label = "Label",
}: SelectProps) {
  return (
    <div className={twMerge("grid gap-4 items-center", hideLabel ? "gap-0" : "md:grid-cols-[100px_repeat(1,1fr)]")}>
      {!hideLabel && <div>{label}</div>}
      <div className="relative">
        <SelectRoot
          options={options as SelectOptionProps[]}
          value={value}
          onChange={onChange}
          multiple={multiple}
          searchable={searchable}
        >
          <SelectTrigger>
            <div
              className={twMerge(
                "flex min-h-10 w-full flex-wrap items-center rounded-xs bg-gray-200 px-2 py-1 text-sm shadow-xs focus-within:ring-2 focus-within:ring-blue-500 justify-between gap-2",
                outline
                  ? "border border-gray-300 bg-transparent"
                  : "border border-transparent",
              )}
            >
              <SelectValue placeholder="" />
              <ChevronDownIcon className="justify-self-end" />
            </div>
          </SelectTrigger>

          <SelectDropdown
            portal={false}
            searchOptions={{
              searchIcon: <MagnifyingGlassIcon width={"1em"} height={"1em"} />,
              clear: true,
              markOnSearch: true,
            }}
            options={options}
            searchPosition="top"
          ></SelectDropdown>
        </SelectRoot>
      </div>
    </div>
  );
}
