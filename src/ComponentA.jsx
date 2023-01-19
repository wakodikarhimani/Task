import React,{useEffect,useState} from "react";
import axios from "axios";


function ComponentA(){
    let [empList,setEmpList]=useState([]);
    useEffect(()=>{
        axios.get("https://random-data-api.com/api/v2/users?size=20").then((response)=>{
            console.log("res",response.data);
            setEmpList(response.data);
        }).catch((error)=>{

        })
    },[]);

    return(
        <div>
            <ul>
                {empList.map((ele)=><li>{`${ele.first_name}`}</li>)}
            </ul>
        </div>
    )
}

export default ComponentA;