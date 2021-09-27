# Descripción #

Proyecto de desarrollo para demostración de operaciones CRUD en bases de datos MongoDB y Mysql mediante el uso de Node.js, TypeScript y Angular


# Requisitos #

Para el desarrollo del proyecto se han utilizado los siguientes componentes:
- npm (v6.14.15)
- node (v14.17.6)
- ng (v12.2.7)


# Instalación #

Descargar proyecto
```bash
git clone https://github.com/agargra/epelcrud.git
```

Una vez tengamos el proyecto instalado en local, procederemos a instalar las dependencias y arrancar las diferentes apps.
```bash
cd epelcrud
```

Dentro de la carpeta de proyecto hay dos apps: CrudServer (API) y CrudCliente (HTML para consumo de API)



## CrudServer ##

Esta aplicación, desarrollada con Node.js y TypeScript, implementa un API que servirá para realizar operaciones CRUD en dos bases de datos diferentes: MongoDB y Mysql.

Para iniciar el servicio CrudServer:

- Abrir un terminal e ir a la carpeta del proyecto (epelcrud)

- Entrar en la carpeta `CrudServer`
```bash
cd CrudServer
```

- Crear archivo .env con los valores correspondientes:
```code
PORT=3000

DB_MONGO_CONN="mongodb+srv://user:pass@host.mongo"
DB_MONGO_NAME="mongo_database_name"
DB_MONGO_COLLECTION="mongo_collection_name"

DB_MYSQL_HOST="host.mysql"
DB_MYSQL_NAME="mysql_database_name"
DB_MYSQL_USER="mysql-user"
DB_MYSQL_PASS="mysql_pass"
DB_MYSQL_TABLE="mysql_table_name"
```

- Ejecutar los siguientes comandos para instalar e iniciar servicio:
```bash
npm install
npm run build
npm start
```

Por defecto, CrudServer será accesible desde la siguiente URL: http://localhost:3000



## CrudClient ##

Esta aplicación, desarrollada con Angular, implementa un cliente HTML para consumir el API servido por CrudServer.

Para iniciar el servicio CrudClient:

- Abrir un terminal e ir a la carpeta del proyecto (epelcrud)

- Entrar en la carpeta `CrudClient`
```bash
cd CrudClient
```

- Ejecutar los siguientes comandos para instalar e iniciar servicio:
```bash
npm install 
ng serve
```

Por defecto, CrudClient será accesible desde la siguiente URL: http://localhost:4200



> Despliegue en servidor web

Se puede desplegar la aplicación en un servidor web aparte. Para ello, ejecutar el siguiente comando:
```bash
ng build
```
En la carpeta "dist/CrudClient" se generarán todos los archivos que se necesitan llevar a la carpeta raíz del servidor web
