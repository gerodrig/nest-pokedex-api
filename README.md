<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Deploy in development

1. Clone repository

2. Execute
```
yarn install
```

3. Make sure Nest CLI is installed 
```
npm i -g @nestjs/cli
```

4. Start database
```
docker-compose up -d
```

5. Clone the file __.env.template__ and rename the copy to __.env__

6. Fill the environment variables defined in ```.env```

7. Start application in dev:
```
yarn start:dev
```

8. Build the database with the seed
```
http://localhost:3000/api/v2/seed
```

## Used Stack
* MongoDB
* Nest
