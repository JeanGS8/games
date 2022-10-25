import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bcrypt } from "src/auth/bcrypt/bcrypt";
import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class UsuarioService{

    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt
    ){}

    async findAll(): Promise<Usuario[]>{

        return await this.usuarioRepository.find({
            relations:{
                produto: true
            }
        })
    }

    async findById(id: number): Promise<Usuario>{

        const buscaUsuario = await this.usuarioRepository.findOne({
            where:{
                id
            },
            relations:{
                produto: true
            }
        })

        if(!buscaUsuario || !id)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
        return buscaUsuario;
    }

    async findByUsuario(usuario: string): Promise<Usuario>{

        return await this.usuarioRepository.findOne({
            where:{
                usuario
            }
        })
    }

    async create(usuario: Usuario): Promise<Usuario>{

        const buscaUsuario = await this.findByUsuario(usuario.usuario);
        if(!buscaUsuario)
            return this.usuarioRepository.save(usuario);
        throw new HttpException('Usuario já existe!', HttpStatus.BAD_REQUEST);
    }


    //TODO: criar a função update
}