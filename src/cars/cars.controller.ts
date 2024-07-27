import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dtos';
import { Car } from './interfaces/car.interface';
import { v7 as uuidv7 } from 'uuid';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.getCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    const car = this.carsService.getCarById(id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found `);
    }

    return car;
  }

  @Post()
  createCar(@Body() carDto: CreateCarDto) {
    const newCar: Car = {
      id: uuidv7(),
      marca: carDto.marca,
      model: carDto.model,
      year: carDto.year,
    };

    const createCarStatus = this.carsService.createCar(newCar);
    if (!createCarStatus === true) {
      throw new BadRequestException('Error creating car', createCarStatus);
    } else {
      return {
        statuCode: 201,
        message: 'Car created successfully',
      };
    }
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() carDto: UpdateCarDto,
  ) {
    const updateCarStatus = this.carsService.updateCar(id, carDto);
    if (updateCarStatus === false) {
      throw new BadRequestException('Error updating car', updateCarStatus);
    } else {
      return {
        statusCode: 200,
        message: 'Car updated successfully',
        data: updateCarStatus,
      };
    }
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    const deleteCarStatus = this.carsService.deleteCar(id);
    if (deleteCarStatus !== true) {
      throw new BadRequestException('Error deleting car', deleteCarStatus);
    } else {
      return {
        statusCode: 200,
        message: 'Car deleted successfully',
      };
    }
  }
}
