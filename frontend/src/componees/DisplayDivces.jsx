import React,{useEffect,useState} from 'react'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom';

function DisplayDivces() {
  const navigate =useNavigate()
     const [Alldevice,setAlldevice] = useState([])
    const[name,setname] = useState('')
     function getAlldevices(){
            axios.get('http://localhost:5000/ds/device').then((res)=>{

                setAlldevice(res.data.data)
                console.log(res.data)
            })
            
     }

     function removedevices(id){
        console.log("ID : ",id)
        axios.delete(`http://localhost:5000/ds/device/${id}`).then(()=>{
            getAlldevices()
        })
     }

     
     const serchdevice = ()=>{
       
       
        axios.patch(`http://localhost:5000/ds/device/${name}`).then((res)=>{
            setAlldevice(res.data.data)
        })
     }
     const deviceupdate = (ids)=>{
        navigate('nexts',{ state :{id:ids}})
     }
     useEffect(()=>{

        getAlldevices()
     },[])

  return (
    <div className=' w-full shadow-sm'>
        <div className=' flex  flex-row justify-center  w-full mt-6 gap-4'>
        <h4 className='py-2 px-4 font-semibold'>Device find</h4>
            <div >
               
                 <input className='border border-solid  w-[450px]  outline-none rounded-md border-blue-300 py-2 px-4' type='text' placeholder='Enter Device Name' onChange={(e)=>{
                    setname(e.target.value.toLowerCase())
                 }} />
            </div>
            <button className=' py-2 px-9 bg-blue-500 rounded-lg border border-solid border-white shadow-xl outline-none text-white' onClick={serchdevice}>Serch</button>
        </div>
       <div className=' relative flex  flex-col shadow-lg mt-9 '>
         <table className=' w-full'>
            <thead className=' w-full '>
            <tr className=' border border-solid  border-l-0 text-center border-gray-200'>
                                <th scope="col" className=' py-2 px-2'>Adress</th>
                                <th scope="col" className=' py-2 px-2'>Devices Name</th>
                               
                                <th scope="col"  className=' py-2 px-2'>Devices Serial Number</th>
                                <th scope="col"  className=' py-2 px-2'>Image</th>
                                <th scope="col"  className=' py-2 px-2'>Type </th>
                                <th scope="col"  className=' py-2 px-2'>Staus(Active/Decative) </th>
                               
                            </tr>
            </thead>
                <tbody>
             {
              Alldevice && Alldevice.length > 0 ? ( Alldevice.map((device)=>(

                <tr className=' border border-solid  border-l-0 py-3 px-2 text-center'>
                    <td  className=' py-2 px-2'>{device.Address}</td>
                    <td  className=' py-2 px-2'>{device.devicesname.charAt(0).toUpperCase() + device.devicesname.slice(1).toLowerCase()}</td>
                    <td  className=' py-2 px-2'>{device.serialnumber}</td>
                    <td  className=' py-2 px-2 flex  justify-center'><img  src={device.Image} height={"50px"} width={"50px"}/> </td>
                    <td  className=' py-2 px-2'>{device.Type}</td>
                    <td  className={`py-2 px-2 ${device.Status}`}  >{device.Status}</td>
                    <td className=' py-2 px-2'><button  className=' py-2 px-4 bg-yellow-300 rounded-lg hover:bg-red-500 text-w' onClick={()=>{
                        removedevices(device._id)
                    }}>DELETE</button> <button  className=' py-2 px-4 bg-blue-600 rounded-lg hover:bg-green-700 text-w' onClick={()=>{
                        deviceupdate(device._id)
                    }}>Update</button></td>
                    
                </tr>
            ))):( <tr className=' border border-solid  border-l-0 py-3 px-2 text-center'>
                <td colSpan="7" className="py-2 px-2">
                    <h1 className=' text-lg font-extrabold'>No data....</h1>
                </td>
            </tr>)
             }
            </tbody>
         </table>
       </div>
    </div>
  )
}

export default DisplayDivces
