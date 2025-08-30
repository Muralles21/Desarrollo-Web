
# Portal Residencial – HTML5/CSS3/SQLite (cliente con sql.js)

Este proyecto cumple con los **entregables** del enunciado:

1) **Inicio** (`index.html`): nombres del equipo, breve descripción, ubicación, video/imagen y **sección de noticias** que lee de **SQLite** y muestra solo **las 3 más recientes**.
2) **Calendario** (`calendar.html`): vista mensual con selector de **mes** y **año**, muestra los **títulos** de cada evento por día; al hacer clic muestra la **descripción/nota**.
3) **Consulta** (`consulta.html`): formulario con **DPI, Número de Casa, Primer Nombre, Primer Apellido, Fecha de Nacimiento**. Valida datos y consulta en SQLite si el **pago del mes actual** está realizado. Incluye opción **historial** por rango de años.

La base de datos está en `db/sample.db` con el siguiente **esquema**:

- `Noticias(fecha, titulo, contenido)`
- `Calendario(fecha, titulo, descripcion)`
- `Inquilino(dpi, primer_nombre, primer_apellido, fecha_nacimiento, numero_casa)`
- `PagoDeCuotas(numero_casa, anio, mes, fecha_pago)`

> El sitio usa **sql.js** (SQLite compilado a WebAssembly) para ejecutar consultas **en el navegador (lado del cliente)**, cumpliendo el requisito de “recursos mínimos de servidor”.

## Cómo ejecutar

Debido a políticas del navegador, para cargar la base de datos (`fetch` a `db/sample.db`) es recomendable abrir el proyecto con un **servidor local**:

- Opción rápida con Python 3:
  ```bash
  cd residencial_portal
  python -m http.server 8080
  ```
  Luego abre <http://localhost:8080/>

También puedes subir la carpeta a un **hosting estático** (Netlify, GitHub Pages, Vercel) y funcionará sin backend.

## Editar/sembrar datos

Abre `db/sample.db` con **DB Browser for SQLite** y agrega tus noticias, eventos, inquilinos y pagos.
