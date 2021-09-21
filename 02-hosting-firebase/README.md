
Así que acabas de crear el nuevo Facebook a través de React y te preguntas dónde hospedar tu maravilla de aplicación. Ciertamente, opciones hay muchas, pero el día de hoy revisaremos cómo aprovechar el servicio de hosting que nos ofrece Firebase. \
\
Para quienes no lo sepan, Firebase es un **BaaS** (Backend as a service). Personalmente, debo admitir que es un servicio que amo y al cual recomiendo que le eches un vistazo. Facilita mucho la vida a quienes se dedican al front, puesto que ofrece servicios como base de datos, autenticación, hospedaje, analytics y más.

Pero sin más relleno, comencemos con este tutorial.

## Requisitos

Para poder hospedar tu aplicación de React a través de Firebase hosting necesitarás una cuenta de Google. Con tu sesión iniciada, debes ir a <https://firebase.google.com/> y de ahí dirigirte a la consola de Firebase haciendo clic en alguno de los botones señalados. Aunque pensándolo bien, puedes dirigirte de manera directa a <https://console.firebase.google.com/>



## Crear proyecto

Una vez en la consola de administración de Firebase, será necesario crear un proyecto. Para esto, bastará con hacer clic en el botón gigante que dice **crear proyecto** y elegir un nombre. Es importante resaltar que al crear un proyecto en Firebase estamos también creando un proyecto en Google Cloud. La ventaja es es la facilidad de uso que nos permite la interfaz de Firebase.

## Firebase Hosting

Tras haber creado el proyecto, Firebase nos redigirá hacia el panel de administración. En él, encontraremos del lado izquierdo un menú de opciones y servicios de entre los cuales, en **Compilación** encontramos el servicio de Hosting (Hospedaje) tal como se muestra en la siguiente imagen.



## Configuración de Firebase Hosting

Después de haber hecho clic en la opción de Hosting, encontrarás un botón en la página que dice **comenzar**. Haz clic en él y tendrás una pantalla en blanco con los 3 pasos necesarios para configurar el hospedaje dentro de Firebase.

### 1. Instalar Firebase CLI

Lo primero es instalar las herramientas de Firebase para la terminal de comandos (CLI - Command Line Interface). Para ello necesitarás abrir la terminal (si tu editor es Visual Studio Code puedes acceder a su terminal integrada con el comando <kbd> Ctrl </kbd> + <kbd> Shift </kbd> + <kbd> ` </kbd>), así como necesitarás tambien tener instalado NodeJS para la administración de paquetes (si no tienes node instalado puedes descargarlo desde <https://nodejs.org/>).

Una vez abierta la terminal de comando, pega la siguiente línea y presiona <kbd>Enter</kbd> para realizar su instalación:

`npm install -g firebase-tools`

### 2. Inicializar el proyecto

Para hospedar tu aplicación en Firebase, es necesario que esté configurada como un proyecto de Firebase. Para ello necesitarás iniciar sesión en tu cuenta de google con el comando:

`firebase login`

Serás redirigido a una venta para que elijas la cuenta de Google que quieres utilizar, así como ingresar tu contraseña según sea necesario. Después de que hayas logrado acceder, ingresa el siguiente comando en la terminal y presiona enter:

`firebase init`

Este comando comenzará un proceso en el cual tendrás que elegir las siguientes opciones:

Are you ready to proceed? - Y

Hosting: configure files for Firebase Hosting - (marca la opción con <kbd> Espacio </kbd> y luego presiona <kbd> Enter </kbd>

Use an existing project - (elige el proyecto que acabas de crear en la consola de Firebase)

What do you want to use as your public directory? - Dado que estamos configurando el hospedaje para una aplicación de react, escribe en la terminal **build**

Configure as a single-page app? - elige acorde a tu aplicación

Set up automatic builds and deploys with github? - elige acorde a tu proceso de desarrollo, pero si tienes prisa elige N

### 3. Build y deploy

Firebase creará por defecto una carpeta **build** en caso de que no exista en tu aplicación. De ser así, necesitarás crearla a través del comando `npm run build` o `yarn build`. Una vez que se haya construido la aplicación, estamos listos para "deployar" (desplegar) nuestra aplicación. Para ello ejecuta `firebase deploy` en la terminal de comandos y con ello habremos terminado.

Encontrarás en la terminal información de la url donde quedó hospedado tu proyecto. Si quieres configurar el hospedaje, por ejemplo agregar un dominio personalizado, puedes hacerlo desde la consola de firebase: Compilación -> Hosting.
