import { Component } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "haushaltsbuch";
  public name: string = "";

  public links = [
    { title: "Übersicht", fragment: "uebersicht" },
    { title: "Neu", fragment: "neu" }
  ];

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
    });
  }
}

