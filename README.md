# KULICHKOFF's ERP

This project is a little ERP-system. It includes admin panel and BackEnd with NestJS.

In the current time, I work on admin panel.

## NX

This project uses NX as a tool for mono-repository management.

### Run

You can run the project, using the command below:

```shell
yarn nx run [application-name]:serve
```

## What I want to do in the future

- Use Docker to deploy this microservice architecture.
- Documents generation.

## Migrations

Migrations run remotely in manual mode.

To migrate, you have to generate new migration

```shell
POSTGRES_PASSWORD=<pass> POSTGRES_HOST=<host> yarn migration:generate
```

After that, there is a possibility to run the migration

```shell
POSTGRES_PASSWORD=<pass> POSTGRES_HOST=<host> yarn migrate
```
