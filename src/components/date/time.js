import { useEffect,useState } from "react";

export function useHour(tz){
    
    //console.log(tz)
    const [data,setData]=useState('');

    useEffect(()=>{
        if (!tz) {
            tz='America/Bogota'
            //return; // Salir si tz no está definido para evitar el error
        }
    const now = new Date();
    let opt={
        year:'numeric',
        month:'numeric',
        day:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false,
        timeZone:tz
    }
       let si=setInterval(() => {
            let dates=new Intl.DateTimeFormat('es-US',opt)
            const formattedTime = dates.format(now);
            setData(formattedTime)
        }, 1000);
        return ()=>{
            clearInterval(si)
        }
    })
    return data;
}