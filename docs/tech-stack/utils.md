# Utilidades

En esta página te indicaremos todas las utilidades que empaquetamos en nuestro SDK para que puedas integrarte más facilmente.

::: warning IMPORTANTE
Si todavía no recibiste tus credenciales para poder integrarte, comunicate con un administrador
:::

## Documento
Por defecto asumimos que el documento indicado es uruguayo
<!-- TODO: Como se indica el country? Y el type? -->
::: code-group
```kt [Android]
data class Document(
    val number: String,
    val type: String? = null,
    val country: String? = null
) : Serializable
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::

## ChallengeType
Con este objeto podrás seleccionar la prueba de autenticación que quieres que tu usuario complete
::: code-group
```kt [Android]
sealed class ChallengeType : Serializable {
    data object Liveness : ChallengeType() {
        private fun readResolve(): Any = Liveness
    }

    data object Pin : ChallengeType() {
        private fun readResolve(): Any = Pin
    }
}
```
<!-- ```swift [iOS]
```
```ts [React Native]
``` -->
:::