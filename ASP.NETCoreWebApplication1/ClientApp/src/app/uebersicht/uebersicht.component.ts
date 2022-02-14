import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Buchung } from "./buchung";

@Component({
  selector: "app-uebersicht",
  templateUrl: "./uebersicht.component.html",
  styleUrls: ["./uebersicht.component.css"]
})
export class UebersichtComponent implements OnInit {
  public buchungen: Buchung[] = [];

  constructor(httpClient: HttpClient) {
    httpClient.get<Buchung[]>("https://localhost:7006/buchung/uebersicht")
      .subscribe(result => {
        this.buchungen = result;
      }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
