# Instrucciones

Basados en el fake api https://reqres.in/ construir una aplicación en Angular o React que
permita:

Usar un menú (lateral o tabs) con las siguientes opciones (un tab o opción de menú por
cada una)

1. Hacer un formulario de login (contraseña y clave) para esto se debe usar el api de
login y almacenar el token generado, este token debe enviarse en cada petición
siguiente al api en un header llamado “Authorization”, este formulario se debe hacer
en una ruta llamada /login.

2. Listar usuarios en una tabla (se debe mostrar correo y la imagen de la persona) para
esto se debe usar el api con el servicio de list, este formulario se debe hacer en una
ruta llamada /usuarios.

3. Crear usuarios mediante un formulario (para esto se debe usar el servicio post de
crear), este formulario se debe hacer en una ruta llamada /crear.

4. Realizar pruebas de unidad a los componentes en el caso de angular con karma y
jasmine y para react con jest y react testing library.

5. Si está aspirando para angular Usar la distribución de carpetas (core, shared,
feature) https://angular.io/guide/styleguide#overall-structural-guidelines, Si está
aspirando para react utilice alguna separación modular y por carpetas, evite poner
todo tipo de archivos en una misma carpeta.

6. Opcional pero valorable: realizar pruebas funcionales e2e en el caso de angular con
protractor y en el caso de react con cypress

# Nombre de la aplicación
Prueba Técnica React

## Instalación

1. Clonar el repositorio: `git clone https://github.com/jeanfes/Prueba_tecnica_SolucionesAmericana`
2. Instalar dependencias: `npm install`
3. Iniciar el servidor: `npm run dev`

## Uso

1. Abra un navegador web y vaya a `http://localhost:5173`