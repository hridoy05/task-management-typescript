import { Router, Response, Request } from 'express';
import { TaskController } from './tasks.controller';

export const tasksRouter: Router = Router();

tasksRouter.get(
  '/tasks',
  async (_req: Request, res: Response) => {
    const taskController = new TaskController();
    const allTasks = await taskController.getAll();
    res.json(allTasks).status(200);
  },
);
