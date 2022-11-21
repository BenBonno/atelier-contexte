// Somewhere here you may have to use useContext()...

const Population =({data, isLoading, year}) => {
    console.log(2020 - (parseInt(year)));
    return !isLoading && <p>{data[2020 - (parseInt(year))].Population}</p>
}

export default Population