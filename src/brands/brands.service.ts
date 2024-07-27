import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v7 as uuidv7 } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    //{ id: uuidv7(), name: 'Toyota', createdAt: new Date() },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand = {
      id: uuidv7(),
      ...createBrandDto,
      createdAt: new Date(),
    };

    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand not found with id ${id}`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brandFind = this.findOne(id);
    this.brands = this.brands.map((brand) =>
      brand.id === id
        ? { ...brandFind, ...updateBrandDto, updatedAt: new Date() }
        : brand,
    );
    return brandFind;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeed(brands: Brand[]) {
    this.brands = brands;
  }
}
