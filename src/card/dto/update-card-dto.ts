import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateCardDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string

  @IsString()
  readonly description: string
  
  @IsNumber()
  readonly columnId: number
  
  @IsString()
  readonly status: string
} 