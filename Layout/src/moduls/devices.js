import mongoose from "mongoose";

const devicesmobule = new mongoose.Schema(
{

    devicesname: {
        type: String,
      
        required: [true, 'devicesname is required']
    },
    Address: {
        type: String,
      
        required: [true, 'Address is required']
    },
    serialnumber: {
        type: String,
      
        required: [true, 'serialnumber is required']
    },
    Type: {
        type: String,
      
        required: [true, 'Type is required'],
        enum: ['pos', 'kisok', 'signage'],
        default: 'pos'
    },
    Image: {
        type: String,
      
        required: [true, 'Image is required']
    },
    Status: {
        type: String,
      
        required: [true, 'Status is required'],
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    
  
}

)


const devices  = mongoose.model('Devices',devicesmobule)

export default devices