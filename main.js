import { DraftPositionAssigner } from "./DraftSpotAssigner.js";

const teamNames = [
  "chett",
  "trop",
  "caltomin",
  "TheMesso",
  "drakesparda",
  "FFDan",
  "dogwatur",
  "Octuplicate",
  "The10thDoc",
  "SpaceGhostForce",
  "BVT",
  "Dutch2552",
  "MonCal",
  "Machiavellian",
];

function generateRandomRankedChoice(n = teamNames.length) {
  var numbers = [];
  for (var i = 1; i <= n; i++) {
    numbers.push(i);
  }

  for (var j = numbers.length - 1; j > 0; j--) {
    var randomIndex = Math.floor(Math.random() * (j + 1));
    var temp = numbers[j];
    numbers[j] = numbers[randomIndex];
    numbers[randomIndex] = temp;
  }

  return numbers;
}

function main() {
  const teams = teamNames.map((t) => ({
    team: t,
    rankedChoice: generateRandomRankedChoice(),
  }));

  DraftPositionAssigner.runFor(teams);
}

main();
