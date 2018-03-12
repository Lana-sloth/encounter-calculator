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
    { lvl: 2, easy: 50, medium: 100, hard: 150, deadly: 200 }
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
