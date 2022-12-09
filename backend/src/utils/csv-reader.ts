import * as csv from 'csv-parser';
import * as fs from 'fs';
import Item from 'src/items/item.model';
import Order from 'src/orders/order.model';
import User from 'src/users/user.model';

function csvReader(model: 'orders'): Promise<Order[]> 
function csvReader(model: 'users'): Promise<User[]> 
function csvReader(model: 'items'): Promise<Item[]> 
function csvReader(model: 'orders' | 'users' | 'items') {
  return new Promise((resolve, reject) => {
    let data = [];
  
    // Read the CSV file corresponding to the specified table
    fs.createReadStream(`./data/${model}.csv`)
    .pipe(csv())
    .on('data', (row) => data.push(row))
    .on('end', () => {
      console.log(data);
      
      return resolve(data);    
    })
    .on('error', (err) => {      
      return reject(err);    
    });
  })
}

export default csvReader;