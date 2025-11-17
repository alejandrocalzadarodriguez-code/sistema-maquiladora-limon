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


## ⚠️ Consideraciones para la Ejecución
## Para correr y probar esta aplicación, asegúrate de cumplir con los siguientes puntos:
## 1. Tecnologías requeridas

Node.js (v18+) y npm instalados.
Git para clonar el repositorio.

## Instalación en Windows:

Descarga Node.js desde nodejs.org (versión LTS recomendada).
Ejecuta el instalador, acepta la licencia y verifica la instalación:

node -v

## Para Git:

Descarga desde git-scm.com.
Instala y verifica:

git --version

## 2. Base de datos local
## Debes tener PostgreSQL instalado y preferentemente administrado con pgAdmin.

## Instalación:

Descarga desde postgresql.org.
Instala PostgreSQL Server y pgAdmin 4.
Configura la contraseña del usuario postgres (recomendado: root para coincidir con .env).
Puerto por defecto: 5432.

## Acceso con pgAdmin:

Abre pgAdmin, conecta el servidor y usa la contraseña definida.
Crea la base de datos maquiladora_limon.


## 3. Configuración de la base de datos

Importa el script SQL desde el enlace:
Backup maquiladora_limon.sql
En pgAdmin:

Abre Query Tool, carga el archivo .sql y ejecuta.


## Verifica que las tablas y datos se hayan creado.


## 4. Ejecución del sistema

Clona el repositorio:

git clone https://github.com/tu-usuario/sistema-maquiladora-limon.git
cd sistema-maquiladora-limonnpm install

Si seguiste los pasos anteriores, no necesitas modificar .env.
Ejecuta:

npm start

## 5. Pruebas con Postman
Usa Postman para probar los endpoints REST:
## Registro de usuario
POST http://localhost:3000/api/auth/register
Content-Type: application/json

## Login
POST http://localhost:3000/api/auth/login
Content-Type: application/json

## Consulta de proveedores
GET http://localhost:3000/api/proveedores/

## Registro de productos
POST http://localhost:3000/api/productos/
Content-Type: application/json

## Consulta de productos
GET http://localhost:3000/api/pr

## 🛠 Dependencias principales
- express
- sequelize
- pg, pg-hstore
- bcryptjs
- jsonwebtoken
- dotenv

## 📄 Licencia
Este proyecto está bajo la licencia ISC.
