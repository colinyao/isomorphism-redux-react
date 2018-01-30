
import indexCtrl from '../controllers/indexCtrl'
import detailCtrl from '../controllers/detailCtrl'
import {Router} from 'express'

const router =Router()


router.get('/api/index', indexCtrl)
router.get('/api/detail', detailCtrl)

export default router
