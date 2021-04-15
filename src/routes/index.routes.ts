import { Router } from 'express'
import { indexWelcome } from '../controladores/index.controlador'
const router = Router();

router.route('/')
.get(indexWelcome)
export default router;