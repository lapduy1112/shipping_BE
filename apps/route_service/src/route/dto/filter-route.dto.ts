import { IsOptional, IsString, IsInt, Min, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterRouteDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsString()
  search?: string;
  @IsOptional()
  @IsString()
  order?: 'ASC' | 'DESC';
  @IsOptional()
  @IsString()
  sortBy?: 'createdAt' | 'startPort' | 'endPort' | 'updatedAt' | 'status';

  @IsOptional()
  @IsString()
  sortOrder?: 'ASC' | 'DESC';
  @IsOptional()
  @IsString()
  status?: 'Available' | 'Transit' | 'Completed';
  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
