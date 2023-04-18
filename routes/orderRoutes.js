const express = require("express");
const admin_checker = require('../helpers/admin_checker')
// const {
//   getAllUsers,
//   registerController,
//   loginController,
// } = require("../controllers/userController");

const {
    getAllOrdersController,
    orderRegisterController,
    updateOrderController,
    deleteOrderController,
    singleOrderControlller
} = require("../controllers/orderController");

//router object
const router = express.Router();

// // GET ALL Order || GET
router.get("/orders_all", admin_checker, getAllOrdersController);

// CREATE ORDER || POST
router.post("/register", orderRegisterController);

//PUT || update Order
router.put("/update_order/:id", admin_checker, updateOrderController);

//DELETE || delete Order
router.delete("/delete_order/:id", admin_checker, deleteOrderController);

//GET || Single Blog Details
router.get("/get_order/:id", admin_checker, singleOrderControlller);

//LOGIN || POST
// router.post("/login", loginController);

module.exports = router;