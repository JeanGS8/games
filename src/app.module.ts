import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'db_games',
			entities: [Produto],
			synchronize: true
		}),
		ProdutoModule,
		CategoriaModule
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
