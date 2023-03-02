import { createValidator } from './tasks.validator';
import { Router, Response, Request } from 'express';
import { TaskController } from './tasks.controller';
import { validationResult } from 'express-validator';
export const tasksRouter: Router = Router();

tasksRouter.get(
  '/tasks',
  async (_req: Request, res: Response) => {
    const taskController = new TaskController();
    const allTasks = await taskController.getAll();
    res.json(allTasks).status(200);
  },
);

tasksRouter.post(
  '/tasks',
  createValidator,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
  },
);
