import { useState } from "react";

function useControlledInput(defaultInputValue = "", parseValue: any) {
  const [value, setValue] = useState(defaultInputValue);

  const handleChange = (event: any) => {
    if (typeof parseValue === "function") {
      setValue(parseValue(event.target.value));
    } else {
      setValue(event.target.value);
    }
  };

  return [
    {
      value,
      onChange: handleChange,
    },
    value,
    setValue,
  ];
}

export default useControlledInput;
