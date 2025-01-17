import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @MinLength(2)
  @IsOptional()
  readonly marca: string;

  @IsString()
  @MinLength(2)
  @IsOptional()
  readonly model: string;

  @IsNumber()
  @IsOptional()
  @Min(1900, { message: 'Year must be greater than 1900' })
  @Max(2100, { message: 'Year must be less than 2100' })
  readonly year: number;
}
