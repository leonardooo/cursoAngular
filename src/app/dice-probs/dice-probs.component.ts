import { Component, OnInit } from '@angular/core';
import { Dice, Side, Symbol, Pool } from './dice';

@Component({
  selector: 'app-dice-probs',
  templateUrl: './dice-probs.component.html',
  styleUrls: ['./dice-probs.component.css']
})
export class DiceProbsComponent implements OnInit {

  pool: Dice[];
  allSymbols: Symbol[];
  tuples: any[];

  constructor() {
    this.tuples = [];
    this.pool = [];
    this.allSymbols = [Symbol.Blank, Symbol.Discard, Symbol.Disrupt, Symbol.Focus,
      Symbol.Indirect, Symbol.Melee, Symbol.Ranged, Symbol.Resource, Symbol.Shield,
      Symbol.Special, Symbol.NoSymbol];

    this.initDices();
    this.calc();
    this.calcMax();
    this.allDamage();
  }

  ngOnInit() {
  }

  private allDamage() {
    const max = this.max(Symbol.Ranged);
    console.log('max = ' + max);
    for (let i = 1; i <= max; i++) {
      const res = this.prob(i, Symbol.Ranged);
      console.log(i + 'dmg = ' + res);
    }
  }

  private prob(value: number, symbol: Symbol) {
    return this.count(value, symbol) / this.tuples.length;
  }

  private calcMax() {
    for (const s of this.allSymbols) {
      console.log(s + ' - ' + this.max(s));
    }
  }

  private count(value: number, symbol: Symbol): number {
    let res = 0;
    for (const t of this.tuples) {
      let resTuple = 0;
      for (let s = 0; s < t.length; s++) {
        const sideTemp = this.pool[s].sides[t[s]];
        if (sideTemp.symbol === symbol) {
          resTuple += sideTemp.value;
        }
      }

      if (resTuple >= value) {
        res++;
      }
    }

    return res;
  }

  private max(symbol: Symbol): number {
    let res = 0;
    for (const t of this.tuples) {
      let resTuple = 0;
      for (let s = 0; s < t.length; s++) {
        const sideTemp = this.pool[s].sides[t[s]];
        if (sideTemp.symbol === symbol) {
          resTuple += sideTemp.value;
        }
      }

      if (resTuple > res) {
        res = resTuple;
      }
    }

    return res;
  }

  private calc() {
    let tuple = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    this.dfs(0, this.pool.length, tuple);

    console.log(this.tuples);
  }

  private dfs(depth: number, maxDepth: number, tuple: number[]) {
    if (depth === maxDepth) {
      const tupleTemp = [];
      for (let d = 0; d < maxDepth; d++) {
        tupleTemp.push(tuple[d]);
      }
      this.tuples.push(tupleTemp);
      return;
    }

    for (let i = 0; i < 6; i++) {
      tuple[depth] = i;
      this.dfs(depth + 1, maxDepth, tuple);
    }
  }

  private initDices() {
    const dice1 = new Dice([
      new Side(Symbol.Ranged, 1, 0, false),
      new Side(Symbol.Ranged, 2, 0, true),
      new Side(Symbol.Disrupt, 1, 0, false),
      new Side(Symbol.Resource, 1, 0, false),
      new Side(Symbol.Special, 0, 0, false),
      new Side(Symbol.Blank, 0, 0, false)
    ]);

    const dice2 = new Dice([
      new Side(Symbol.Ranged, 1, 0, false),
      new Side(Symbol.Ranged, 2, 0, true),
      new Side(Symbol.Disrupt, 1, 0, false),
      new Side(Symbol.Resource, 1, 0, false),
      new Side(Symbol.Special, 0, 0, false),
      new Side(Symbol.Blank, 0, 0, false)
    ]);

    const dice3 = new Dice([
      new Side(Symbol.Ranged, 2, 0, true),
      new Side(Symbol.Ranged, 2, 0, true),
      new Side(Symbol.Shield, 1, 0, false),
      new Side(Symbol.Resource, 1, 0, false),
      new Side(Symbol.Blank, 0, 0, false),
      new Side(Symbol.Blank, 0, 0, false)
    ]);

    const dice4 = new Dice([
      new Side(Symbol.Ranged, 2, 0, false),
      new Side(Symbol.Ranged, 3, 0, false),
      new Side(Symbol.Discard, 1, 0, false),
      new Side(Symbol.Shield, 1, 0, false),
      new Side(Symbol.Resource, 1, 0, false),
      new Side(Symbol.Blank, 0, 0, false)
    ]);

    const dice5 = new Dice([
      new Side(Symbol.Ranged, 2, 0, false),
      new Side(Symbol.Ranged, 3, 0, false),
      new Side(Symbol.Discard, 1, 0, false),
      new Side(Symbol.Shield, 1, 0, false),
      new Side(Symbol.Resource, 1, 0, false),
      new Side(Symbol.Blank, 0, 0, false)
    ]);

    this.pool.push(dice1);
    this.pool.push(dice2);
    this.pool.push(dice3);
    this.pool.push(dice4);
    this.pool.push(dice5);
  }

}
