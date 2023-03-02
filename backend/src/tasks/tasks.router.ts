import { Router, Response, Request } from 'express';
import { TaskController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get(
  '/tasks',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_req: Request, res: Response) => {
    const taskController = new TaskController();
    taskController.getAll();
  },
);
