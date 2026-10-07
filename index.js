function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


// points scored by player
const numPointsScored = (playerName) => {
    const game = gameObject();
    let points = 0;

    for (const [teamName, teamData] of Object.entries(game)) {
        for (const [player, playerData] of Object.entries(teamData.players)) {
            if (player === playerName) {
                points = playerData.points;
                break;
            }
        }
    }

    return points;
};

// shoe size of player
const shoeSize = (playerName) => {
    const game = gameObject();
    let shoe = 0;

    for (const [teamName, teamData] of Object.entries(game)) {
        for (const [player, playerData] of Object.entries(teamData.players)) {
            if (player === playerName) {
                shoe = playerData.shoe;
                break;
            }
        }
    }

    return shoe;
};

// return the colors of a team
function teamColors(teamName) {
  const game = gameObject();

  for (const team of Object.values(game)) {
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

// get team names
function teamNames() {
  const game = gameObject();
  const teamNamesArray = [];

  for (const team of Object.values(game)) {
    teamNamesArray.push(team.teamName);
  }

  return teamNamesArray;
}

// Returns an array of player numbers for a given team
function playerNumbers(teamName) {
  const game = gameObject();
  const playerNumbersArray = [];

  for (const team of Object.values(game)) {
    if (team.teamName === teamName) {
      for (const player of Object.values(team.players)) {
        playerNumbersArray.push(player.number);
      }
    }
  }

  return playerNumbersArray;
}

// Returns the stats of a given player
function playerStats(playerName) {
  const game = gameObject();

  for (const team of Object.values(game)) {
    if (team.players[playerName]) {
      return team.players[playerName];
    }
  }
}        

// Returns the number of rebounds for the player with the biggest shoe size
function bigShoeRebounds() {
  const game = gameObject();
  let maxShoeSize = 0;
  let playerWithBiggestShoe = null;

  for (const team of Object.values(game)) {
    for (const [playerName, playerData] of Object.entries(team.players)) {
      if (playerData.shoe > maxShoeSize) {
        maxShoeSize = playerData.shoe;
        playerWithBiggestShoe = playerName;
      }
    }
  }

  return playerStats(playerWithBiggestShoe).rebounds;
}

console.log(numPointsScored("Jeff Adrien"));
console.log(shoeSize("Jeff Adrien"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerStats("Jeff Adrien"));
console.log(bigShoeRebounds());