import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";

@Module({
    controllers: [],
    exports: [TypeOrmModule],
    imports: [TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService]
})
export class CategoriaModule{}