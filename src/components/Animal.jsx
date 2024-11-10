export default function Animal({name, country, height, in_zoo}){
    return <>
        {/* {name} {country} {height} */}

        <li>{name} {country} {height} {in_zoo ? "" : <strong> Not Available</strong>}</li>
    </>
}