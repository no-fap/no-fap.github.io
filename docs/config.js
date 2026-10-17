// Single source of truth for achievements + games. Change days/rewards here only.
export const AIMG = n => `resources/images/achievementsvgs/${n}.svg`;
export const ACHS = [
  { days: 3,    name: "Good start",                       img: "01-good-start",                      reward: "A good start. No reward yet." },
  { days: 7,    name: "Heading towards a lust-free life", img: "02-heading-towards-lust-free-life",  reward: "Games section unlocked + 2048" },
  { days: 30,   name: "Lust conqueror",                   img: "03-lust-conqueror",                  reward: "New games unlocked" },
  { days: 60,   name: "Determined",                       img: "04-determined",                      reward: "Further new games unlocked" },
  { days: 180,  name: "Half-year lust-free",              img: "05-half-year-lust-free",             reward: "New games + profile tag" },
  { days: 300,  name: "Yearning for yearly",              img: "06-yearning-for-yearly",             reward: "So close. No reward yet." },
  { days: 365,  name: "Yearly lust breaker",              img: "07-yearly-lust-breaker",             reward: "Multiple games, tag and profile effects" },
  { days: 1095, name: "David Goggins Lust Level",         img: "08-david-goggins-lust-level",        reward: "Special profile effect + permanent tag" }
];
// Crown icon days = old list + achievement days
export const MILESTONES = [...new Set([7, 15, 30, 50, 100, 200, 300, 600, ...ACHS.map(a => a.days)])].sort((a, b) => a - b);
// url:null = placeholder slot (game html still to come)
export const GAMES = [
  { id: "2048",      name: "2048",        days: 7,   url: "games/2048/index.html", desc: "Slide and merge tiles to forge 2048. Your best score is saved.", c: ["#10b981", "#0ea5e9"], glyph: "2048" },
  { id: "tictactoe", name: "Tic-Tac-Toe", days: 30,  url: null, desc: "Play the computer, or invite a friend. Both players need 30+ days.", c: ["#8a2be2", "#0066ff"], glyph: "X O" },
  { id: "tbd60",     name: "Coming soon", days: 60,  url: null, desc: "A new game is on the way.", c: ["#f97316", "#9a3412"], glyph: "?" },
  { id: "tbd180",    name: "Coming soon", days: 180, url: null, desc: "A new game is on the way.", c: ["#94a3b8", "#334155"], glyph: "?" },
  { id: "tbd365",    name: "Coming soon", days: 365, url: null, desc: "A new game is on the way.", c: ["#fbbf24", "#b45309"], glyph: "?" }
];
