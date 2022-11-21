// I'm a useless component whose sole purpose is to illustrate 
// why context is awesome, don't mind me!

import Population from "./Population"

const PopulationContainer = ({data, isLoading, year}) => {
    return <Population data={data} isLoading={isLoading} year={year} />
}

export default PopulationContainer