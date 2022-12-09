import { Injectable } from '@nestjs/common';
import csvReader from 'src/utils/csv-reader';
import User from './user.model';

@Injectable()
export class UserService {
  async findAll() : Promise<User[]> {
    return await csvReader('users')
  }

  async findById(userId: string) : Promise<User[]>{
    const data = await csvReader('users')
    return data.filter(({ id }) => id === userId)
  }
}
