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
    <button (click)='calculate()'>Calculate</button>

    <br><br>

    <div *ngIf='encounter.easy > 0'>
      <div>Easy: {{ encounter.easy }} xp</div>
      <div>Medium: {{ encounter.medium }} xp</div>
      <div>Hard: {{ encounter.hard }} xp</div>
      <div>Deadly: {{ encounter.deadly }} xp</div>
    </div>
  `
})
export class EncounterComponent {
  players = [
    { lvl: 1, amount: 1 }
  ]
  xpTable = [
    { lvl: 1, easy: 25, medium: 50, hard: 75, deadly: 100 },
    { lvl: 2, easy: 50, medium: 100, hard: 150, deadly: 200 },
    { lvl: 3, easy: 75, medium: 150, hard: 225, deadly: 400 },
    { lvl: 4, easy: 125, medium: 250, hard: 375, deadly: 500 },
    { lvl: 5, easy: 250, medium: 500, hard: 750, deadly: 1100 },
    { lvl: 6, easy: 300, medium: 600, hard: 900, deadly: 1400 },
    { lvl: 7, easy: 350, medium: 750, hard: 1100, deadly: 1700 },
    { lvl: 8, easy: 450, medium: 900, hard: 1400, deadly: 2100 },
    { lvl: 9, easy: 550, medium: 1100, hard: 1600, deadly: 2400 },
    { lvl: 10, easy: 600, medium: 1200, hard: 1900, deadly: 2800 },
    { lvl: 11, easy: 800, medium: 1600, hard: 2400, deadly: 3600 },
    { lvl: 12, easy: 1000, medium: 2000, hard: 3000, deadly: 4500 },
    { lvl: 13, easy: 1100, medium: 2200, hard: 3400, deadly: 5100 },
    { lvl: 14, easy: 1250, medium: 2500, hard: 3800, deadly: 5700 },
    { lvl: 15, easy: 1400, medium: 2800, hard: 4300, deadly: 6400 },
    { lvl: 16, easy: 1600, medium: 3200, hard: 4800, deadly: 7200 },
    { lvl: 17, easy: 2000, medium: 3900, hard: 5900, deadly: 8800 },
    { lvl: 18, easy: 2100, medium: 4200, hard: 6300, deadly: 9500 },
    { lvl: 19, easy: 2400, medium: 4900, hard: 7300, deadly: 10900 },
    { lvl: 20, easy: 2800, medium: 5700, hard: 8500, deadly: 12700 }
  ]
  encounter = { easy: 25, medium: 50, hard: 75, deadly: 100 };

  calculate(){
    this.encounter = { easy: 0, medium: 0, hard: 0, deadly: 0};
    let plLength = this.players.length;
    let xpLength = this.xpTable.length;
    let en = this.encounter;
    let pl = this.players;
    let xp = this.xpTable;

    for(let i = 0; i < plLength; i ++) {
      for(let a = 0; a < xpLength; a ++){
        if(this.players[i].lvl == this.xpTable[a].lvl) {
  
          let easy = en.easy + pl[i].amount * xp[a].easy;
          let medium = en.medium + pl[i].amount * xp[a].medium;
          let hard = en.hard + pl[i].amount * xp[a].hard;
          let deadly = en.deadly + pl[i].amount * xp[a].deadly;
  
          this.encounter = {
            easy: easy,
            medium: medium,
            hard: hard,
            deadly: deadly
          }
        }
      }
    }
  } // end of calculate function

}
