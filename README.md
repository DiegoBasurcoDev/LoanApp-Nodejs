# NodeJs API-RESTful TDD - Clean Architecture
Aplicación de prestamos realizada con fines de prueba de implementación de TDD y de Arquitectura Limpia.
---

  
#### Se inicia con...
```bash
  $ npm install
  $ npm start
  ```
  
#### Una vez iniciada presenta el siguiente prompt...
```bash
  Conexión con la base de datos establecida...
  API REST corriendo en http://localhost:3000
```

#### Necesita tener MongoDB instalado y funcionando


### END POINTS
---
```javascript
// (GET) Ruta para petición de usuarios
localhost:3000/api/users
// (GET) Ruta para acceder a usuarios según ID
localhost:3000/api/users/:id
// (POST) Ruta para creación de usuarios
localhost:3000/api/users
```