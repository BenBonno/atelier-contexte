// I'm a useless component whose sole purpose is to illustrate 
// why context is awesome, don't mind me!

import YearContainer from "./YearContainer"

const Left = ({data, isLoading, setYear}) => {
    return (
        <YearContainer data={data} isLoading={isLoading} setYear={setYear} />
    )
}

export default Left