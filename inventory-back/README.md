# inventory-back

Backend de inventario con Express y Clean Architecture.

## Estructura

- `domain/`: entidad y contrato del repositorio
- `application/`: casos de uso
- `infrastructure/controllers`: controladores
- `infrastructure/repositories`: repositorios Mongo y en memoria
- `infrastructure/routes`: rutas de la API
- `infrastructure/config`: composition root

## Instalar

```bash
npm install
```

## Variables de entorno

Copia `.env.example` como `.env`.

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/inventorydb
```

Si no configuras `MONGO_URI` o Mongo falla, el proyecto usa memoria para que puedas probarlo igual.

## Ejecutar

```bash
npm run dev
```

## Rutas

- `GET /api/products`
- `GET /api/products/id/:id`
- `GET /api/products/sku/:sku`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

## Ejemplo de body

```json
{
  "id": "p1",
  "name": "Teclado",
  "sku": "TEC-001",
  "price": 120000,
  "stock": 4
}
```
