Cada imagen o archivo que cargas en línea debe almacenarse en algún lugar. Son los proveedores de almacenamiento en la nube (como Amazon y Google Cloud) quienes se encargan de almacenar esos archivos como "objetos" en "depósitos" (o **buckets**, como se conocen en inglés).

**Firebase Realtime Database**  y **Cloud Firestore** son excelentes para almacenar datos, pero no son tan buenos con los archivos. **Google Cloud Storage¨** (un servicio de Google Cloud Platform) está diseñado para almacenar y entregar estos archivos.

Firebase Storage es un "middleman" (intermediario) de G. Cloud Storage - uno, dicho sea de paso, bastante útil. 

En este tutorial aprenderás como utilizar Firebase Storage para cargar y descargar archivos con React - aunque en realidad podrías utilizar lo aquí aprendido con cualquier otro framework o incluso JavaScript puro. 

## Requisitos

Antes de entrar de lleno al código son necesarios un par de pasos previos. 

1. Tener [Node](https://nodejs.org/es/) instalado 
2. Instalar el [Firebase CLI](https://firebaseopensource.com/projects/firebase/firebase-tools/)

   `npm install -g firebase-tools`

**Nota:** Puedes encontrar [aquí](https://github.com/lasfito/tutoriales/tree/master/04-firebase-storage) el repositorio para este tutorial.

## Create-react-app

Lo primero es crear un proyecto de React con create-react-app. Este no es un tutorial para ello, si gustas puedes echar un vistazo a la documentación de [React](https://create-react-app.dev/docs/getting-started) 

O bien, puedes abrir alguna carpeta desde VS Code y en la terminal integrada ejecutar:

`npx create-react-app my-app`

Ojo:  **my-app** es el nombre de tu proyecto. 

Después, ejecuta `cd my-app` y estamos listos para comenzar (no olvides abrir el folder también desde vs code). 

## Proyecto Firebase

Lo segundo es crear un proyecto en la [consola de Firebase](console.firebase.google.com). Una vez creado (toma unos cuantos segundos), desde el panel lateral creamos una instancia de *Firebase* y una de *Storage*.


No olvides iniciar la instancia de Firestore en modo prueba.

## Inicializar Firebase en React

Lo siguiente es dirigirnos a VS Code y desde la terminal ejecutar:

 `firebase init` 

Esto iniciará un asistente, dentro del cual debemos:

1. Seleccionar las opciones de Firestore y Storage
2. Escoger la opción de proyecto existente (y elegir el que acabamos de crear)
3. Elige los nombres por defecto para los archivos de reglas

Con ello concluirá el asistente. El siguiente paso es crear una aplicación dentro de nuestro proyecto. Para ello, desde la terminal integrada ejecuta:

`firebase apps:create`

Elige la opción de web.
Esto creará y enlazará la app con tu proyecto. Recibirás en pantalla un comando para obtener las credenciales de acceso. Ejecútalo y copia las credenciales que se mostrarán en pantalla. 

Lo siguiente es crear un archivo en src y pegar ahí las credenciales. 

Guarda la función de las credenciales una constante llamada app y expórtala con  `export` escrito antes de la declaración:

```javascript
  export const app = firebase.initializeApp({
    "projectId": "fir-storage-lasfito",
    "appId": "1:713168404204:web:b359856ef667ac2287efc9",
    "storageBucket": "fir-storage-lasfito.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDj2SX0BXqftSsEjSw1JYz-xEiOaqdKAF8",
    "authDomain": "fir-storage-lasfito.firebaseapp.com",
    "messagingSenderId": "713168404204"
  });
```


Después, en ese mismo archivo, importa Firebase y los módulos de Firestore y Storage:



```javascript
import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"
```


No olvides instalar firebase con:
`npm install firebase`


Para terminar, modificaremos las reglas de Storage para nuestro proyecto. 
Dirígete el archivo de **storage.rules** y modifica el if para escribir y leer de la siguiente manera:

`allow read, write: if true`

Después de ello, carga los cambios ejecutando:

`firebase deploy --only storage`

## Carga de archivos con Firebase Storage

Primeramente, importa el archivo en el cual tienes tus credenciales de la siguiente manera: 

`import {app} from "./fb"`

Para cargar archivos utilizaremos una forma:

```javascript
<form onSubmit={submitHandler}  >
      <input type="file" onChange={archivoHandler} />
      <input type="text" name="nombre" placeholder="nombra tu archivo" />
      <button>Enviar </button>
       </form>
```

Nota que en el input de tipo archivo tenemos una función llamada archivoHandler. 
La función luce así:

```javascript
const archivoHandler = async (e)=> {

    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("archivo cargado:",archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);

  }
```

El código  funciona así:

1. Creamos una referencia al archivo seleccionado del input y lo guardamos en la constante archivo
2. Creamos una referencia al servicio de Firebase Storage en `const storageRef`
3. Creamos un *path* previo a cargar al archivo en const `archivoPath`
4. Colocamos nuestro archivo en ese path con el método *put*
5. Obtenemos la url de descarga con el método *getDownloadUrl* y la guardamos en un *state*

Con esto ya estaremos cargando archivos a Firebase Storage. Lo siguiente es guardar en Firestore la referencia al nombre del archivo y la url para descargarlo. 

## Guardar la url de los archivos en Firestore

Una vez guardada la Url de los archivos en un *state*, procederemos a guardarla en nuestra base de datos junto con un nombre ingresado por el usuario. Para ello, ejecutaremos la siguiente función al momento de que el usuario haga **submit**.

```javascript
  const submitHandler = async (e)=> {
    e.preventDefault()
const nombreArchivo = e.target.nombre.value;
if (!nombreArchivo) {
  alert("coloca un nombre")
  return
}
const coleccionRef =  app.firestore().collection("archivos");
const docu = await coleccionRef.doc(nombreArchivo).set({nombre: nombreArchivo, url: archivoUrl});
console.log("archivo cargado:", nombreArchivo, "ulr:", archivoUrl);
window.location="/"

  }
```

1. Como requisito debemos crear alguna colección en Firestore
2. Primero prevenimos la recarga de página con e.preventDefault
3. Recogemos el nombre que ingresó el usuario en el input de texto
4. (opcional) Crea una validación para que el campo no esté en blanco
5. Creamos una referencia a la colección que creamos en Firestore ("archivos" en mi caso)
6. Creamos un registro (documento) con el método **doc** y **set**
7. Actualizamos la página con window.location

Ahora que hemos creado los registros, es momento de mostrar el contenido de los archivos en nuestra aplicación de React. 

## Mostrar archivos en aplicación

Lo primero es obtener todos los documentos y guardarlos en un **state** con ayuda de **useEffect**

```javascript
React.useEffect(async ()=>{
    const docusList = await app.firestore().collection("archivos").get();
    setDocus(docusList.docs.map((doc)=> doc.data()));
   
  }, [])
```

Luego, en nuestra interfaz mapea los documentos y retornalos en alguna lista

```javascript
<ul>
         {docus.map((doc)=> <li><h3>{doc.nombre}</h3><img src={doc.url} height="100px" width="100px" /></li>)}
       </ul>
```

## Conclusiones

Firebase Storage es un servicio por demás útil y sencillo. Estoy seguro de que podrá servirte en más de una ocasión. 

Si te han quedado dudas, puedes revisar el [repositorio](https://github.com/lasfito/tutoriales/tree/master/04-firebase-storage) o preguntarme en los comentarios.
