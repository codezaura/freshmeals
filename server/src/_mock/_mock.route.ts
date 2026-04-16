import { Router } from "express";

import * as Controller from "./_mock.controller";

// -------------------------------------------------------------

const router = Router();

router.post("/", Controller.seed);

export default router;
