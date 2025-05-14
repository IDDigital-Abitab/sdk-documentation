# Utilización del sdk

En esta página aprenderas a integrar el SDK de _Identidad Digital Abitab_ a tu app movil, y podras completar los flujos de autenticación que creas necesarios.

::: warning IMPORTANTE
Si todavía no recibiste tus credenciales para poder integrarte, comunicate con un administrador
:::

## Configuración
### Instalación
::: code-group
```kt [Android]
Instalation
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::
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
        ..
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
// Variable para utilizar el contexto de la app
val context = LocalContext.current
..
sdkInstance.associateDevice(
    context = context,
    document = Document(
        number = "12345678"
    ),
    onCompleted = {
        Toast.makeText(context, "Dispositivo asociado con éxito", Toast.LENGTH_SHORT)
            .show()
    },
    onError = {
        Toast.makeText(context, "Error al asociar dispositivo", Toast.LENGTH_SHORT)
            .show()
    }
)
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
sdkInstance.createValidationSession(
    context = context,
    type = ChallengeType.Liveness,
    onError = {
        Toast.makeText(context,"Error: $it", Toast.LENGTH_SHORT).show()
    },
    onCompleted = {
        Toast.makeText(context,"Completado: $it", Toast.LENGTH_SHORT).show()
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
sdkInstance.createValidationSession(
    context = context,
    type = ChallengeType.Pin,
    onError = {
        Toast.makeText(context,"Error: $it", Toast.LENGTH_SHORT).show()
    },
    onCompleted = {
        Toast.makeText(context,"Completado: $it", Toast.LENGTH_SHORT).show()
    })
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::

### Desasociar al usuario de tu app
Una vez que el usuario elimine la sesion en tu app, deberás eliminar la asociación existente
::: code-group
```kt [Android]
sdkInstance.removeAssociation()
Toast.makeText(context, "Asociacion eliminada", Toast.LENGTH_SHORT).show()
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::

### Validar asociación del usuario en tu app
En cualquier momento puede consultarnos si el usuario esta correctamente asociado con tu aplicación y su dispositivo
::: code-group
```kt [Android]
associationValue = sdkInstance.isAssociated()
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::