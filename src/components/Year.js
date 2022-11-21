// Somewhere here you may have to use useContext()...

const Year = ({data, isLoading, setYear}) => {
    return (
        !isLoading &&
        <select onChange={(event) => {
            setYear(event.target.value)
        }}>
            {data.map((opt) => {
                return (
                <option key={opt.Year} value={opt.Year}>{opt.Year}</option>
                )
            })}
        </select>
    )
}

export default Year