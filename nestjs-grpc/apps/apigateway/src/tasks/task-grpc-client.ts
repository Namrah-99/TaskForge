import { Client, ClientGrpc } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';
import { grpcClientOptions } from './grpc-client.options';
import { TASK_SERVICE_NAME } from '@app/common';

@Injectable()
export class TaskGrpcClient {
  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  public getUserServiceClient(): any {
    return this.client.getService(TASK_SERVICE_NAME);
  }
}
