import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  nome = "SERPRO";
  ocultarUrl = true;
  mensagem = '';

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
}
