import { IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}