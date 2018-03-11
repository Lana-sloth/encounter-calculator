import { Component } from '@angular/core';

@Component({
  selector: 'encounter',
  styleUrls: ['../app.component.css'],
  template: `
    <div>Party:</div>
    <table>
      <tr *ngFor='let player of players'>
        <td> <input [(ngModel)]='player.amount' /> </td>
        <td> {{ player.amount > 1 ? "players" : "player" }} of </td>
        <td> <input [(ngModel)]='player.lvl'/> lvl </td>
      </tr>
    </table>
  `
})
export class EncounterComponent {
  players = [
    { lvl: 1, amount: 1 }
  ]
}
