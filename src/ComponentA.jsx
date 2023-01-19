import React,{useEffect,useState} from "react";
import axios from "axios";
import Pagination from './Pagination';
import ComponentB from './ComponentB';
import EmpDetails from "./EmpDetails";

//Used Context API to pass the employment data to EmpDetails component
export const UserContext =React.createContext({});

//Implemented Pagination
function ComponentA(){
    let [empList,setEmpList]=useState([]);
    const [currentPage,setCurrentPage]= useState(1);
    const [dataPerPage,setDataPerPage]=useState(5);
    useEffect(()=>{
        axios.get("https://random-data-api.com/api/v2/users?size=20").then((response)=>{
            setEmpList(response.data);
        }).catch((error)=>{
            console.log(error)
        })
    },[]);

    const lastDataIndex=currentPage* dataPerPage;
    const firstDtaIndex= lastDataIndex-dataPerPage;
    const currentData=empList.slice(firstDtaIndex,lastDataIndex);

    return(
        <div>
                {currentData.map((ele)=>
                <div>
                    <ComponentB props={ele}/>
                    <UserContext.Provider value={{ele}}>
                        <EmpDetails></EmpDetails>
                    </UserContext.Provider>
                </div>
                )}
            <Pagination totalData={empList.length} itemsPerPage={dataPerPage}  setCurrentPage={setCurrentPage} currentPage={currentPage}  />
        </div>
    )
}

export default ComponentA;