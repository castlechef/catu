import { Router, Request, Response } from 'express';
import {UnisDBHandler} from "../models/unis";

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  
  UnisDBHandler.getUnis(unis => {
    res.send(unis);
  });
  
});

router.post('/', (req: Request, res: Response) => {
  console.log(req);
  res.end();
});

export const UnisRouter: Router = router;