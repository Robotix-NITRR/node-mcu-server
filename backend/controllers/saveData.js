const { SensorData } = require("../models/dataModel");

const saveData = async (req, res) => {
  const { tempRecentData, humidityRecentData } = req.body;
  temp_data = [];
  humidity_data = [];
  const alreadyData = await SensorData.findOne();
  temp_data.push(tempRecentData);
  humidity_data.push(humidityRecentData)
  if (!alreadyData) {
    await SensorData.create(
      {
        tempData: temp_data,
        humidityData: humidity_data,
      },
      (err, doc) => {
        if (err) console.log(err);
        else {
          console.log("Document Saved Successfully");
          res.status(201).json({message: "Document Saved Successfully"})
        }
      }
    );
  } else {
    tempData = [...alreadyData.tempData, tempRecentData]
    humidityData = [...alreadyData.humidityData, humidityRecentData]
    const update = {humidityData, tempData}
    const doc = await SensorData.findByIdAndUpdate(alreadyData._id, update, { returnOriginal: false});
    res.status(200).json({message: "Document Updated Successfully"})
  }
};

const getData = async (req, res) => {
  SensorData.findOne((err, doc) => {
    if(err) {
        console.log(error)
        res.status(400).json(err)
    }
    console.log(doc);
    res.status(200).json(doc);
  });
};

module.exports = {
  saveData,
  getData,
};
