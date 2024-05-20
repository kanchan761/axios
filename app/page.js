"use client"
import React, { useState } from 'react'

// import axios from 'axios'


// const page = ()=>{
//   const [image ,setImage] = useState([])
//   const getimages = async()=>{
// try {
//   const response = await axios.get("https://picsum.photos/v2/list")
//   const data = response.data
//   setImage(data)
//   console.log(image)
// } catch (error) {
//   console.log(error.message)
// }
// }
// return(
//   <>
//   <button onClick={getimages} className=' m-20 py-2 px-3 bg-slate-900 text-white'>Get Images</button>
//   <div className='p-10 m-10'>
//   {image.map((elem,i)=>{
//     return<img key={i}
//     src={elem.download_url}
//     width={300} height={300} className='m-10 inline rounded'
//     />
//   })}
//   </div>
//   </>
// )

// }

// export default page

const page = ()=>{
  const [username , setUsername] = useState("")
  const [usercontact , setUsercontact] = useState("")
  const [useremail,setemail] = useState("")
  const [userpassword, setpassword] = useState("")
  return (
    <>
    <form className='m-10'>
    <h1 className='text-4xl font-semibold'>Enter User Detail</h1>
     <input
     type='text' className='border-black border-2 px-6 py-2' placeholder='Enter name' value={username}
     onChange={(e)=>{
      setUsername(e.target.value)
      console.log(username)
     }}
     
     /> <br/><br/>
     <input
     type='text' className='border-black border-2 px-6 py-2' placeholder='Enter contact' value={usercontact}
     onChange={(e)=>{
      setUsercontact(e.target.value)
      console.log(usercontact)
     }}
     
     /><br/><br/>
     <input
     type='email' placeholder='enter email' value={useremail} className='border-black border-2 px-6 py-2'  
     onChange={(e)=>{
    setemail(e.target.value)
    console.log(useremail)
     }}
     />
    <br/><br/>
    <input
    type='password' placeholder='enter password' value={userpassword} className='border-2 border-black px-6 py-2 ' onChange={(e)=>{
      setpassword(e.target.value)
      console.log(userpassword)
    }} 
    />

    </form>
    </>
  )
}

export default page