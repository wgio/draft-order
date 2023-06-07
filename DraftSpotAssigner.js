export class DraftPositionAssigner {
  constructor(teams) {
    this.teams = teams;
    this.numRounds = teams.length;

    // Holds final draft order
    this.draftOrder = {};
  }

  static runFor(teams) {
    const dpa = new DraftPositionAssigner(teams);
    return dpa.run();
  }

  run() {
    console.log("Running for", this.numRounds, "rounds");
    for (let n = 0; n < this.numRounds; n++) {
      this.assignTeamsForPositionChoiceN(n);
    }

    this.printDraftOrder();
  }

  assignTeamsForPositionChoiceN(n) {
    for (
      let draftPosition = 1;
      draftPosition <= this.numRounds;
      draftPosition++
    ) {
      if (!this.draftOrder[draftPosition]) {
        const teamsWantingThisSpot = this.teams.filter(
          (d) => d.rankedChoice[n] === draftPosition
        );

        const randomIndex = Math.floor(
          Math.random() * teamsWantingThisSpot.length
        );

        if (teamsWantingThisSpot.length > 0) {
          const chosenTeam = teamsWantingThisSpot[randomIndex];
          this.draftOrder[draftPosition] = chosenTeam;
          this.removeTeamFromQueue(chosenTeam);
        }
      }
    }
  }

  removeTeamFromQueue(team) {
    this.teams = this.teams.filter((d) => d.team !== team.team);
  }

  printDraftOrder() {
    for (let i = 1; i <= this.numRounds; i++) {
      const team = this.draftOrder[i];
      const choice = team.rankedChoice.indexOf(i) + 1;
      console.log(
        `${i}: ${team.team}\n\tChoice ${choice} from [${team.rankedChoice}]`
      );
    }
  }
}
