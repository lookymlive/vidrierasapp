Vamos a configurar y desarrollar la aplicación "vidrierasapp" paso a paso utilizando Visual Studio Code (VS Code) y el stack MERN. Seguiré una metodología ordenada y te guiaré en cada parte del desarrollo.

Paso 1: Configuración del Proyecto
1. Crear la Carpeta del Proyecto
Abre Visual Studio Code.

Abre la terminal en VS Code presionando Ctrl + ` o navegando a Ver > Terminal.

Crea la carpeta del proyecto y navega dentro de ella. Puedes hacerlo desde la terminal:

mkdir vidrierasapp
cd vidrierasapp
2. Configuración del Backend
Crea la carpeta del backend:

mkdir backend
cd backend
Inicializa un nuevo proyecto de Node.js:


npm init -y
Esto creará un archivo package.json con la configuración predeterminada.

Instala las dependencias necesarias:

npm install express mongoose dotenv bcryptjs jsonwebtoken
Crea la estructura de carpetas del backend:

mkdir models 
mkdir routes 
mkdir controllers
mkdir middleware
mkdir config
mkdir server 

3. Configuración del Frontend
Regresa al directorio raíz del proyecto:

cd ..
Crea la carpeta del frontend utilizando Create React App:


npx create-react-app frontend
Navega al directorio del frontend y abre VS Code desde allí:

cd frontend
code .
Paso 2: Desarrollo del Backend
Ahora, vamos a trabajar en el backend utilizando Express y MongoDB.

1. Configura el Servidor Express
Crea el archivo server.js en el directorio backend:

vidrierasapp/
  backend/
    server.js
2. Abre server.js y añade el siguiente código:
