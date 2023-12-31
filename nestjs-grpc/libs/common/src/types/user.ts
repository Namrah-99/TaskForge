/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage2 = "user";

export interface UserPaginationDto {
  page: number;
  skip: number;
}

export interface UpdateUserDto {
  id: string;
  username: string;
  age: number;
  phoneNumber: string;
  role: string;
  socialMedia: SocialMedia2 | undefined;
  subscribed: boolean;
}

export interface FindOneUserDto {
  id: string;
}

export interface EmptyUser {
}

export interface Users {
  users: User2[];
}

export interface CreateUserDto {
  email: string;
  password: string;
  username?: string | undefined;
  age?: number | undefined;
  phoneNumber?: string | undefined;
  role?: string | undefined;
  subscribed?: boolean | undefined;
}

export interface User2 {
  id: string;
  email: string;
  password: string;
  username: string;
  age: number;
  subscribed: boolean;
  socialMedia?: SocialMedia2 | undefined;
  phoneNumber: string;
  role: string;
}

export interface SocialMedia2 {
  twitterUri?: string | undefined;
  fbUri?: string | undefined;
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  createUser(request: CreateUserDto): Observable<User2>;

  findAllUser(request: EmptyUser): Observable<Users>;

  findOneUser(request: FindOneUserDto): Observable<User2>;

  updateUser(request: UpdateUserDto): Observable<User2>;

  removeUser(request: FindOneUserDto): Observable<User2>;
}

export interface UserServiceController {
  createUser(request: CreateUserDto): Promise<User2> | Observable<User2> | User2;

  findAllUser(request: EmptyUser): Promise<Users> | Observable<Users> | Users;

  findOneUser(request: FindOneUserDto): Promise<User2> | Observable<User2> | User2;

  updateUser(request: UpdateUserDto): Promise<User2> | Observable<User2> | User2;

  removeUser(request: FindOneUserDto): Promise<User2> | Observable<User2> | User2;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createUser", "findAllUser", "findOneUser", "updateUser", "removeUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
