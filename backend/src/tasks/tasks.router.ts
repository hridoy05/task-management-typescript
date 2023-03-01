import { Router, Response, Request } from 'express';

export const tasksRouter: Router = Router();

tasksRouter.get(
  '/tasks',
  (_req: Request, res: Response) => {
    res.send('Hello  from typescript project');
  },
);
