import React from 'react'
import { useEffect,useState,} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data,setData] = useState([])
    // const [loading, setLoading] = useState(true);
    //  useEffect (()=>{
    //   fetch("https://api.github.com/users/parthmishra0219")
    //   .then(response => response.json())
    //   .then(data =>{
    //     console.log(data);
    //     setData(data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error("Error fetching data:", error);
    //     setLoading(false);
    //   });
    //  },[])



  return (
    <div className='text-center text-m-4 m-4 bg-gray-600   text-white p-4 text-3xl'>Github followers : {data.followers} 
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    <p className=" text-left mt-4 ml-2">
            {data.name}
            <br/>
            {data.bio} 
          </p>
   
     &nbsp; &nbsp; &nbsp; 
    </div>
  )
}

export default Github

export const githubInfoLoader= async()=> {
  const response = await  fetch('https://api.github.com/users/parthmishra0219')
  return response.json()
}
  