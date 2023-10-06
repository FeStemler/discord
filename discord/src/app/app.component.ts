import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'discord';

  image= '/assets/bg.png'

   changeBG() {
    this.image = '/assets/bg-joker.jpg'
  }
}
