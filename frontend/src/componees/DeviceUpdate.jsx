
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function DeviceUpdate() {
    const next = useNavigate();
    const takepara = useLocation();
    const deviceid = takepara.state?.id;
    const [onedevice, setOnedevice] = useState([]);
    const [Address, setAddress] = useState('');
    const [devicesname, setDevicesname] = useState('');
    const [serialnumber, setSerialnumber] = useState('');
    const [Imageadd, setImage] = useState();
    const [Type, setType] = useState('');
    const [Status, setStatus] = useState('');
    useEffect(() => {
        searchOnedevice();
    }, [deviceid]);

    function searchOnedevice() {
        axios.get(`http://localhost:5000/ds/device/onedevice/${deviceid}`)
            .then((res) => {
              console.log(res.data.data)
                setOnedevice(res.data.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        // Update state when onedevice changes
        if (onedevice.length > 0) {
            setAddress(onedevice[0].Address);
            setDevicesname(onedevice[0].devicesname);
            setSerialnumber(onedevice[0].serialnumber);
            setType(onedevice[0].Type);
            setStatus(onedevice[0].Status);
            setImage(onedevice[0].Image);
        }
    }, [onedevice]);

    function updatedevice(id) {
        const deviceUpdatedData = {
            Address,
            devicesname,
            serialnumber,
            Imageadd,
            Type,
            Status
        };

        axios.put(`http://localhost:5000/ds/device/update/${id}`, deviceUpdatedData)
            .then(() => {
                next('/');
            })
            .catch((error) => {
                console.error('Error updating device:', error);
            });
    }
    

    return (
        <div className='w-full h-full'>
            <div className='mb-6 py-5 px-4'>
                <h1 className="text-3xl font-semibold text-center">
                    Device UPDATE
                </h1>
            </div>
            <div className='bg-white flex justify-center h-full'>
                <div className='py-10 px-20 shadow-2xl rounded-md font-mono'>
                    <div className='flex justify-center gap-[60px]'>
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control border border-solid w-[450px] outline-none rounded-md border-blue-300 py-2 px-4 mb-3"
                            placeholder="Address"
                            value={Address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                  

                    <div className=' flex justify-center gap-[60px]'>
                      
                                         <label id="Adresss">Device Name</label>
                                           <input type="text" className="form-control border border-solid  w-[450px]  outline-none rounded-md border-blue-300 py-2 px-4 mb-3" placeholder="Employee Taxs"  id="Adresss"  value={devicesname} onChange={(e)=>{
                                                    setDevicesname(e.target.value)
                                                      }} />
                                                                      
                                                                    </div>
                                                                    <div className=' flex justify-center gap-[60px]'>
                                            
                                            <label id="Adresss">Serial Number</label>
                                            <input type="text" className="form-control border border-solid  w-[450px]  outline-none rounded-md border-blue-300 py-2 px-4 mb-3" placeholder="Employee Taxs"  id="Adresss"  value={serialnumber} onChange={(e)=>{
                                                    setSerialnumber(e.target.value)
                                                      }} />
                                                                      
                                                                    </div>
                                      
                                      
                                                                    <div className=' flex justify-center gap-[79px]'>
                                              
                                              <label id="Adresss">Type</label>
                                           
                                                      <select name="cars" id="cars" className="form-control border border-solid  w-[450px]  outline-none rounded-md border-blue-300 py-2 px-4 mb-3 " value={Type} onChange={(e)=>{
                                                    setType(e.target.value)
                                                      }} >
                                          <option value="pos" className=' text-center text-black  '>pos</option>
                                          <option value="kisok" className=' text-center text-black '>kisok</option>
                                          <option value="signage" className=' text-center text-black '>signage</option>
                                          
                                        </select>
                                        
                                                                        
                                                                      </div>
                                      
                                                                      <div className=' mb-4  flex justify-center gap-4'>
                                              
                                              <label id="Adresss">active</label>
                                              <input type="radio" id="html" name="fav_language" value="active"  checked={Status === "active"} onChange={(e)=>{
                                                    setStatus(e.target.value)
                                                      }}/>
                                                       <label id="Adresss">inactive</label>
                                                      <input type="radio" id="html" name="fav_language" value="inactive" checked={Status === "inactive"} onChange={(e)=>{
                                                    setStatus(e.target.value)
                                                       }}/>
                                        
                                        
                                             
                                                                        
                                                                       </div>
                                                                       <div className=' flex justify-center gap-4'>
                                              
                                             <label id="Adresss">Image</label>
                                              <input
                                                        className="  py-4 px-5 "
                                                        type="file"
                                                         name="images"
                                                      
                                                       />
                                                                        
                                            <img src={Imageadd} alt="image" height="160px" width="165px" />
                                                                       </div>
                                      





                    <div className='mt-3 flex justify-center'>
                        <button
                            className='py-4 px-3 bg-blue-700 mb-3 w-[150px] text-white shadow-xl outline-none rounded-lg'
                            onClick={() => updatedevice(deviceid)}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeviceUpdate;

