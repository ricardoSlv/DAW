import { Router } from 'express';
const router = Router();

import * as Paragraph from '../controllers/paragraph.js'

/* GET home page. */
router.get('/paras', (_req, res, _next) => {
  Paragraph.list()
    .then(data => res.status(200).jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

router.post('/paras', (req, res, _next) => {
  Paragraph.insert(req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

router.delete('/paras/:id', (req, res, _next) => {
  Paragraph.remove(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(err => res.status(404).jsonp(err));
});

router.put('/paras/:id', (req, res, _next) => {
  Paragraph.edit(req.params.id, req.body)
    .then(data => res.status(201).jsonp(data))
    .catch(err => res.status(500).jsonp(err));
});

export default router;
