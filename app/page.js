"use client"

import axios from 'axios'
import React, { useState } from 'react'


const page = ()=>{
  const [image ,setImage] = useState([])
  const getimages = async()=>{
try {
  const response = await axios.get("https://picsum.photos/v2/list")
  const data = response.data
  setImage(data)
  console.log(image)
} catch (error) {
  console.log(error.message)
}
}
return(
  <>
  <button onClick={getimages} className=' m-20 py-2 px-3 bg-slate-900 text-white'>Get Images</button>
  <div className='p-10 m-10'>
  {image.map((elem,i)=>{
    return<img key={i}
    src={elem.download_url}
    width={300} height={300} className='m-10 inline rounded'
    />
  })}
  </div>
  </>
)

}

export default page