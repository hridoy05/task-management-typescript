import { AppDataSource } from '../..';
import { Task } from './tasks.entity';
import { instanceToPlain } from 'class-transformer';
export class TaskController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}
  public async getAll(): Promise<Task[] | undefined> {
    // Declare a variable to hold all tasks
    let allTasks: Task[] | undefined;
    //fetch all tasks using the repository
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
      //convert the task instance to an array
      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    } catch (error) {
      console.log(error);
    }
  }
}
