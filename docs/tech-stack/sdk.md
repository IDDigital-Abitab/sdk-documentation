# Utilización del sdk

En esta página aprenderas a integrar el SDK de _Identidad Digital Abitab_ a tu app movil, y podras completar los flujos de autenticación que creas necesarios.

::: warning IMPORTANTE
Si todavía no recibiste tus credenciales para poder integrarte, comunicate con un administrador
:::

## Configuración
### Instalación
```kt
Instalacion
```
### Inicialización
En el punto de entrada de tu aplicación deberas inicializar nuesto SDK:
::: code-group
```kt [Android] {1}
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
<!-- ```swift [iOS] {1}
```
```ts [React Native] {1}
``` -->
:::

## Funcionalidades disponibles
### Flujo de asociación
::: code-group
```kt [Android]
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::
### Flujo de autenticación
1. Liveness
::: code-group
```kt [Android]
val document = Document(
    number = "45743055"
)
sdkInstance.startLiveness(document, onError = { error ->
    // Manejar el error
}, onCompleted = { challengeId ->
    // Verificar el resultado de la prueba de autenticación
})
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::
2. Pin
::: code-group
```kt [Android]
val document = Document(
    number = "45743055"
)
sdkInstance.requestPin(document, onError = { error ->
    // Manejar el error
}, onCompleted = { challengeId ->
    // Verificar el resultado de la prueba de autenticación
})
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::
<!-- ### Solicitar información del usuario
Una vez que el usuario haya asociado su identidad a tu aplicación, podras utilizar este método para obtener la información del usuario.
```kt{1}
// MainActivity.kt

``` -->