# Primeros pasos

A continuación, te proporcionamos las instrucciones para llevar a cabo la integración _Identidad Digital Abitab SDK_ de manera éxitosa:

## 1. Obtención de credenciales

Para poder realizar la integración se te proporcionarán unas credenciales únicas, que se componen de un **API Key** y un **client secret** especiales para el SDK. Estas credenciales las necesitarás para poder utilizar la API y deberás almacenarlas en un lugar seguro.

## 2. Instalar nuestra libreria

Deberas instalar en tu aplicación nuestra libreria para interoperar con ella, puedes dirigirte a las pestañas de nuestras tecnologias para saber como instalarla.

## 3. Implementación del flujo de asociación

La primera vez que quieras que tu usuario complete un **flujo de autenticación**, por ejemplo cuando el usuario haga click en el botón de "Iniciar Sesión", se deberá completar un [**Flujo de asociación**](/flows/asociation-flow) del dispositivo con el usuario _Identidad Digital Abitab_. Si el usuario no cuenta con _Identidad Digital Abitab_ no podrá completar ninguno de los flujos.

## 4. Implementación del flujo de autenticación

<!-- TODO: Que incluye la respuesta? -->

Una vez asociado el dispositivo, puedes pedirle al usuario que autentique su identidad siguiendo un [**Flujo de autenticación**](/flows/authentication-flow). Deberás implementar la lógica necesaria para manejar su respuesta, que incluirá xxx, dependiendo del flujo elegido. También deberás manejar los errores que puedan surgir durante el proceso de autorización, los cuales se informarán a través de las respuestas de la API.

## 5. Obtención de datos del usuario

Una vez que el usuario haya asociado tu aplicación con su _Identidad Digital Abitab_, podrás obtener información sobre él. Para ello, deberás utilizar nuestro SDK y sus operaciones disponibles, podras obtener mas información en el apartado de la tecnologia que quieras implementar.

---

Consulta nuestra documentación detallada para obtener información adicional sobre flujos de trabajo específicos y mejores prácticas.
Estamos aquí para ayudarte en cada paso del proceso. Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte a través de [ayuda@id.com.uy](mailto:ayuda@id.com.uy). ¡Nos complace tener tu servicio integrado con _Identidad Digital Abitab_ y ofrecer una experiencia de autorización segura y eficiente para tus usuarios!

¡Gracias por elegir _Identidad Digital Abitab_!
