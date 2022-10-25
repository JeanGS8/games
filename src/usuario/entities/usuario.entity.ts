import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario{

    @PrimaryGeneratedColumn()
    public id: number;

    @IsEmail()
    @Column({length: 250, nullable: false})
    public usuario: string;

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    public senha: string;

    @OneToMany(() => Produto, (produto) => produto.usuario)
    public produto: Produto[];
}