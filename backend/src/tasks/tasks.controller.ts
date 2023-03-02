import { validationResult } from 'express-validator';
import { AppDataSource } from '../..';
import { Task } from './tasks.entity';
import { Request, Response } from 'express';

import { instanceToPlain } from 'class-transformer';

class TaskController {
  //Method for get route
  public async getAll(
    req: Request,
    res: Response,
  ): Promise<Response> {
    // Declare a variable to hold all tasks
    let allTasks: Task[] | undefined = undefined;
    //fetch all tasks using the repository
    try {
      allTasks = await AppDataSource.getRepository(
        Task,
      ).find({
        order: {
          date: 'ASC',
        },
      });
      //convert the task instance to an array
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);
    } catch (_error) {
      return res
        .json({ error: 'Internal server error' })
        .status(500);
    }
  }

  //Method for the post route

  public async create(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //Create a new instance of a task
    const newtask = new Task();
    newtask.title = req.body.title;
    newtask.date = req.body.date;
    newtask.description = req.body.description;
    newtask.priority = req.body.priority;
    newtask.status = req.body.status;

    //Add the required properties to the Task object
    let createTask: Task;

    try {
      createTask = await AppDataSource.getRepository(
        Task,
      ).save(newtask);
      //Convert the task instance to an object
      createTask = instanceToPlain(createTask) as Task;
      return res.json(createTask).status(201);
    } catch (error) {
      return res
        .json({ error: 'Internal server error' })
        .status(500);
    }
    //Add the new task to the database
  }
}

export const taskController = new TaskController();
