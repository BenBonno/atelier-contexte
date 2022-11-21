// Somewhere here you may have to use useContext()...

import { useContext } from "react";
import DataContext from "../contexts/DataContext";

const Year = () => {
  const { data, isLoading, setYear } = useContext(DataContext);
  return (
    !isLoading && (
      <select
        onChange={(event) => {
          setYear(event.target.value);
        }}
      >
        {data.map((opt) => {
          return (
            <option key={opt.Year} value={opt.Year}>
              {opt.Year}
            </option>
          );
        })}
      </select>
    )
  );
};

export default Year;
