/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage1 = "task";

export interface TaskPaginationDto {
  page: number;
  skip: number;
}

export interface UpdateTaskDto {
  id: string;
  description: string;
  estimatedTime: number;
  completed: boolean;
  category: Category | undefined;
}

export interface FindOneTaskDto {
  id: string;
}

export interface EmptyTask {
}

export interface Tasks {
  tasks: Task[];
}

export interface CreateTaskDto {
  description: string;
  estimatedTime: number;
  category: Category | undefined;
}

export interface Task {
  id: string;
  description: string;
  estimatedTime: number;
  completed: boolean;
  category: Category | undefined;
}

export interface Category {
  name?: string | undefined;
  subCategory?: string | undefined;
}

export const TASK_PACKAGE_NAME = "task";

export interface TaskServiceClient {
  createTask(request: CreateTaskDto): Observable<Task>;

  findAllTask(request: EmptyTask): Observable<Tasks>;

  findOneTask(request: FindOneTaskDto): Observable<Task>;

  updateTask(request: UpdateTaskDto): Observable<Task>;

  removeTask(request: FindOneTaskDto): Observable<Task>;
}

export interface TaskServiceController {
  createTask(request: CreateTaskDto): Promise<Task> | Observable<Task> | Task;

  findAllTask(request: EmptyTask): Promise<Tasks> | Observable<Tasks> | Tasks;

  findOneTask(request: FindOneTaskDto): Promise<Task> | Observable<Task> | Task;

  updateTask(request: UpdateTaskDto): Promise<Task> | Observable<Task> | Task;

  removeTask(request: FindOneTaskDto): Promise<Task> | Observable<Task> | Task;
}

export function TaskServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createTask", "findAllTask", "findOneTask", "updateTask", "removeTask"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("TaskService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("TaskService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const TASK_SERVICE_NAME = "TaskService";
