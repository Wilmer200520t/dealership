import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 0,
      marca: 'toyota',
      model: 'corolla',
      year: 2020,
    },
    {
      id: 1,
      marca: 'ford',
      model: 'fiesta',
      year: 2019,
    },
    {
      id: 2,
      marca: 'bmw',
      model: 'serie 3',
      year: 2021,
    },
    {
      id: 3,
      marca: 'audi',
      model: 'a4',
      year: 2022,
    },
    {
      id: 4,
      marca: 'mercedes',
      model: 'clase c',
      year: 2023,
    },
  ];

  public getCars() {
    return this.cars;
  }

  public getCarById(id: number) {
    const carFind = this.cars.find((car) => car.id === id);
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

  public updateCar(id: number, body: any) {
    try {
      const carIndex = this.cars.findIndex((car) => car.id === id);
      this.cars[carIndex] = body;
      return true;
    } catch (error) {
      return error;
    }
  }

  public deleteCar(id: number) {
    try {
      this.cars = this.cars.filter((car) => car.id !== id);
      return true;
    } catch (error) {
      return error;
    }
  }
}
