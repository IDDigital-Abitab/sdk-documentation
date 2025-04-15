# Android

En esta página aprenderemos a integrar el SDK de _Identidad Digital Abitab_ a nuestra app, y podremos completar los flujos de autenticación que creamos necesarios.

::: warning IMPORTANTE
Si todavía no recibiste tus credenciales para poder integrarte, comunicate con un administrador
:::

## Instalación

### Inicialización

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
    }
}
```

## Funcionalidades
