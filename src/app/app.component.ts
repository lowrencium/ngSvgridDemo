import {Component} from '@angular/core';
import {UmlClassEntity} from './entities';

@Component({
  selector: 'ngs-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  classes: UmlClassEntity[] = [];
  scale = 100;

  constructor() {
    this.classes.push(Object.assign(new UmlClassEntity(), {
      position: {
        x: 50,
        y: 50
      },
      title: 'Article',
      attributes: ['id', 'title', 'description', 'content'],
      methods: ['edit()', 'publish()'],
    }));
    this.classes.push(Object.assign(new UmlClassEntity(), {
      position: {
        x: 500,
        y: 75
      },
      title: 'Author',
      attributes: ['id', 'firstname', 'lastname'],
      methods: [],
    }));
  }
}
