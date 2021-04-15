import { Router } from 'express'
const router = Router();

import {createLibro, getLibro, getLibros, borrarLibro, actualizaLibro} from '../controladores/post.controlador'

router.route('/')
.get(getLibros)
.post(createLibro);

router.route('/:libroId')
.get(getLibro)
.delete(borrarLibro)
.put(actualizaLibro);

export default router;