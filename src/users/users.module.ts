import { Module } from '@nestjs/common';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

//--para usar el ProductoService es necesario agregarlo en el @module{exports: [productService]}
//--y aqui se importa el productoModule para tener acceso a lo que exporta el module
import { ProductsModule } from '../products/products.module';


@Module({
  imports: [ProductsModule],
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
