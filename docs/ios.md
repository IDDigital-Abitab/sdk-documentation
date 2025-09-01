# iOS <Badge type="info" text="0.2.0"/> <Badge type="danger" text="BETA" />

La versión mínima soportada es iOS 15

## Agregar la dependencia

> [!WARNING]  
> Esta sección está en desarrollo.

## Agregar descripciones de uso de permisos

El SDK de ID Digital Abitab utiliza el permiso de cámara y de Face ID. Para poder utilizarlos, tu aplicación proporcionar una descripción de uso.
Para ello debes agregar estos valores en tu archivo `Info.plist`:

- `NSCameraUsageDescription` (Privacy - Camera Usage Description)
- `NSFaceIDUsageDescription` (Privacy - Face ID Usage Description)

## Inicializar SDK

Para poder utilizar el SDK tienes que inicializarlo por única vez. Para ello deber proporcionar una `apiKey` válida.

```swift
import IDDigitalSDK

let apiKey = "JOwfMLO6..." // Debe estar guardada en un lugar seguro
await IDDigitalSDK.shared.initialize(apiKey: apiKey)
```

## Asociar dispositivo

Para poder comenzar a solicitar validaciones de un usuario, primero deberás tenerlo asociado a tu aplicación utilizando el método `associate`.

```swift
guard let presentingVC =  UIApplication.shared.keyWindow?.rootViewController else {
  print("Error: No se pudo encontrar la vista para presentar.")
  return
}

do {
  let document = Document(number: documentNumber)
  try await IDDigitalSDK.shared.associate(from: presentingVC, document: document)
} catch {
  // handle error
}
```

Si querés comprobar si un usuario puede ser asociado, pero aún no comenzar con el proceso de asociación, podés utilizar el método `canAssociate`.

```swift
do {
  let document = Document(number: documentNumber)
  let canAssociate = try await IDDigitalSDK.shared.canAssociate(document: document)
} catch {
  // handle error
}
```

Para comprobar si existe una asociación:

```swift
let isAssociated = await IDDigitalSDK.shared.isAssociated()
```

Para eliminar una asociación existente:

```swift
await IDDigitalSDK.shared.removeAssociation()
```

## Crear sesión de validación

Una vez asociado al usuario, es posible crear una sesión de validación.
La misma puede ser de tipo `ChallengeType.pin` o `ChallengeType.liveness`

```swift
do {
  try await IDDigitalSDK.shared.createValidationSession(from: presentingVC, type: .pin)
} catch {
  // handle error
}
```
