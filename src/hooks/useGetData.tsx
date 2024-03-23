import {FC, useEffect, useState} from "react";

type props={
    "url":string,
    "body":string
}
const UseGetData:FC<props> = ({url,body}) => {
    const [data,setData]=useState( null)
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState('')

    useEffect(()=>{
        async function getData(){
            setIsLoading(true)
            try {
                const response = await fetch(url, body)
                const json = await response.json()
                setData(json)
            }catch (e) {
                console.log(error)
            }
            setIsLoading(false)
        }
        getData()
    },[url,body])
    if (error){

    }
    return{isLoading,data}
};

export default UseGetData;