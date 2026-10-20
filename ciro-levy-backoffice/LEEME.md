# Web de Ciro Levy y Decap CMS

Estado: nombre actualizado y código de integración preparado. El backoffice todavía NO está activado: faltan repositorio, alojamiento y autenticación.

## Activación pendiente
1. Crear una cuenta de GitHub y un repositorio para estos archivos.
2. Conectar el repositorio a Netlify. Se incluye netlify.toml con el comando de generación y la carpeta pública.
3. Sustituir PENDIENTE/ciro-levy en dist/admin/config.yml por el repositorio real.
4. Configurar el proveedor OAuth de GitHub en Netlify (requiere una aplicación OAuth y guardar su secreto en el servicio, nunca en el código).
5. Publicar y entrar en https://TU-DOMINIO/admin/ con una cuenta autorizada para editar el repositorio.
6. Editar en el formulario y publicar. Decap guarda el contenido en GitHub; el alojamiento genera la nueva web.

## Contenido editable
Nombre, logotipo, lema, titular, introducción, fotografía principal, títulos de sección, biografía, mensaje de conciertos, presentación y correo de contacto. Lista de canciones con título, créditos, enlace de Spotify y portada: se pueden añadir, quitar y ordenar.

## Desarrollo
Requiere Node.js. Ejecutar npm run build genera dist/index.html a partir de content/site.json y templates/index.html. No necesita instalar dependencias para generar la web. Decap se carga desde su CDN al activar la conexión.

La copia leo-soler.html puede abrirse directamente y mantiene su nombre de archivo por compatibilidad. El backoffice requiere alojamiento HTTP; no funciona con file://.

Documentación: https://decapcms.org/docs/github-backend/
