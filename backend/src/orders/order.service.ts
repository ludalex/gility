import { Injectable } from '@nestjs/common';
import csvReader from 'src/utils/csv-reader';
import Order from './order.model';

@Injectable()
export class OrderService {
  async findAll() : Promise<Order[]> {
    return await csvReader('orders')
  }

  async findById(orderId: string) : Promise<Order[]>{
    const data = await csvReader('orders')
    return data.filter(({ id }) => id === orderId)
  }

  async findByUser(id: string) : Promise<Order[]>{
    const data = await csvReader('orders')
    return data.filter(({ userId }) => userId === id)
  }
}
