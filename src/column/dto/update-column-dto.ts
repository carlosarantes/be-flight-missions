import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateColumnDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string
} 