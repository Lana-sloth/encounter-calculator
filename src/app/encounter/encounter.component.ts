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
  encounter = { easy: 0, medium: 0, hard: 0, deadly: 0};
  calculate(){
    this.encounter = { easy: 0, medium: 0, hard: 0, deadly: 0};
    let length = this.players.length
    for(let i = 0; i < length; i ++) {
      if(this.players[i].lvl == this.xpTable[i].lvl) {
        let easy = this.encounter.easy + this.players[i].amount*this.xpTable[i].easy;
        let medium = this.encounter.medium + this.players[i].amount*this.xpTable[i].medium;
        let hard = this.encounter.hard + this.players[i].amount*this.xpTable[i].hard;
        let deadly = this.encounter.deadly + this.players[i].amount*this.xpTable[i].deadly;

        this.encounter = {
          easy: easy,
          medium: medium,
          hard: hard,
          deadly: deadly
        }
      } 
    }
  }
}
