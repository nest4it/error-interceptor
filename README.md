# @n4it/global-error-interceptor
A NestJS module for catching and handling errors globally. The `ErrorInterceptorModule` will catch all errors thrown in your NestJS application by default.

## Installation
To install the module, use npm:

```bash
npm install @n4it/global-error-interceptor
```

## Usage

### Importing and Configuring the Module
To use the `ErrorInterceptorModule`, import it into your NestJS module and configure it using the register method. This method allows you to enable logging and handle specific errors globally.

```typescript
import { ErrorInterceptorModule } from "@n4it/global-error-interceptor";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ErrorInterceptorModule.register({
      shouldLogErrros: true,
      shouldLogFailures: true,
    }),
  ],
})
export class AppModule {}
```

### Custom Error Handling
You can extend the module to handle custom errors, such as those from `TypeORM`. This is done by mapping specific errors to HTTP status codes.

```typescript
import { ErrorInterceptorModule } from "@n4it/global-error-interceptor";
import { Module } from "@nestjs/common";
import {
  CannotCreateEntityIdMapError,
  EntityNotFoundError,
  QueryFailedError,
} from "typeorm";

@Module({
  imports: [
    ErrorInterceptorModule.register({
      // if you want to extend the working with custom errors
      // for example, with TypeORM errors:
      customErrorToStatusCodeMap: new Map([
        [EntityNotFoundError.name, 404],
        [CannotCreateEntityIdMapError.name, 422],
        [QueryFailedError.name, 400],
      ])
    }),
  ],
})
export class AppModule {}
```

### Error handling for unauthorized exceptions
You can extend the module to invoke a function when an unauthorized exception is throwed.

```typescript
import { ErrorInterceptorModule } from "@n4it/global-error-interceptor";
import { Module, ArgumentsHost, HttpException } from "@nestjs/common";

@Module({
  imports: [
    ErrorInterceptorModule.register({
      onUnauthorized: (exception: HttpException, host: ArgumentsHost) => {
        // do something here, for example, delete session cookies
      }
    }),
  ],
})
export class AppModule {}
```

## License
This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an issue on GitHub.

## Support
If you have any questions or need support, you can contact us at [info@n4it.nl](mailto:info@n4it.nl).
