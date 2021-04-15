import { Router } from 'express'
const router = Router();

import {createLibro, getLibro, getPosts, borrarLibro} from '../controladores/post.controlador'

router.route('/')
.get(getPosts)
.post(createLibro);

router.route('/:postId')
.get(getLibro)
.delete(borrarLibro);

export default router;