import React,{useState} from 'react'
import { Link } from "react-router-dom";
import "./Dropdown.css";
import { serviceDropdown } from "./NavItems";


function Dropdown (){
const [dropdown,setDropdown] = useState(false);

return  ( 
            <>
        
        <ul className={dropdown ? "services-submenu clicked": "services-submenu"} onClick={()=> setDropdown(!dropdown)}>
            {serviceDropdown.map((item)=>{
            return( 
                    <il key = {item.id}>
                <Link to= {item.path} className={item.cName} onClick={()=>setDropdown(false)}>
                        {item.title}
                </Link>

                 </il>

            );

            
                
            })}
        </ul>
        
        
        
        </>


        )

}
export default Dropdown;