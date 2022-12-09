import { Controller, Get, Param } from '@nestjs/common';
import Item from './item.model';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getItems() {
    return await this.itemService.findAll();
  }

  @Get(':id')
  async getItem(@Param('id') id: string): Promise<Item[]> {
    return await this.itemService.findById(id);
  }
}