import { MaterialLeitura } from "./materialLeitura";

class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(titulo: string, autor: string, numeroPagina: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPagina = numeroPagina;
    }

    exibirDetalhe(): void {
        console.log (`Detalhes do Livro: 
            Título: ${this.titulo}, 
            Autor: ${this.autor}, 
            Número de páginas: ${this.numeroPagina}`)
    }
}

class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;

    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }

    exibirDetalhe(): void {
        console.log (`Detalhes da Revista: 
            Título: ${this.titulo}, 
            Autor: ${this.autor}, 
            Edição: ${this.edicao}`)
    }
}

class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhe(): void {
        console.log (`Detalhes da Revista: 
            Título: ${this.titulo}, 
            Autor: ${this.autor}, 
            Data Publicação: ${this.dataPublicacao.toDateString()}`)
    }
}

const livro = new Livro("Bridgerton", "Julia Quinn", 589)
livro.exibirDetalhe()
const revista = new Revista("Veja", "Grupo Globo", 150)
revista.exibirDetalhe()
const artigo = new Artigo("IA", "Jane Smith", new Date(2021,11,1))
artigo.exibirDetalhe()





// Intl.DateTimeFormat("pt-BR").format(this.dataPublicacao)