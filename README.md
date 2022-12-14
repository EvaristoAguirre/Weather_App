
# Weather App - Con React JS

La siguiente aplicación Web se realizó como trabajo final del curso de Desarrollo Web - Frontend.

Para ver la ¨Weather App¨, pulse el siguiente link:

https://evaristoaguirre.github.io/Weather_App/

## Objetivos:

0) Desarrollar una aplicación Web que mostrara información relacionada al estado metereológico según la ubicación elegida.

1) Utilizar en su construcción la librería de JavaScript, React JS. 

2) Solicitar información a una A.P.I. (Interfaz de programación de aplicaciones). En este caso se utilizó la API de Open Weather Map. 
## Uso e interfaz de la Aplicación:

La interfaz está construida, a nivel gráfico, con una entrada única para seleccionar la ciudad sore la cual se desea obtener la información metereológica como se muestra en las imágenes a continuación. También se muestra la App en modo de espera de información, y con su formato final, cuando vuelca los datos obtenidos.

![Inicio](https://user-images.githubusercontent.com/114101006/207700185-24aa0026-c37b-4105-86ec-aded1953b915.png)

![Selección de ciudad](https://user-images.githubusercontent.com/114101006/207700310-9290fbdc-2e7a-41f9-9f34-347f79b14912.png)

![Buscando información](https://user-images.githubusercontent.com/114101006/207489005-bfd20175-e11e-4375-9e0e-17ae882d99d5.png)

![Resumen de información](https://user-images.githubusercontent.com/114101006/207700363-ab5f4362-4618-4fe9-9d0c-c1dcf36bfff8.png)


## API Reference

#### Llamada a API para obtener los datos metereológicos actuales:

```http
 https://api.openweathermap.org/data/2.5/weather?q={city name}&lang={language}&unit={unit}&appid={API key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `q`      | `string` | **Required**. Ciudad|
| `lang`     | `string` | **Optional**. Idioma |
| ` unit`      | `string` | **Optional**. Sistema de unidades |

#### Llamada a API para obtener las predicciones metereológicos en las próximas horas:

```http
 https://api.openweathermap.org/data/2.5/forecast?q={city name}&lang={language}&unit={unit}appid={API key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `q`      | `string` | **Required**. Ciudad|
| `lang`     | `string` | **Optional**. Idioma |
| ` unit`      | `string` | **Optional**. Sistema de unidades |


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | rgb(37, 37, 37)|
| Example Color | f5f5f8
| Example Color | #b5b5b9|
| Example Color | rgba(138, 183, 167,0.2)



## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/evaristo-aguirre/)



## Github
https://github.com/EvaristoAguirre



## Documentation

En el desarrollo se utilizó las siguientes tecnologías:

- Bootstrap 5
- React JS

A nivel dependencias y scripts se necesitó de:

- React-hook-form
- Deploy (para Vite)
- Bootstrap icons
- gh-pages
- React-Bootstrap


## Feedback

Si considera necesario realizar un aporte y/o mejora, no dude en contactarme. Sólo sea amable ya que este es mi primer proyecto realizado íntegramente con React JS.
