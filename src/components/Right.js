// I'm a useless component whose sole purpose is to illustrate 
// why context is awesome, don't mind me!

import PopulationContainer from "./PopulationContainer"

const Right = ({data, isLoading, year}) => {
    return <PopulationContainer data={data} isLoading={isLoading} year={year} />
}

export default Right