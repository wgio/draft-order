const marbleTeams = [
  "Balls of Chaos",
  "Black Jacks",
  "Bumblebees",
  "Chocolatiers",
  "Crazy Cat's Eyes",
  "Gliding Glaciers",
  "Green Ducks",
  "Hazers",
  "Kobalts",
  "O'rangers",
  "Pinkies",
  "Raspberry Racers",
  "Savage Speeders",
  "Shining Swarm",
  "Team Galactic",
  "Team Momo",
  "Team Plasma",
  "Team Primary",
  "Thunderbolts",
  "Wolfpack",
];

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

// return 3 random teams from marbleTeams
function randomMarbleTeams(n = 3) {
  const teams = [];
  while (teams.length < n) {
    const randomIndex = Math.floor(Math.random() * marbleTeams.length);
    const randomTeam = marbleTeams[randomIndex];
    if (!teams.includes(randomTeam)) {
      teams.push(randomTeam);
    }
  }

  return teams;
}

function teamsAlreadyChosen(results, teams) {
  const n = teams.length;
  for (const [ts, i] of Object.entries(results)) {
    for (let i = 0; i < n; i++) {
      if (ts[i] === teams[i]) {
        return true;
      }
    }
  }

  return false;
}

function main() {
  const results = {};

  //shuffle teams randomly
  const shuffledTeams = [];
  while (shuffledTeams.length < teams.length) {
    const randomIndex = Math.floor(Math.random() * teams.length);
    const randomTeam = teams[randomIndex];
    if (!shuffledTeams.includes(randomTeam)) {
      shuffledTeams.push(randomTeam);
    }
  }

  for (const t of shuffledTeams) {
    while (!results[t]) {
      const randomTeams = randomMarbleTeams();

      if (teamsAlreadyChosen(results, randomTeams) === false) {
        results[t] = randomTeams;
      }
    }
  }

  //   for (const [tm, picks] of Object.entries(results)) {
  //     // console.log(`${tm},${picks.join(",")}`);
  //     console.log(tm, "\t\t\t", picks);
  //   }

  console.table(results);
}

main();
