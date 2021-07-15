import { NumberLiteralType } from "../../../../node_modules/typescript/lib/typescript";
import { ProdutoDadosEntrega } from "./produto-dados-entrega"

export class ListaProdutos{
    public nome : string;
    public descricao : string
    public imagem : string
    public categoria : number;
    public valor : number;
    public valorDe : number;
    public disponibilidade : boolean;
    public foraDeLinha : boolean;
    public idLojista : number;
    public dadosEntrega : ProdutoDadosEntrega[];

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getImagem(): string {
        return this.imagem;
    }

    public setImagem(imagem: string): void {
        this.imagem = imagem;
    }

    public getCategoria(): number {
        return this.categoria;
    }

    public setCategoria(categoria: number): void {
        this.categoria = categoria;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getValorDe(): number {
        return this.valorDe;
    }

    public setValorDe(valorDe: number): void {
        this.valorDe = valorDe;
    }

    public isDisponibilidade(): boolean {
        return this.disponibilidade;
    }

    public setDisponibilidade(disponibilidade: boolean): void {
        this.disponibilidade = disponibilidade;
    }

    public isForaDeLinha(): boolean {
        return this.foraDeLinha;
    }

    public setForaDeLinha(foraDeLinha: boolean): void {
        this.foraDeLinha = foraDeLinha;
    }

    public getIdLojista(): number {
        return this.idLojista;
    }

    public setIdLojista(idLojista: number): void {
        this.idLojista = idLojista;
    }

    public getDadosEntrega(): ProdutoDadosEntrega[] {
        return this.dadosEntrega;
    }

    public setDadosEntrega(dadosEntrega: ProdutoDadosEntrega[]): void {
        this.dadosEntrega = dadosEntrega;
    }

}