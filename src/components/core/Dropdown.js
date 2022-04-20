import { CheckIcon, Select } from "native-base";
import React from "react";

const DropdownList = ({ list, value, placeholder, handleChange }) => {
  return (
    <Select
      selectedValue={value}
      minWidth="200"
      accessibilityLabel={placeholder || ""}
      placeholder={placeholder || ""}
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      onValueChange={handleChange}
      height="12"
    >
      {list.map((item, i) => (
        <Select.Item key={i} label={item.label} value={item.value} />
      ))}
    </Select>
  );
};

export default DropdownList;
