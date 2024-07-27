import { IsNumber, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @MinLength(2)
  readonly marca: string;

  @IsString()
  @MinLength(2)
  readonly model: string;

  @IsNumber()
  @Min(1900, { message: 'Year must be greater than 1900' })
  @Max(2100, { message: 'Year must be less than 2100' })
  readonly year: number;
}
