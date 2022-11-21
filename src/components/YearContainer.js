// I'm a useless component whose sole purpose is to illustrate 
// why context is awesome, don't mind me!

import Year from "./Year"

const YearContainer = ({data, isLoading, setYear}) => {
    return (
        <Year data={data} isLoading={isLoading} setYear={setYear}/>
    )
}

export default YearContainer