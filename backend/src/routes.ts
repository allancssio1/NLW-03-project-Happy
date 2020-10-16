import {Router} from 'express'
import OrophanagesConstrollers from './controllers/OrphanagesControllers'
import multer from 'multer'
import uploadConfig from './config/uploads'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', OrophanagesConstrollers.index)
routes.get('/orphanage/:id', OrophanagesConstrollers.show)
routes.post('/orphanages', upload.array('images'), OrophanagesConstrollers.create)

export default routes