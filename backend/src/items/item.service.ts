import { Injectable } from '@nestjs/common';
import csvReader from 'src/utils/csv-reader';
import Item from './item.model';

@Injectable()
export class ItemService {
  async findAll() : Promise<Item[]> {
    return await csvReader('items')
  }

  async findById(itemId: string) : Promise<Item[]>{
    const data = await csvReader('items')
    return data.filter(({ id }) => id === itemId)
  }
}
