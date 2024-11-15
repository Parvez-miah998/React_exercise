export default function TodoItem({item})
{
    const design = {color:"red", fontSize: "40px", textAlign: "center"};
    return <div style={{width: "550px", backgroundColor: "green", marginLeft: "30%", borderRadius: "20px"}}>
        <div>
            <h1 style={design}>{item}</h1>
        </div>
    </div>
}