# Challenge - Intro component with sign up form


## Welcome! 👋

Análisis del diagrama de base de datos simple de un sistema de inicio de sesión para usuarios.

### Entidades:

# Usuario:

ID (Clave primaria)
Nombre de usuario (debe ser único)
Contraseña (se debe almacenar de manera segura, como un hash)
Nombre
Apellido
Correo electrónico
Fecha de registro

# Sesión:

ID (Clave primaria)
ID de usuario (clave foránea que se relaciona con la tabla de Usuario)
Token de sesión (para mantener la sesión activa)
Fecha y hora de inicio de sesión
Fecha y hora de finalización de sesión (puede ser nulo si la sesión está activa)
Relaciones:

La tabla "Sesión" se relaciona con la tabla "Usuario" a través del campo "ID de usuario". Esto permite rastrear qué usuario ha iniciado sesión y cuándo.
