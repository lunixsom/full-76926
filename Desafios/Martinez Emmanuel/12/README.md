# Sistema de Gestión de Usuarios

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── User/
│   │   ├── User.jsx          # Componente principal
│   │   └── User.scss         # Estilos del componente principal
│   ├── UserList/
│   │   ├── UserList.jsx      # Lista de usuarios
│   │   └── UserList.scss     # Estilos de la lista
│   └── UserListItem/
│       ├── UserListItem.jsx  # Item individual de usuario
│       └── UserListItem.scss # Estilos del item
├── data/
│   └── users.js              # Datos de ejemplo de usuarios
├── App.jsx                   # Componente raíz
├── app.scss                  # Estilos globales
└── main.jsx                  # Punto de entrada
```

## 🚀 Características

### Componente User (Principal)
- Muestra estadísticas generales (total usuarios, activos, administradores)
- Renderiza la lista completa de usuarios
- Diseño responsivo con gradientes modernos

### Componente UserList
- Header con título y filtros (preparado para funcionalidad)
- Grid responsivo para mostrar usuarios
- Botones de filtro con estilos interactivos

### Componente UserListItem
- Tarjeta individual para cada usuario
- Avatar con emoji
- Indicador de estado (activo/inactivo)
- Información del usuario (nombre, email, rol)
- Botones de acción (editar/eliminar)
- Colores diferenciados por rol
- Animaciones y efectos hover

## 🎨 Diseño

- **Paleta de colores**: Azules, verdes y rojos para estados
- **Gradientes**: Fondo principal y elementos destacados
- **Responsive**: Grid adaptativo para diferentes tamaños de pantalla
- **Animaciones**: Efectos hover y transiciones suaves
- **Tipografía**: Segoe UI para mejor legibilidad

## 📊 Datos de Ejemplo

El sistema incluye 6 usuarios de ejemplo con diferentes roles:
- **Administradores**: Ana García, Laura Martínez
- **Moderadores**: María Rodríguez
- **Usuarios**: Carlos López, Juan Pérez, Roberto Silva

## 🛠️ Tecnologías

- React 19
- PropTypes para validación
- Sass para estilos
- Vite como bundler
- ESLint para linting

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Linting
npm run lint
``` 