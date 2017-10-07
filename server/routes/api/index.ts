import speakerRoutes from './speakers';
import sessionRoutes from './sessions';

import { Router } from 'express';
let router = Router();

router.use(speakerRoutes);
router.use(sessionRoutes);
export default router;