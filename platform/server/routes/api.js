
import indexCtrl from '../controllers/indexCtrl'
import detailCtrl from '../controllers/detailCtrl'


export default async (app)=>{


   app.get('/api/index', indexCtrl)
   app.get('/api/detail', detailCtrl)

}
