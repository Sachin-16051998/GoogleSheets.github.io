import { useEffect, useState } from "react"

const useFetch = (req) => 
{
    
    let [data , setData] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true)

    useEffect(()=>
    {
        setTimeout(()=>
        {
            fetch(req).then((Response)=>
            {
                if(Response.ok === false)
                {
                    throw Error(`GET ${Response.url} Not Found`)
                }
                return(Response.json())
            }).then((content)=>
            {
                setData(content);
                setPending(false)
            }).catch((error)=>
            {
                setError(error.message);
                setPending(false)
            })
        } , 1000)
    } , [req])

    return {data , error , pending}

}
 
export default useFetch;
