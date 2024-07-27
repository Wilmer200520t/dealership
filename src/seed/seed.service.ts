import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService,
  ) {}
  populateDB() {
    this.CarsService.fillCarsWithSeed(CARS_SEED);
    this.BrandsService.fillBrandsWithSeed(BRANDS_SEED);
    return `SEED executed successfully`;
  }
}
