const mongoose = require("mongoose");



const dataSchema = mongoose.Schema(
    {
      tempData: {
        type: Array, 
        items: Number,
      },
      humidityData: {
        type: Array, 
        items: Number,
      },
    },
    {
      timestamps: true,
    }
  );


const SensorData = mongoose.model("SensorData", dataSchema);


module.exports = { SensorData };