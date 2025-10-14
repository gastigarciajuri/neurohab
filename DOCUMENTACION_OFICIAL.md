# NeuroHab - Documentación Oficial

## Descripción General

**NeuroHab** es una plataforma de e-learning especializada en la formación de hábitos saludables a través de un sistema de cursos estructurados. La aplicación combina contenido multimedia, evaluaciones interactivas y seguimiento de progreso para crear una experiencia de aprendizaje personalizada y efectiva.

## Características Principales

### 🎯 **Objetivo**
Desarrollar y fortalecer hábitos saludables mediante un enfoque educativo estructurado que incluye:
- Evaluación inicial de hábitos actuales
- Contenido educativo multimedia
- Seguimiento de progreso personalizado
- Material de apoyo descargable

### 🔐 **Sistema de Autenticación**
- **Autenticación con Google**: Integración completa con Google OAuth
- **Gestión de sesiones**: Persistencia de sesión en el navegador
- **Rutas protegidas**: Acceso restringido a usuarios autenticados
- **Perfil de usuario**: Información básica del usuario (nombre, email, foto)

### 📚 **Estructura del Curso**
El curso está organizado en **5 pasos secuenciales**:

1. **Paso 1 - Introducción**: Video de bienvenida al curso
2. **Paso 2 - Preparación**: Introducción a los tests de evaluación
3. **Paso 3 - Evaluación**: Test completo de hábitos saludables
4. **Paso 4 - Contenido Educativo**: Video educativo adicional
5. **Paso 5 - Material de Apoyo**: Descarga de recursos PDF

### 📊 **Sistema de Evaluación**
- **Test de Hábitos Saludables** con 4 categorías:
  - **Actividad Física**: Ejercicios, caminar, uso de escaleras
  - **Alimentación**: Frutas/verduras, agua, alimentos procesados
  - **Sueño**: Horas de sueño, rutinas, ambiente
  - **Manejo del Estrés**: Técnicas de relajación, planificación

- **Escala de evaluación**: 1-5 puntos por pregunta
- **Feedback personalizado**: Interpretación de resultados por categoría
- **Puntaje total**: Evaluación general del estado de hábitos

### 📈 **Seguimiento de Progreso**
- **Progreso secuencial**: Los pasos se desbloquean progresivamente
- **Estado visual**: Indicadores de completado, disponible y bloqueado
- **Persistencia**: Progreso guardado en Firebase Firestore
- **Barra de progreso**: Visualización del avance del curso

## Arquitectura Técnica

### 🛠 **Stack Tecnológico**

#### Frontend
- **React 18.3.1**: Framework principal
- **Vite**: Herramienta de construcción y desarrollo
- **React Router DOM 6.26.1**: Navegación entre páginas
- **Tailwind CSS 3.4.10**: Framework de estilos
- **React Firebase Hooks 5.1.1**: Integración con Firebase

#### Backend y Servicios
- **Firebase Authentication**: Autenticación de usuarios
- **Firebase Firestore**: Base de datos NoSQL
- **Firebase Storage**: Almacenamiento de archivos
- **Google OAuth**: Proveedor de autenticación

#### Herramientas de Desarrollo
- **ESLint**: Linting de código
- **PostCSS**: Procesamiento de CSS
- **Autoprefixer**: Compatibilidad de CSS

### 📁 **Estructura del Proyecto**

```
neurohab/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Feedback.jsx     # Componente de resultados
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── Layout.jsx       # Layout principal
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   └── PrivateRoute.jsx # Protección de rutas
│   ├── pages/               # Páginas principales
│   │   ├── CoursePage.jsx   # Página del curso
│   │   ├── LandingPage.jsx  # Página de inicio
│   │   ├── LoginPage.jsx    # Página de login
│   │   └── NotFoundPage.jsx # Página 404
│   ├── views/               # Vistas específicas
│   │   ├── steps/           # Pasos del curso
│   │   │   ├── Step1.jsx    # Introducción
│   │   │   ├── Step2.jsx    # Preparación
│   │   │   ├── Step3.jsx    # Evaluación
│   │   │   ├── Step4.jsx    # Contenido educativo
│   │   │   └── Step5.jsx    # Material de apoyo
│   │   ├── TestView.jsx     # Vista del test
│   │   └── TestResultsView.jsx # Vista de resultados
│   ├── assets/              # Recursos estáticos
│   │   ├── modules.js       # Datos de módulos
│   │   ├── testData.js      # Datos del test
│   │   └── background.jpg   # Imagen de fondo
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── firebase/                # Configuración Firebase
│   ├── client.js            # Cliente Firebase
│   ├── progress.js          # Funciones de progreso
│   └── admin/               # Funciones administrativas
├── public/                  # Archivos públicos
└── dist/                    # Build de producción
```

### 🔧 **Configuración Firebase**

#### Autenticación
```javascript
// Configuración de autenticación con Google
const firebaseConfig = {
  apiKey: "AIzaSyAWZ9RZBi6q2CiDBeZ4PRxlU1xB7k6caq4",
  authDomain: "neurohab-54ceb.firebaseapp.com",
  projectId: "neurohab-54ceb",
  storageBucket: "neurohab-54ceb.appspot.com",
  messagingSenderId: "713847484212",
  appId: "1:713847484212:web:4932c4721bd0c87d833f61"
};
```

#### Base de Datos Firestore
- **Colección `users`**: Información de usuarios y progreso
- **Colección `modules`**: Datos de módulos del curso
- **Storage**: Archivos PDF y recursos multimedia

## Funcionalidades Detalladas

### 🚀 **Flujo de Usuario**

1. **Acceso Inicial**
   - Usuario visita la página de inicio
   - Opción de iniciar sesión con Google
   - Redirección automática al curso si ya está autenticado

2. **Navegación del Curso**
   - Vista general del progreso actual
   - Lista de pasos con estados visuales
   - Navegación secuencial entre pasos

3. **Completado de Pasos**
   - Verificación de completado antes de avanzar
   - Actualización automática del progreso
   - Desbloqueo del siguiente paso

### 📋 **Sistema de Evaluación Detallado**

#### Estructura del Test
- **20 preguntas totales** (5 por categoría)
- **Escala Likert de 5 puntos** (1-5)
- **Evaluación por categorías**:
  - Actividad Física (0-25 puntos)
  - Alimentación (0-25 puntos)
  - Sueño (0-25 puntos)
  - Manejo del Estrés (0-25 puntos)

#### Interpretación de Resultados
- **Puntaje por categoría**:
  - 0-10: Necesita trabajo significativo
  - 11-15: En camino correcto, áreas de mejora
  - 16-20: Buenas prácticas
  - 21-25: Excelentes hábitos

- **Puntaje total (0-100)**:
  - 0-40: Atención significativa requerida
  - 41-70: Buen nivel, mejoras posibles
  - 71-85: Muy buenos hábitos
  - 86-100: Excelente salud general

### 🎨 **Interfaz de Usuario**

#### Diseño Responsivo
- **Tailwind CSS**: Diseño mobile-first
- **Componentes modulares**: Reutilización de elementos
- **Navegación intuitiva**: Flujo claro entre secciones

#### Elementos Visuales
- **Barra de progreso**: Indicador visual del avance
- **Estados de pasos**: Colores diferenciados por estado
- **Feedback inmediato**: Confirmaciones de acciones
- **Imágenes de perfil**: Integración con Google Photos

## Instalación y Configuración

### 📦 **Requisitos Previos**
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Google para autenticación
- Proyecto Firebase configurado

### 🚀 **Instalación**

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd neurohab
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar Firebase**
   - Crear proyecto en Firebase Console
   - Habilitar Authentication con Google
   - Configurar Firestore Database
   - Configurar Storage
   - Actualizar configuración en `firebase/client.js`

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

5. **Build para producción**
```bash
npm run build
```

### 🔧 **Scripts Disponibles**
- `npm run dev`: Servidor de desarrollo
- `npm run build`: Build de producción
- `npm run lint`: Verificación de código
- `npm run preview`: Vista previa del build

## API y Funciones Principales

### 🔐 **Autenticación**
```javascript
// Iniciar sesión con Google
export const loginWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

// Cerrar sesión
export const logout = () => {
  return auth.signOut();
};
```

### 📊 **Gestión de Progreso**
```javascript
// Obtener progreso del usuario
export const getUserProgress = async (userId) => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  return userSnap.data().progress;
};

// Actualizar progreso
export const updateUserProgress = async (userId, stepCompleted) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, { progress: stepCompleted });
};
```

### 📁 **Gestión de Archivos**
```javascript
// Obtener URL de archivo desde Storage
export const getFileURL = async (filePath) => {
  const fileRef = ref(storage, filePath);
  return await getDownloadURL(fileRef);
};
```

## Consideraciones de Seguridad

### 🔒 **Medidas Implementadas**
- **Rutas protegidas**: Acceso restringido a usuarios autenticados
- **Validación de datos**: Verificación de respuestas del test
- **Persistencia segura**: Datos almacenados en Firestore
- **Autenticación OAuth**: Integración segura con Google

### ⚠️ **Recomendaciones**
- Configurar reglas de seguridad en Firestore
- Implementar validación adicional en el backend
- Considerar encriptación de datos sensibles
- Mantener actualizadas las dependencias

## Roadmap y Mejoras Futuras

### 🎯 **Funcionalidades Planificadas**
- **Múltiples cursos**: Expansión a diferentes áreas de hábitos
- **Certificados**: Generación de certificados de completado
- **Recordatorios**: Sistema de notificaciones
- **Analytics**: Dashboard de progreso detallado
- **Comunidad**: Foros de discusión entre usuarios

### 🔧 **Mejoras Técnicas**
- **PWA**: Convertir a Progressive Web App
- **Offline**: Funcionalidad sin conexión
- **Testing**: Implementar tests unitarios y de integración
- **Performance**: Optimización de carga y rendimiento
- **Accesibilidad**: Mejoras de accesibilidad web

## Soporte y Contribución

### 📞 **Soporte**
Para reportar bugs o solicitar funcionalidades, contactar al equipo de desarrollo.

### 🤝 **Contribución**
1. Fork del repositorio
2. Crear rama para nueva funcionalidad
3. Commit de cambios
4. Push a la rama
5. Crear Pull Request

## Licencia

Este proyecto está bajo licencia [ESPECIFICAR_LICENCIA]. Ver archivo LICENSE para más detalles.

---

**Versión**: 1.0.0  
**Última actualización**: Diciembre 2024  
**Equipo de desarrollo**: NeuroFit Team
