import {makerespon} from '../utils/makerespon.js'
import {addcousedb,getAllDevices,removeDevices,singlDevicesdisplay,handleImageUpload,servisfinddevice,updateDevicedetails} from '../service/devices.js'

//Add devices
export const addevice = async(req, res,next)=>{
 
    const passcouser = req.body
    const devicess = await addcousedb(passcouser);

     return makerespon({ res, data: devicess, message: "Devis Add successfully" });

    // return res.json(devicess)
}


export const findDevices = async (req, res,next) => {

    const devicesfind = await getAllDevices();
    
    return makerespon({
      res,
      data: devicesfind,
      message: "All devices  find successfully",
    });
  }
    
export const DeleteDevices = async (req, res,next) => {
      const remove = await removeDevices(req.params.id);
      return makerespon({
        res,
        data: remove,
        message: "remove Devices successfully",
      });
    };



 export const displaySingleDevices = async(req, res,next)=>{


     const dispalyDevices = await singlDevicesdisplay(req.params.id)

     return makerespon({
        res,
        data: dispalyDevices,
        message: " Devices display successfully",
      });
    
 } 
 
 export const imageuplabe = async(req, res,next)=>{

  try {
    const result = await handleImageUpload(req.file.buffer);
    return res.send(result);
  } catch (error) {
    console.error('Error during image upload:', error);
    return res.status(500).send({
      message: 'Error during image upload',
    });
  }
 }

 export const findDevicesbyid = async(req, res,next)=>{


   const finddevics = await servisfinddevice(req.params.id)
   return makerespon({
    res,
    data: finddevics,
    message: " Devices finddevics successfully",
  });
 }

 export const uptade = async(req, res,next)=>{

  const devvie = await updateDevicedetails(req.params.id, req.user, req.body);
  return makerespon({ res, data: devvie, message: 'device updated successfully' });
 }