import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.getCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    const car = this.carsService.getCarById(id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found `);
    }

    return car;
  }

  @Post()
  createCar(@Body() body: any) {
    const createCarStatus = this.carsService.createCar(body);
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
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    const updateCarStatus = this.carsService.updateCar(id, body);
    if (!updateCarStatus === true) {
      throw new BadRequestException('Error updating car', updateCarStatus);
    } else {
      return {
        statusCode: 200,
        message: 'Car updated successfully',
      };
    }
  }

  @Put(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    const deleteCarStatus = this.carsService.deleteCar(id);
    if (!deleteCarStatus === true) {
      throw new BadRequestException('Error deleting car', deleteCarStatus);
    } else {
      return {
        statusCode: 200,
        message: 'Car deleted successfully',
      };
    }
  }
}
