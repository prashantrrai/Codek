const userModel = require('../models/user.models')

const addHandler = async (req, res) => {
  try {
    const { fullname, email, phone, address1, address2, country, state, city, zip } = req.body

    const userData = {
      fullname, email, phone, address1, address2, country, state, city, zip
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(404).json({
        success: false,
        message: 'Email already registered',
      });
    }

    const registrationData = await userModel.create(userData)

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: registrationData,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: error.message })
  }
}


const getHandler = async (req, res) => {
  try {
    const userdata = await userModel.find({});

    res.status(201).json({
      success: true,
      data: userdata,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: error.message })
  }
}



const deleteHandler = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


const userdataHandler = async (req, res) => {
  try {

    const userdata = await userModel.find({});

    res.status(201).json({
      success: true,
      userdata: userdata,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, error: error.message })
  }
}

const updateHandler = async (req, res) => {
  try {
    const id = req.params.id;

    const {
      fullname,
      email,
      phone,
      address1,
      address2,
      country,
      state,
      city,
      zip,
    } = req.body;

    const updatedFields = {
      fullname,
      address1,
      address2,
      country,
      state,
      city,
      zip,
      email,
      phone
    };

    const updateData = await userModel.findByIdAndUpdate(id, updatedFields, {
      new: true
    });

    if (!updateData) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(201).json({
      success: true,
      message: 'Account updated successfully',
      updateData
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = { addHandler, getHandler, deleteHandler, updateHandler };