import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  nome = "SERPRO";
  ocultarUrl = true;
  mensagem = "";
  conteudoAtual = "";
  conteudoSalvo = "";
  isMouseOver = false;

  constructor() {}

  ngOnInit() {}

  public getUrl() {
    return "http://serpro.gov.br";
  }

  desativarBotao() {
    return false;
  }

  onclick() {
    console.log("OI");
    this.ocultarUrl = !this.ocultarUrl;
  }

  onClickFone(telefone: string) {
    if (telefone) {
      this.mensagem = "Chamando número " + telefone + "...";
    } else {
      this.mensagem = "Nenhum número para chamar!";
    }
  }

  onKeyup(event: KeyboardEvent) {
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  onSave(texto: string) {
    this.conteudoSalvo = texto;
  }

  onToggleHover() {
    this.isMouseOver = !this.isMouseOver;
  }
}
