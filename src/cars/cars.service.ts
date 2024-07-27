import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v7 as uuidv4 } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    //{
    //  id: uuidv4(),
    //  marca: 'toyota',
    //  model: 'corolla',
    //  year: 2020,
    //}
  ];

  public getCars() {
    return this.cars;
  }

  public getCarById(id: string) {
    const carFind = this.cars.find((car) => car.id == id);
    return carFind;
  }

  public createCar(body: any) {
    try {
      this.cars.push(body);
      return true;
    } catch (error) {
      return error;
    }
  }

  public updateCar(id: string, body: any) {
    try {
      const carIndex = this.cars.findIndex((car) => car.id === id);
      if (!carIndex) new Error('Car not found');
      if (body.marca) this.cars[carIndex].marca = body.marca;
      if (body.model) this.cars[carIndex].model = body.model;
      if (body.year) this.cars[carIndex].year = body.year;
      return this.getCarById(id);
    } catch (error) {
      return error;
    }
  }

  public deleteCar(id: string) {
    try {
      if (!this.getCarById(id)) throw new Error('Car not found');

      this.cars = this.cars.filter((car) => car.id !== id);
      return true;
    } catch (error) {
      return error.message;
    }
  }
}
