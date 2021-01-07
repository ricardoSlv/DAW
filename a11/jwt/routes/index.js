import { Router } from 'express';
const router = Router();

function checkAdmin(req, res, next) {
  if(req.user.level==='admin')
    next()
  else
    res.status(401).jsonp({ error: "Not allowed" })
}

router.get('/infoSecreta', checkAdmin, (_req, res, _next)=>{
  res.status(200).jsonp({data: "Lista de qql coisa secreta..."})
  res.send()
})

router.get('*', function(_req, res, _next) {
  res.status(200).jsonp({data: "Lista de qql coisa..."})
  res.send()
});

export default router;
