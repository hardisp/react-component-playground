import { useState } from "react";
import { Select } from "./components";
import type { SelectOptionProps } from "@hrdi/searchable-select";

const options: SelectOptionProps[] = [
  { value: "1", label: "User Icon" },
  { value: "2", label: "Settings Icon" },
  { value: "3", label: "Notification Bell" },
  { value: "4", label: "Search Icon" },
  { value: "5", label: "Logout Icon" },
];
export default function App() {
  const [configure, setConfigure] = useState({
    isMultiple: true,
    isSearchable: true,
    outlined: true,
    isPortal: false,
  });
  const [value, setValue] = useState<SelectOptionProps[] | SelectOptionProps>(
    [],
  );
  return (
    <div className="p-10">
      <div className="min-h-screen relative">
        <h2 className="mb-4 text-xl font-semibold">
          Hardi Searchable Select Example
        </h2>

        <Select
          value={value}
          onChange={setValue}
          multiple={configure.isMultiple}
          searchable={configure.isSearchable}
          outline={configure.outlined}
          options={options}
          isPortal={configure.isPortal}
        />

        <div className="flex gap-4 mt-6">
          <button
            className="rounded-full"
            onClick={() => {
              setConfigure((_prev) => {
                return {
                  ..._prev,
                  isMultiple: !_prev.isMultiple,
                };
              });
              setValue([]);
            }}
          >
            Multiple: {configure.isMultiple ? "ON" : "OFF"}
          </button>
          <button
            className="rounded-full"
            onClick={() => {
              setConfigure((_prev) => {
                return {
                  ..._prev,
                  isSearchable: !_prev.isSearchable,
                };
              });
              setValue([]);
            }}
          >
            Searchable: {configure.isSearchable ? "ON" : "OFF"}
          </button>
          <button
            className="rounded-full"
            onClick={() => {
              setConfigure((_prev) => {
                return {
                  ..._prev,
                  outlined: !_prev.outlined,
                };
              });
              setValue([]);
            }}
          >
            Outlined: {configure.outlined ? "ON" : "OFF"}
          </button>
          <button
            className="rounded-full"
            onClick={() => {
              setConfigure((_prev) => {
                return {
                  ..._prev,
                  isPortal: !_prev.isPortal,
                };
              });
              setValue([]);
            }}
          >
            Portal: {configure.isPortal ? "ON" : "OFF"}
          </button>
        </div>

        <pre className="bg-gray-300 p-5 mt-10 border border-gray-500 rounded-sm max-w-80">
          props: <br />
          <ul>
            <li>searchable: {configure.isSearchable ? "True" : "False"}</li>
            <li>multiple: {configure.isMultiple ? "True" : "False"}</li>
            <li>outlined: {configure.outlined ? "True" : "False"}</li>
          </ul>
        </pre>
      </div>
    </div>
  );
}
