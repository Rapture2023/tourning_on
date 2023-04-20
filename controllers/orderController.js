const orderModel = require("../models/orderModel");

exports.getAllOrdersController = async (req, res) => {
    try {
      const orders = await orderModel.find({}).sort({ createdAt: -1 }); 
      if (!orders) {
        return res.status(200).send({
          success: false,
          message: "Orders Not Found",
        });
      }
      return res.status(200).send({
        success: true,
        OrderCount: orders.length,
        message: "All Orders lists",
        orders,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error WHile Getting Orders",
        error,
      });
    }
  };

  //create register order
  exports.orderRegisterController = async (req, res) => {
    try {
      const { name, email, contact, pickup_point, date, time, package, service_type} = req.body;
      console.log(req.body);
      //validation
      if (!name || !contact || !pickup_point || !date || !time || !package || !service_type) {
        return res.status(400).send({
          success: false,
          message: "Please Fill all the required fields",
        });
      }
   
  
      //save new order
      const completed = false;
      const order = new orderModel({ name, email, contact, pickup_point, date, time, package, service_type, completed });
      await order.save();
      return res.status(201).send({
        success: true,
        message: "New Order Created",
        order,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "Error In Registering the order",
        success: false,
        error,
      });
    }
  };  


  //Update Order
exports.updateOrderController = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, contact, pickup_point, date, time, package, service_type, completed } = req.body;
      const order = await orderModel.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      return res.status(200).send({
        success: true,
        message: "Order Updated!",
        order,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Error WHile Updating Order",
        error,
      });
    }
  };


  //Delete Order
exports.deleteOrderController = async (req, res) => {
    try {
      const order = await orderModel.findByIdAndDelete(req.params.id);
      return res.status(200).send({
        success: true,
        message: "Order Deleted!",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Erorr WHile Deleteing Order",
        error,
      });
    }
  };


//GET Single Order
exports.singleOrderControlller = async (req, res) => {
    try {
      const order = await orderModel.findById(req.params.id);
  
      if (!order) {
        return res.status(404).send({
          success: false,
          message: "Order not found with this id",
        });
      }
      return res.status(200).send({
        success: true,
        message: "Single Order",
        order,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "error in user order fetching!",
        error,
      });
    }
  };  
  
