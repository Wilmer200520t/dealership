import { Controller, Param } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { error } from 'console';
import { stat } from 'fs';

@Controller('cars')
export class CarsController {
  private cars = ['toyota', 'ford', 'bmw', 'audi', 'mercedes'];
  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: number) {
    const model = this.cars[id];
    if (!model) {
      return {
        status: 404,
        message: `Car not found with id ${id}`,
      };
    }

    return {
      id: id,
      marca: this.cars[id],
    };
  }
}
