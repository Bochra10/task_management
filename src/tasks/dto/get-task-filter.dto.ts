/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task.model';

export class GetTaskFilterDto {
  status?: TaskStatus;
  search?: string;
}
