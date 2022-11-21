import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios"
import Left from "./components/Left"
import Right from "./components/Right"

// Your mission is to turn this huge mess of a props salad
// into a beautifully contextualized app. Your turn !!

function App() {
  const [data, setData] = useState()
  const [year, setYear] = useState(2020)
  const [isLoading, setIsLoading] = useState(true)

  // Check this out! Another way of fetching data ;-) 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
        setData(response.data.data)
        setIsLoading(false)
        console.log(response.data.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Left data={data} isLoading={isLoading} setYear={setYear}/>
      <Right data={data} isLoading={isLoading} year={year}/>
    </div>
  );
}

export default App;
