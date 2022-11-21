// Somewhere here you may have to use useContext()...

import { useContext } from "react";
import DataContext from "../contexts/DataContext";

const Population = () => {
  const { data, isLoading, year } = useContext(DataContext);
  console.log(2020 - parseInt(year));
  return !isLoading && <p>{data[2020 - parseInt(year)].Population}</p>;
};

export default Population;
