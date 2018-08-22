import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  actualNumber: number = 0;
  interval;
  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
        this.actualNumber += 1;
        this.gameStarted.emit(this.actualNumber);
      }, 1000
    );
  }

  stopGame() {
    if (this.interval) {
      clearInterval(this.interval);
    };
  }

}
