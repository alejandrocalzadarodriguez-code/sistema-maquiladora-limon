# Sistema Maquiladora Limón

Sistema Maquiladora Limón es una aplicación backend desarrollada en **Node.js** con **Express** y **Sequelize**, diseñada para gestionar proveedores, productos, lotes, inventario, control de calidad y reportes en una maquiladora.

## 🚀 Características
- API RESTful con Express.
- Conexión a base de datos **PostgreSQL** mediante Sequelize.
- Autenticación con **JWT** y encriptación de contraseñas con **bcryptjs**.
- Validación de datos con **express-validator**.
- Arquitectura modular (rutas, controladores, modelos, middlewares).

## 📂 Estructura del Proyecto
```
src/
 ├── config/            # Configuración de la base de datos
 ├── controllers/       # Lógica de negocio
 ├── middlewares/       # Autenticación y validaciones
 ├── models/            # Modelos Sequelize
 ├── routes/            # Definición de rutas
 └── server.js          # Punto de entrada del servidor
```

## ✅ Requisitos
- Node.js >= 18
- PostgreSQL >= 13

## ⚙️ Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/sistema-maquiladora-limon.git
cd sistema-maquiladora-limon

# Instalar dependencias
npm install
```

## 🔐 Configuración
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_NAME=nombre_base_datos
DB_DIALECT=postgres
JWT_SECRET=tu_secreto_jwt
```

## ▶️ Ejecución
```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start
```

## 📌 Notas
- **Autenticación**: Usa JWT para proteger rutas. Middleware en `middlewares/auth.js`.
- **Base de datos**: Configuración en `src/config/database.js`. Ejecuta `sequelize.sync()` para sincronizar modelos.

## 🛠 Dependencias principales
- express
- sequelize
- pg, pg-hstore
- bcryptjs
- jsonwebtoken
- dotenv

## 📄 Licencia
Este proyecto está bajo la licencia ISC.
