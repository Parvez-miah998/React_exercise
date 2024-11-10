import Thanks from "./Thanks";
import Goodbye from "./Goodbye";


export default function Welcome()
{
    const show = true;
    return show ? <Thanks /> : <Goodbye />
}