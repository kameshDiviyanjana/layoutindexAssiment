import express from 'express';
import {addevice,findDevices,DeleteDevices,displaySingleDevices,imageuplabe,findDevicesbyid,uptade} from '../controller/devices.js'
import multer from 'multer'
const devices  = express.Router()
const upload = multer({storage :multer.memoryStorage()})

devices.post('/',addevice)
devices.get('/',findDevices)
devices.delete('/:id',DeleteDevices)
devices.post('/image',upload.single('images')  ,imageuplabe  );
devices.patch('/:id',displaySingleDevices)
devices.get('/onedevice/:id',findDevicesbyid)
devices.put('/update/:id',uptade)
export default devices