import { useEffect,useState } from "react";

export function hour(tz){
    const [data,setData]=useState('');
    let opt={
        year:'numeric',
        month:'numeric',
        day:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false,
        timezone:tz
    }

    useEffect(()=>{
       let si=setInterval(() => {
            let dates=new Intl.DateTimeFormat('es-us',opt).format()
            setData(dates)
        }, 1000);
        return ()=>{
            clearInterval(si)
        }
    },[data])
    return data;
}