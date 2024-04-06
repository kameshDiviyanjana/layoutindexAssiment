import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import devices from '../moduls/devices.js'
export const AddDevicesrepository = async(data)=>{

    const newDevice = (await new devices(data).save()).toObject();
       
    return newDevice;
     
}

export const getAllDevicesrepository = async()=>{

    const allcouse = await devices.find()
    return allcouse
     
}

export const removedevicerepository = async(id)=>{

    const cousert  = await devices.findByIdAndDelete(id)
   return cousert
     
}

export const displayDevicerepository = async(id)=>{

    try{

        const allcouse =await devices.find({devicesname:id});
        if (!allcouse) {
          console.log('No Devices found usdrr.');
           return null;
           
         }
        return allcouse
    }catch(error){
       console.log(error);
    }
    
    // const allcouse = await devices.find({_id:id});
    // return allcouse
}

export const uploadImageToStorage = async (buffer, fileNameWithSuffix) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${fileNameWithSuffix}`);
    const uploadTask = uploadBytesResumable(storageRef, buffer);
  
    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', (snapshot) => {
      }, (error) => {
        reject(error);
      }, async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      });
    });
  };

  export const devicefindrepositery = async(id)=>{
    try{

      const allcouse =await devices.find({_id:id});
      if (!allcouse) {
        console.log('No Devices found usdrr.');
         return null;
         
       }
      return allcouse
  }catch(error){
     console.log(error);
  }
  }


  export const updateDevice = async (filters, data) => {
    try {
      const deivce = await devices.findByIdAndUpdate(filters._id, data);
      if (!deivce) {
        logger.warn('No deivce found with filters:', filters);
        return null;
      }
      logger.info('deivce updated:', deivce);
      return order;
    } catch (e) {
      logger.error('error update device', e.message);
      throw e;
    }
  };