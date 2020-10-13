import * as stateClasses from './states';

class StateMachine {
  constructor() {
    this.state = "idle";
    this.states = {
      "idle": new stateClasses.Idle(),
      "found": new stateClasses.Found(),
      "flash": new stateClasses.Flash(),
      "colorSteal": new stateClasses.ColorSteal(),
    }
  }
  async tick(drawCtx, video, videoBuffer, posenet) {
    this.state = await this.states[this.state].tick(drawCtx, video, videoBuffer, posenet);
  }
}

export default StateMachine
