import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projektas';

  constructor() {
    fetch("https://kaledinis-ornamentas.herokuapp.com/").then(data => data.json().then( json => this.ingos = json.kaledinioZaisliukoNuotrauka))
    fetch("https://pagrindinis123.herokuapp.com/kaledos").then(data => data.json().then( json => this.ziviles = json.kaledinioZaisliukoNuotrauka))
    fetch("https://zaisliukelis.herokuapp.com").then(data => data.json().then( json => this.arno = json.kaledinioZaisliukoNuotrauka))
    fetch("https://kaledinisapi.herokuapp.com/zaisliukas").then(data => data.json().then( json => this.mindaugo = json.kaledinioZaisliukoNuotrauka))
    fetch("https://kaledinis.herokuapp.com/").then(data => data.json().then( json => this.pauliaus = json.kaledinioZaisliukoNuotrauka))
    fetch("https://zydriuskaledinis.herokuapp.com").then(data => data.json().then( json => this.zydruno = json.kaledinioZaisliukoNuotrauka))

  }

  ingos = "assets/loader.gif"
  ziviles = "assets/loader.gif"
  arno = "assets/loader.gif"
  mindaugo = "assets/loader.gif"
  pauliaus = "assets/loader.gif"
  zydruno = "assets/loader.gif"
}
