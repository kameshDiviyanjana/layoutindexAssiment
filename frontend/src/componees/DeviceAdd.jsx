import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function DeviceAdd() {

    const [Address,setAddress] = useState('');
    const [devicesname,setdevicesname] = useState('');
    const [serialnumber,setserialnumber] = useState('');
    const [Imageadd,setImage] = useState();
    const [Type,setType] = useState('');
    const [Status,setStatus] = useState('');
    const [disImage, setDisImage] = useState();
      
    const navigate = useNavigate()
    const addImage = async (e) => {
        const imageTarget = e.target.files[0];
        if (imageTarget) {
          setImage(imageTarget);
          displayImage(imageTarget);
        }
      };
    
      const displayImage = (selectedImage) => {
        const url = URL.createObjectURL(selectedImage);
        
        setDisImage(url);
      };
     
     const devicesadd = async()=>{
       
        try {
            const Image =  await uploadImageToFirebase();
         
          
            const Devicedata = {
              devicesname ,
                Address,
                serialnumber,
                Type,
                Image,
                Status
            };
            axios.post('http://localhost:5000/ds/device', Devicedata).then((res) => {
                navigate('/');
            });
    
        } catch (error) {
            console.error("Error adding device:", error);
        }
          
    }
   
      const uploadImageToFirebase = () => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("images", Imageadd);
    
          axios
            .post("http://localhost:5000/ds/device/image", formData)
            .then((res) => {
              console.log("Upload successful:", res.data);
              const downloadURLs = res.data.downloadURL;
            
              resolve(downloadURLs);
            })
            .catch((error) => {
              console.error("Error uploading image:", error);
              reject(error);
            });
        });
      };
  return (
    <div className=' w-full h-full '>
      <div className=' mb-6  py-5 px-4'>
      <h1 className="text-3xl   font-semibold text-center">
      Device ADD
    </h1>
      </div>
      <div className=' bg-white flex justify-center  h-full'>
        <div className='  py-10 px-20 shadow-2xl rounded-md font-mono'>
        <div className=' flex justify-center gap-[60px]'>
      
      <label id="Adresss">Adresss</label>
      <input type="text" className="form-control border border-solid  w-[450px]  outline-none rounded-md border-blue-300 py-2 px-4 mb-3" placeholder="Employee Taxs"  id="Adresss" onChange={(e)=>{
              setAddress(e.target.value)
                }}/>
                                
                              </div>
                              <div className=' flex justify-center gap-4'>
        
        <label id="Adresss">Devices Name</label>
        <input type="text"  className="form-control border border-solid  w-[450px]  outline-none rounded-md border-blue-300 py-2 px-4 mb-3 " placeholder="Devices Name"  id="Adresss" onChange={(e)=>{
              setdevicesname(e.target.value.toLowerCase)
                }}/>
                                  
                                </div>
                                <div className=' flex justify-center gap-4'>
        
        <label id="Adresss">Serial Number</label>
        <input type="text"  className="form-control border border-solid  w-[450px]  outline-none rounded-md border-blue-300 py-2 px-4 mb-3" placeholder="Serial Number"  id="Adresss" onChange={(e)=>{
              setserialnumber(e.target.value)
                }}/>
                                  
                                </div>
                                <div className=' flex justify-center gap-[79px]'>
        
        <label id="Adresss">Staus</label>
     
                <select name="cars" id="cars" className="form-control border border-solid  w-[450px]  outline-none rounded-md border-blue-300 py-2 px-4 mb-3 " onChange={(e)=>{
              setType(e.target.value)
                }}>
    <option value="pos" className=' text-center text-black  '>pos</option>
    <option value="kisok" className=' text-center text-black '>kisok</option>
    <option value="signage" className=' text-center text-black '>signage</option>
    
  </select>
  
                                  
                                </div>
                                <div className=' mb-4  flex justify-center gap-4'>
        
        <label id="Adresss">active</label>
        <input type="radio" id="html" name="fav_language" value="active" onChange={(e)=>{
              setStatus(e.target.value)
                }} />
                 <label id="Adresss">inactive</label>
                <input type="radio" id="html" name="fav_language" value="inactive" onChange={(e)=>{
              setStatus(e.target.value)
                }} />
  
  
       
                                  
                                </div>
                                <div className=' flex justify-center gap-4'>
        
        <label id="Adresss">Image</label>
        <input
                  className="  py-4 px-5 "
                  type="file"
                  name="images"
                 onChange={addImage}
                />
                                  
      {disImage && <img src={disImage} alt="image" height="160px" width="165px" />}
                                </div>
                                <div className=' mt-3 flex justify-center'>
        
        <button onClick={devicesadd} className=' py-4 px-3 bg-blue-700 mb-3 w-[150px]  text-white  shadow-xl outline-none rounded-lg'>move</button>
                                </div>
        </div>
      </div>
     
                              
  
    </div>
  )
}

export default DeviceAdd
