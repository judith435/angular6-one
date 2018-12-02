import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'books content', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'books header', cols: 2, rows: 1, content: "judith", class:"ca" },
        { title: 'Card 2', cols: 1, rows: 1, content: "meir", class:"cb" },
        { title: 'Card 3', cols: 1, rows: 2, content: "chaim" },
        { title: 'Card 4', cols: 1, rows: 1, content: "batsheva" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
