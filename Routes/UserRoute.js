import express from "express";
import { deleteUser, followUser, getAllUsers, getUser, UnFollowUser, updateUser } from "../Controllers/UserController.js";
import authMiddleWare from '../MiddleWare/authMiddleWar.js';

const router = express.Router();

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id', authMiddleWare, updateUser)
router.delete('/:id', authMiddleWare, deleteUser)
router.put('/:id/follow', authMiddleWare, followUser)
router.put('/:id/unfollow', authMiddleWare, UnFollowUser)
export default router;