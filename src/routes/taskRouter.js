const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/taskController');

router.post('/store/notificacao_ofertas', storeTask);

module.exports = router;