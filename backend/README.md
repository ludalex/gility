
## Run `backend` the project


```bash
cd backend
yarn
yarn start
```
  

Try out the API at [http://localhost:3000](http://localhost:3000) with the following CURL samples.

All endpoints are protected by JWT authentication, you can use the following pre-signed JWT:
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJsdWRhbGV4IiwiaWF0IjoxNTE2MjM5MDIyfQ.f7VDQkMyevNwXAWPzaB3B_VrpRfHetSuSGxaoKeAwnc`

#### GET /orders
_fetches all orders_
```
curl --location --request GET 'localhost:3000/orders' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJsdWRhbGV4IiwiaWF0IjoxNTE2MjM5MDIyfQ.f7VDQkMyevNwXAWPzaB3B_VrpRfHetSuSGxaoKeAwnc'
```
The same can be done for `/users` and `/items` resources.


#### GET /orders/:id
_fetches specifc order by ID_

```
curl --location --request GET 'localhost:3000/orders/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJsdWRhbGV4IiwiaWF0IjoxNTE2MjM5MDIyfQ.f7VDQkMyevNwXAWPzaB3B_VrpRfHetSuSGxaoKeAwnc'
```
The same can be done for `/users` and `/items` resources.

#### GET /users/:id/orders
_fetches all orders given a specific user ID_

```
curl --location --request GET 'localhost:3000/users/1/orders' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJsdWRhbGV4IiwiaWF0IjoxNTE2MjM5MDIyfQ.f7VDQkMyevNwXAWPzaB3B_VrpRfHetSuSGxaoKeAwnc'
```