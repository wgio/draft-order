const marbleTeams = [
  "Balls of Chaos \t",
  "Black Jacks ",
  "Bumblebees \t",
  "Chocolatiers \t",
  "Crazy Cat's Eyes \t",
  "Gliding Glaciers \t",
  "Green Ducks \t",
  "Hazers \t",
  "Kobalts \t",
  "O'rangers \t",
  "Pinkies \t",
  "Raspberry Racers \t",
  "Savage Speeders \t",
  "Shining Swarm \t",
  "Team Galactic \t",
  "Team Momo \t",
  "Team Plasma \t",
  "Team Primary \t",
  "Thunderbolts ",
  "Wolfpack ",
].map((t) => t.trim());

const teams = [
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

function randomMarbleTeams() {
  // return 3 random teams from marbleTeams
  const teams = [];
  while (teams.length < 3) {
    const randomIndex = Math.floor(Math.random() * marbleTeams.length);
    const randomTeam = marbleTeams[randomIndex];
    if (!teams.includes(randomTeam)) {
      teams.push(randomTeam);
    }
  }

  return teams;
}

function teamsAlreadyChosen(results, teams) {
  for (const [ts, i] of Object.entries(results)) {
    if (ts[0] === teams[0] && ts[1] === teams[1] && ts[2] === teams[2]) {
      return true;
    }
  }

  return false;
}

function main() {
  const results = {};

  for (const t of teams) {
    let finished = false;
    while (!finished) {
      const randomTeams = randomMarbleTeams();
      console.log("randomTeams", randomTeams);
      finished = !teamsAlreadyChosen(results, randomTeams);
      if (finished) {
        results[t] = randomTeams;
      }
    }
  }

  for (const [tm, picks] of Object.entries(results)) {
    console.log(`${tm},${picks.join(",")}`);
  }
}

main();
