
function Listitems(props){  
const items=props.items;
return(
    <ul>
        {
            items.map((item,index) =>(
                <li key={index}>{item}</li>
            )) }
    </ul>
); }


export default Listitems;