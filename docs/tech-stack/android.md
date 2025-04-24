# Android

En esta página aprenderemos a integrar el SDK de _Identidad Digital Abitab_ a nuestra app, y podremos completar los flujos de autenticación que creamos necesarios.

::: warning IMPORTANTE
Si todavía no recibiste tus credenciales para poder integrarte, comunicate con un administrador
:::

## Configuración
### Instalación
```kt
Instalacion
```
### Inicialización
En tu archivo `MainActivity.kt` deberas inicializar nuesto SDK:
```kt{1}
// MainActivity.kt

import uy.com.abitab.iddigitalsdk.IDDigitalSDK

class MainActivity : ComponentActivity() {
    // Variable para trabajar con el SDK
    private lateinit var sdkInstance: IDDigitalSDK

    override fun onCreate(savedInstanceState: Bundle?) {
        // Inicializacion del SDK necesaria
        val apiKey = BuildConfig.API_KEY
        sdkInstance = IDDigitalSDK.initialize(this, apiKey)
        ...
    }
}
```

## Funciones disponibles
### Flujo de asociación
```kt
Flujo de asociacion
```
### Flujo de autenticación
Dividiremos el bloque de código por método de validación
::: code-group
```kt [Liveness]
val document = Document(
    number = "45743055"
)
sdkInstance.startLiveness(document, onError = { error ->
    // Manejar el error
}, onCompleted = { challengeId ->
    // Verificar el resultado de la prueba de autenticación
})
```
```kt [Pin]
val document = Document(
    number = "45743055"
)
sdkInstance.requestPin(document, onError = { error ->
    // Manejar el error
}, onCompleted = { challengeId ->
    // Verificar el resultado de la prueba de autenticación
})
```
:::
### Solicitar información del usuario
Una vez que el usuario haya asociado su identidad a tu aplicación, podras utilizar este método para obtener la información del usuario.
```kt{1}
// MainActivity.kt

```

<!-- ### Aplicación de prueba
Puedes referir a la [siguiente aplicación]() para ver una prueba de como usar el sdk -->