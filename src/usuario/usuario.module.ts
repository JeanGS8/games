import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";

@Module({
    controllers: [],
    exports: [TypeOrmModule],
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: []
})
export class UsuarioModule{}