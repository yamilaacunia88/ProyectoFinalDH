ProyectoFinalDH
Desarrollo de un Start up y Scafolding. Tema: Movies🎬.

Creá un nuevo repositorio en tu cuenta de GitHub para subir el proyecto y, si corresponde, colocá instrucciones de cómo instalarlo en un archivo “readme.md” en la carpeta raíz del proyecto. Envianos el link al repositorio para ver el avance y descargarlo al momento de la entrega. Creá un proyecto en Node. Podés usar express generator o no, lo dejamos a elección tuya. Utilizá la base de datos que enviamos adjunta. Es la base de datos “movies_db” adaptada para tu challenge. Tendrás que crear toda la estructura necesaria para el proyecto: rutas, manejadores de rutas, modelos, controladores y algunas vistas sencillas con EJS. Implementá EJS como motor de vistas. No será necesario crear “partials” ni aplicar diseño, ni definir comportamientos responsive. Necesitamos validar que podés manejar las bases de EJS mostrando datos en el navegador y la información de un formulario.

2.- HOME PAGE La home del proyecto, o sea la primera página que cargue al iniciar, debe mostrar el listado de todas las películas de la base de datos.

DETALLE DE PELICULAS Cada una de las películas del punto 2 tiene que ser un link al detalle completo de cada película.
Una vez en el detalle deben verse los datos de la película más el género al que pertenece (el nombre del género, no el número) y la lista de los actores que trabajaron en ella. Para mostrar información relacionada va a ser necesario implementar sequelize, crear los modelos y las relaciones necesarias.

CRUD DE PELÍCULAS Desarrollá un CRUD de películas. Tendrás que crear toda la estructura necesaria para cumplir con las funciones del CRUD: agregar una nueva película, modificarla y eliminarla. Recordá que para crear y editar películas necesitarás formularios, revisar qué campos son obligatorios y colocar las validaciones correspondientes. Para eliminar una película podrás elegir en donde hacerlo. Podrías agregar la funcionalidad en el listado de películas o en el mismo formulario de edición. Si tenés otra opción, adelante. La eliminación de datos deberá utilizar la funcionalidad “paranoid”de sequelize.

REGISTRO Y LOGIN (short version) Vamos a crear ahora un pequeño proceso de registro y login. El objetivo es registrar a un usuario regular y a un usuario administrador para que luego puedan loguearse en el sitio y mantenerse logueados durante toda la navegación. Únicamente el administrador podrá acceder a las rutas del CRUD para crear, modificar o eliminar películas. El sistema debe permitir al usuario desloguearse (logout). La base de datos ya cuenta con una tabla “users” en la que podrás identificar al usuario regular con el rol “0” (es el dato por defecto) y al administrador con un número diferente a tu elección. Una vez registrado el usuario tendrás que modificar a mano el número en la columna “rol” de la tabla.

IDENTIFICANDO AL ADMINISTRADOR Creá los middlewares y ajustes necesarios para que únicamente un rol de administrador pueda utilizar las funcionalidades del CRUD. El usuario regular y los usuarios no logueados únicamente podrán acceder al listado de películas y sus detalles.



Estas credenciales te permitirán acceder a las funcionalidades y privilegios de administrador dentro del sistema.
Usuario: admin@gmail.com

Contraseña: 123456

