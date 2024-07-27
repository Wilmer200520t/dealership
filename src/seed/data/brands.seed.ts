import { Brand } from 'src/brands/entities/brand.entity';
import { v7 as uuidv7 } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  { id: uuidv7(), name: 'Toyota', createdAt: new Date() },
  { id: uuidv7(), name: 'Ford', createdAt: new Date() },
  { id: uuidv7(), name: 'Chevrolet', createdAt: new Date() },
  { id: uuidv7(), name: 'Nissan', createdAt: new Date() },
  { id: uuidv7(), name: 'Volkswagen', createdAt: new Date() },
  { id: uuidv7(), name: 'Honda', createdAt: new Date() },
  { id: uuidv7(), name: 'Hyundai', createdAt: new Date() },
  { id: uuidv7(), name: 'Mercedes-Benz', createdAt: new Date() },
  { id: uuidv7(), name: 'BMW', createdAt: new Date() },
  { id: uuidv7(), name: 'Audi', createdAt: new Date() },
  { id: uuidv7(), name: 'Kia', createdAt: new Date() },
  { id: uuidv7(), name: 'Mazda', createdAt: new Date() },
  { id: uuidv7(), name: 'Subaru', createdAt: new Date() },
  { id: uuidv7(), name: 'Jeep', createdAt: new Date() },
  { id: uuidv7(), name: 'Ram', createdAt: new Date() },
];
