import { Router } from 'express';
const router = Router();


router.get('/', function(_req, res,) {
  res.render('index')
});

router.get('/protegida', checkAuthenticated, function(req, res,) {
  res.render('protegida',{utilizador: req.user})
});

function checkAuthenticated(req,res,next){
  if(req.isAuthenticated())
    next()
  else
    res.redirect('/users/login')
}

export default router;
