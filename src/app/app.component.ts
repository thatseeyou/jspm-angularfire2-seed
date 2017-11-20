import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of heroes';
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/heroes').valueChanges();
  }
}
