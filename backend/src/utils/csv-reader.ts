import * as csv from 'csv-parser';
import * as fs from 'fs';
import Item from 'src/items/item.model';
import Order from 'src/orders/order.model';
import User from 'src/users/user.model';

type ModelMap = {
  orders: Order
  users: User
  items: Item
}

function csvReader<T extends keyof ModelMap>(model: T) : Promise<ModelMap[T][]> {
    let data = [];
    
    return new Promise((resolve, reject) => {
      // Read the CSV file corresponding to the specified table
      fs.createReadStream(`./data/${model}.csv`)
      .pipe(csv())
      .on('data', (row) => data.push(row))
      .on('end', () => {        
        resolve(data as ModelMap[T][]); 
      })
      .on('error', (err) => {      
        reject(err);    
      });
    })
}

export default csvReader;