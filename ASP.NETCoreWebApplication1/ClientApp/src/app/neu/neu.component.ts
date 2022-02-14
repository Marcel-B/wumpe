import { Component, Inject, OnInit } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-neu",
  templateUrl: "./neu.component.html",
  providers: [NgbDropdownConfig],
  styleUrls: ["./neu.component.css"]
})
export class NeuComponent implements OnInit {
  public box: string[] = [];
  public name?: string = "Bitte wählen";
  public noo?: string;

  constructor(httpClient: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    baseUrl = "https://localhost:7006/";
    httpClient.get<string[]>(baseUrl + "buchung/neu/arten")
      .subscribe(result => {
        this.box = result;
      }, error => console.error(error));
  }

  ngOnInit(): void {
  }

  cha(art: string): void {
    this.name = art;
  }
}
