import {AddDevicesrepository,getAllDevicesrepository,removedevicerepository,displayDevicerepository,uploadImageToStorage,devicefindrepositery,updateDevice} from '../repository/devices.js'
import { default as createError } from 'http-errors';
export const addcousedb = async(data)=>{

const add = await AddDevicesrepository({
    ...data
})

 return add

}

export const getAllDevices = async()=>{

 
    const AllDevice = await getAllDevicesrepository()

    return AllDevice
    
}
export const removeDevices = async(id)=>{


    const deviceremove = removedevicerepository(id)

    if (!deviceremove) throw new createError(401, 'ID NOT in system');
   
    return deviceremove
    
}
export const singlDevicesdisplay = async(id)=>{

    const device = await displayDevicerepository(id)

    return device
    
}

export const handleImageUpload = async(buffer)=>{
    try {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileNameWithSuffix = 'up-' + uniqueSuffix + '.png';
    
        const downloadURL = await uploadImageToStorage(buffer, fileNameWithSuffix);
    
        return {
          message: 'Upload successful',
          name: fileNameWithSuffix,
          downloadURL,
        };
      } catch (error) {
        throw new Error('Error during image upload');
      }
}

export const servisfinddevice = async(id)=>{
  const device = await devicefindrepositery(id)

  return device
}

export const updateDevicedetails = async (itemid, payload) => {
  const updatedevice = await updateDevice({ _id: itemid }, payload);
  return updatedevice;
};