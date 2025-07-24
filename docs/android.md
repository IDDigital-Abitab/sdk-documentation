# Android <Badge type="info" text="0.1.0"/> <Badge type="danger" text="ALPHA" />

La versión mínima soportada es la API 26 (Android 8.0)

## Agregar repositorio jitpack

Agregar esto en el archivo `settings.gradle.kts` de tu proyecto:

```kts
dependencyResolutionManagement {
  repositories {
    google()
    mavenCentral()
    maven { url = uri("https://jitpack.io") } // Agregar esta línea
  }
}
```

## Agregar la dependencia

En tu archivo `build.gradle.kts` agregar esto:

```kts
dependencies {
	implementation("com.github.IDDigital-Abitab:id-digital-android-sdk:$latestAndroidSdkVersion")
}
```

## Inicializar SDK

Para poder utilizar el SDK tienes que inicializarlo una única vez. Para ello deber proporcionar una `apiKey` válida.

```kotlin
import uy.com.abitab.iddigitalsdk.IDDigitalSDK

class MainActivity : ComponentActivity() {
    private lateinit var sdkInstance: IDDigitalSDK

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val apiKey = "JOwfMLO6..." // Debe estar guardada en un lugar seguro
        sdkInstance = IDDigitalSDK.initialize(this, apiKey)
    }
}
```

## Asociar dispositivo

Para poder comenzar a solicitar validaciones de un usuario, primero deberás tenerlo asociado a tu aplicación utilizando el método `associate`.

```kotlin
sdkInstance.associate(
  context = context,
  document = Document(number = documentNumber),
  onCompleted = {},
  onError = {}
)
```

Si querés comprobar si un usuario puede ser asociado, pero aún no comenzar con el proceso de asociación, podés utilizar el método `canAssociate`.

```kotlin
val response = sdkInstance.canAssociate(
  document = Document(number = documentNumber),
  onError = {}
)
```

Para comprobar si existe una asociación:

```kotlin
val response = sdkInstance.isAssociated()
```

Para eliminar una asociación existente:

```kotlin
sdkInstance.removeAssociation()
```

## Crear sesión de validación

Una vez asociado al usuario, es posible crear una sesión de validación.
La misma puede ser de tipo `ChallengeType.Pin` o `ChallengeType.Liveness`

```kotlin
import uy.com.abitab.iddigitalsdk.domain.models.ChallengeType

// ...

sdkInstance.createValidationSession(
  context = context,
  type = ChallengeType.Pin,
  onError = {},
  onCompleted = {},
)
```
