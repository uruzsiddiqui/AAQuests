import express from "express";

import { login, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from "../controllers/users.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

export default router;


// import express from "express"
// import  {login,signup} from '../controller/auth.js'
// import { getAllusers,updateProfile } from "../controller/users.js";
// import auth from "../middleware/auth.js"

// const router=express.Router();

// router.post("/signup",signup);
// router.post("/login",login);

// router.get("/getallusers",getAllusers)

// router.patch("/update/:id",auth,updateProfile)


// export default router;