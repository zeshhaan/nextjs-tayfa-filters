import React from "react";

function Checkbox(props) {
  return (
    <div className="py-1">
      <label className="flex items-center space-x-3 w-full cursor-pointer">
        <input
          type="checkbox"
          name="checked-demo"
          defaultValue={1}
          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <span className="text-gray-900 font-sm text-md flex-1">
          {props.for}
        </span>
      </label>
    </div>
  );
}

export default Checkbox;
