
# PowerFix - Angular

Este proyecto esta generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.10.

# Índice

- [Versión Oficial V1.0](#version-oficial-v1.0)
- [Arquitectura](#Arquitectura)
- [Funcionalidades](#funcionalidades)
- [Tecnologías Usadas](#tecnologias-usadas)
- [Instalación](#instalacion)
- [Configuración](#configuracion)
- [Uso](#uso)
- [Contacto](#contacto)
- [Autores](#autores)

## Versión Oficial V1.0
![Version 1.0](https://github.com/user-attachments/assets/338bdb24-67a3-4def-a7a1-ff184ba11b49)


## Arquitectura
![Arquitectura 1.0](https://github.com/user-attachments/assets/cef311e4-9429-4bbd-bdfe-4f91ccec868c)


En este proyecto se Utilizo Arquitectura limpia para manejar buenas practicas

## Funcionalidades

- Se implemento `Login, register` en su primera version para un sistema de Authenticación.
- Se implemento un `Register` para que los usuarios se puedan registrar en la app y reportar incidentes electricos.
- Se implemento un `Login` para que los usuarios se puedan loguear y ver sus reportes generados.
- Se implemento `Home` Donde se centralizan todas las Features
- Se implemento `Forms` Donde se centralizan todos los flujos para hacer los reportes correspondientes

## Tecnologías Usadas

- Angular CLI
- TypeScript
- PrimeNG 
- Jest (Testing)

## Instalación

1) Clona el repositorio en tu maquina local tanto por
HTTPS:
```bash
$ git clone https://github.com/TheLostHeaven/Front-End-Grupo5
```
SSH:
```bash
$ git clone git@github.com:TheLostHeaven/Front-End-Grupo5.git
```
2) Navega en el directorio del proyecto 
```bash
$ cd Front-End-Grupo5
```
3 Puedes cambiar el origen del proyecto con los siguientes comando

```bash
$ git remote -v
$ git remote remove origin
$ git remote add origin <nueva_url_del_repositorio>
```

4) Instalar las dependecias necesarias 
- Recuerda tener el AngularCLI para instalar las dependecias
- Recuerda tener el package.json en el root de la carpeta

> [!IMPORTANT]
> Recuerda tener el AngularCLI para instalar las dependecias y si no lo tienes este es el comando para instalarlo

```bash
$  npm install -g @angular/cli
```
Y si ya tienes el AngularCLI ya puedes ejecutar este comando:

```bash
$ npm i 
```
5) Por ultimo levanta la app con
```bash
$ ng s -o
```
6) Puedes acceder a ella desde el puerto configurado:

http://localhost:4200/

Felicidades puedes trabajar en el proyecto!!!

## Uso

#### iniciado el puerto puedes navegar en diferentes rutas:
- user 
```bash
http://localhost:4200/register
http://localhost:4200/login
http://localhost:4200/home
```

## Contacto
Si tienes alguna pregunta o sugerencia o quieres la documentacion para desarrollar este proyecto, no dudes en contactarme en [tiquedaniel2002@gmail.com](tiquedaniel2002@gmail.com).

## Autores

- [@Daniel Molina](https://github.com/TheLostHeaven)
- [@Paola Sanchez](https://github.com/27Paola)
- [@Cristian Garcia](https://github.com/camilo7896)
- [@Mariana Saldarriaga](https://github.com/MSaldarriagaGomez)
