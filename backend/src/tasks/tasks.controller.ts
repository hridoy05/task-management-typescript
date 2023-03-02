import { AppDataSource } from '../..';
import { Task } from './tasks.entity';
export class TaskController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}
  public async getAll(): Promise<Task[] | undefined> {
    // Declare a variable to hold all tasks
    let allTasks: Task[] | undefined = undefined;
    //fetch all tasks using the repository
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
      console.log(allTasks);
    } catch (error) {
      console.log(error);
    }
    return allTasks;
  }
}
