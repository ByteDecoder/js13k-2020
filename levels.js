var levels = [];
levels.push([
	{gates: [1, 3, 6, 12, 15], levelSpread: [1, 5, 10, 17], yOff: -2}, //Level select
	"##########.",
	"p1g.1.1.1.g",
	"##########.",
	"2.2.2.2.2.g",
	"##########.",
	".333.3333.g",
	"##########.",
	"4.4.4.4g4#."
]);
levels.push([
	{nr: 100, name: "A Wrapping World"}, //Hey, it's a normal Sokoban puzzle! Sorta.
	"#####.#",
	"......#",
	"...#..#",
	"#.###.#",
	".b#t.p.",
	"..###.#",
]);
levels.push([ //Decent easy level, rdddlldddlruuuulldrllddru (25)
	{nr: 101, name: "Infinite Inlet"},
	"..#",
	"p.#",
	".tbt",
	"#b.b",
	".tbt",
]);
levels.push([
	{nr: 102, name: "Glass Hallway"}, //Too easy to be interesting
	"##.##",
	".t.tp",
	"bb#bb",
	".t.t",
	"##.##"
]);
levels.push([
	{nr: 103, name: "Girded Grid"}, //uurruullllddrrudrruullddlluuuuudrrddrruuudrrddlruurrddl ( ~50)
	".#.#.#",
	"t.b.t",
	".#.#.#",
	"b.p.b",
	".#.#.#",
	"t.b.t"
]);
levels.push([
	{nr: 200, name: "Wrap Around The Block", yOff: 2}, //Wrap offset introduction puzzle
	"",
	"####",
	"",
	"####",
	"..b",
	"####",
	"t#.p",
	"####"
]);
levels.push([
	{nr: 201, name: "Crowned Conundrum", xOff: 3}, //uuulllllrrddduuuuuuddddddlrrluuurrruuuuuullrrddddddllrrdulllu (61)
	"pb...b",
	"b#.#.#",
	".#ttt#",
]);
levels.push([
	{nr: 202, name: "Twisted Terrace", xOff: 3}, //llLddDRlLruuudddDDDDurRlluuuuuUU (32)
	"b..p",
	".##.##",
	".#.t.#",
	"bbt#tb",
	".#.t.#",
	".##.##"
]);
levels.push([
	{nr: 203, name: "Continuous Corridor", yOff: 3}, //ldurrdrrrrrurrrrrrrrrdrullldrrulllllldduurrrrdlllullldlllurrrr (62)
	"######",
	"tb..p",
	"t....b",
	"######",
	"t#...b",
	"tb...#"
]);
levels.push([
	{nr: 204, name: "Grandiose Garden", yOff: 3}, //???
	"..bpb",
	"..#.#",
	".#.t.#",
	".bt.tb",
	".#.t.#",
	"..#.#"
]);
levels.push([
	{nr: 300, name: "Sift & Shift"}, //Tutorial level for introducing the shifters
	"bt##|#",
	"###p",
	"####.#"
]);
levels.push([
	{nr: 301, name: "Cornered Contraption", yOff: 1}, //drrrrrrrlllllurdruulurrrrdrruulrddllurdrulurrrrrurdldrr (55)
	"p",
	".|",
	"#####",
	".t#",
	"###"
]);
levels.push([
	{nr: 302, name: "Zealous Zigzag"}, //???
	"#t#t#t",
	".-..-",
	"###..#",
	".p####",
	".-",
]);
levels.push([
	{nr: 303, name: "Irregular Infrastructure", yOff: 2}, //urullulddddddldrurdldrrrrdrdddddddddddrdllllluldddddrdlllllulddddrdlll (70)
	"##.|",
	".#..p",
	".#..#",
	".#.#t",
	"....#",
	""
]);
levels.push([
	{nr: 304, name: "Enchanted Encagement"}, //ldRuluRdrUUUUUluRRluuuulluuuUruLLrUUUddllldRRllduurrrrlDDDDDuuuullldRRurDDDD (76)
	"##.#.###.#.#",
	"#..-..#....#",
	"#..p..#.t.t",
	"#..-..##",
	"##.#.###.#.#",
]);
levels.push([
	{nr: 305, name: "Riddle Raster", yOff: -1}, //rDullllluLLLLLLLLLLDuuuurRurDrrrddllLUdDudDrrurrRllU (50)
	"",
	".t",
	"#|#",
	".t",
	"#b#",
	"pt",
	"#|#",
]);
levels.push([
	{nr: 306, name: "Locked Loungerooms", yOff: -2}, //lrrlluurrDLLLLLLLdlUUrrdddrrrrrddrruLdlUUlluulllluuulluurDDldRRddrrrrruurDDllllLulDuullllllllllullldRRRRRRRRRRRurDrddrddlUluluurlddrRuulDrdRRRlllulldRRRR (153)
	"#########",
	"####..###",
	".......##",
	"####....#",
	"####",
	"....#...#",
	"#....#",
	"...||.###",
	"##.p",
	"tt#...###",
]);
levels.push([
	{nr: 400, name: "Rubble Rundown"}, //rDullllluLLLLLLLLLLDuuuurRurDrrrddllLUdDudDrrurrRllU (50)
	"rrr#..r#",
	".pb...r#",
	"#t######"
]);
levels.push([
	{nr: 401, name: "Quality Questions", yOff: -2}, //rrrrrrDurrrrrUdrrrrrrrrrlDurrrrrrUdrrrrrrrDurrrrrrrrrrrUdlllrrrrrrrrrrDurrrrrrrlUdrrrrrrrrrlDurrrUdrrrrU (104)
	"rrrrrrr",
	"#t|#|t#",
	"#|t#t|#",
	"rrrprrr",
	"#######",
	"rrrrrrr",
	"#t#|#t#",
	"#|#t#|#",
	"rrrrrrr",
	"#######",
]);
levels.push([
	{nr: 402, name: "Swirling Stars"},
	"....#r+tr",
	"b##..r.rb",
	"b.##..r.b",
	"..t...p",
	"#ttt#rrr#",
]);
levels.push([
	{nr: 403, name: "Box Breakout"}, //I really really like this idea, drdLLLrruuuUddddllLrrruuuUddddlllLLLulDDDDDuuuurrrrUdllllddddDDrdLLrrluuuurRdRlullddddlLLrrruuuulldLdlUUUluullLLLLDlluRdrUluuruuU (129)
	"b.#.#.b",
	".#rpr#",
	"#rrtrr#",
	"...+",
	"#rrtrr#",
	"q#r.r#q", //The q's mark possible target locations
	"bq#.#.b",
]);
levels.push([
	{nr: 404, name: "Edge Not Found", autoX: 1},
	"",
	"#.#.###.#.#",
	"#p#.#.#.#t#",
	"###.#.#.###",
	"..#.###...#",
]);