import {Router} from "express";
import authRouter from "./authRouter";
import criarProvasRouter from "./criarProvas";
const router = Router();

router.use(authRouter);
router.use(criarProvasRouter)
export default router;