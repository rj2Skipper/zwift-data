import { Achievement } from "./types";

export const achievements: ReadonlyArray<Achievement> = (
  [
    [1, "JELLY", "500w10sec"],
    [2, "MASTER DRAFTSMAN", "Drafting"],
    [3, "WHOA NELLY", "30mphTrike"],
    [4, "SPEED DEMON", "40mphBike"],
    [5, "DAREDEVIL", "50mphRocket"],
    [6, "CAN'T STOP NOW", "Distance10"],
    [8, "SPRINTER APPRENTICE", "Watt1"],
    [9, "LIT", "Watt2"],
    [10, "CIRCUIT BREAKER", "Watt3"],
    [11, "JUST SCRAPE IT", "Watt4"],
    [12, "THE BLOWDRIER", "Watt5"],
    [13, "PREMIER POWER", "Watt6"],
    [14, "OFF THE ROCKS", "Watt7"],
    [15, "1.21 GIGAWATTS", "Watt8"],
    [16, "MARATHONER", "Distance40km"],
    [17, "100 CLICKS", "Distance100km"],
    [18, "NO BIG DEAL", "Distance100mi"],
    [22, "HABITUAL", "Ride3days"],
    [23, "ADDICTED", "Ride7Days"],
    [24, "WORKING FROM HOME", "Ride14days"],
    [25, "YOU'RE POPULAR", "GetRideOn1"],
    [26, "YOU'RE FAMOUS", "GetRideOn2"],
    [27, "BIGGER THAN JENSIE!", "GetRideOn3"],
    [28, "PAPARAZZI", "Fanview"],
    [29, "INTO THE WIND", "Uturn"],
    [30, "RIDE ON", "GiveRideOn1"],
    [31, "BIG FAN", "GiveRideOn2"],
    [32, "FAN CLUB", "GiveRideOn3"],
    [34, "STATISTICIAN", "ConnectToStrava"],
    [35, "PAIRED", "PairZwift"],
    [37, "SWEAT!", "CompleteWorkout"],
    [38, "100KPH!", "100kph"],
    [39, "WARMED UP", "VolcanoLap01"],
    [40, "HOTHEAD", "VolcanoLap02"],
    [41, "ON FIRE!", "VolcanoLap03"],
    [42, "HOT OFF THE LINE", "SessionRun1mi"],
    [43, "FIRST FIVE", "SessionRun5k"],
    [44, "GIMMIE TEN", "SessionRun10k"],
    [45, "RUNNERS DOZEN", "SessionRun13mi"],
    [46, "GOING THE DISTANCE", "SessionRun26mi"],
    [47, "CENTURION", "DistanceRun100"],
    [48, "STREET CRED", "DistanceRun500"],
    [49, "PURSUIT OF HAPPINESS", "DistanceRun1000"],
    [50, "EARNING THE DONUTS", "MileRun9min"],
    [51, "LEG WARMER", "MileRun8min"],
    [52, "LIKE THE WIND", "MileRun7min"],
    [53, "ENGINES ARE GO", "MileRun6min"],
    [54, "OLYMPIAN", "MileRun5min"],
    [55, "EVERESTED!", "EverestChallenge"],
    [56, "AVID CLIMBER", "ClimbAlpe5x"],
    [57, "MASOCHIST", "ClimbAlpe25x"],
    [58, "LIFTOFF!", "ClimbAlpe1hour"],
    [59, "2018 UCI WORLDS SHORT LAP", "RouteComplete"],
    [60, "INNSBRUCKRING", "RouteComplete"],
    [61, "ACHTERBAHN", "RouteComplete"],
    [62, "LONDON LOOP", "RouteComplete"],
    [63, "GREATER LONDON FLAT", "RouteComplete"],
    [64, "LONDON CLASSIQUE", "RouteComplete"],
    [65, "LONDON 8", "RouteComplete"],
    [66, "SURREY HILLS", "RouteComplete"],
    [67, "PARK PERIMETER LOOP", "RouteComplete"],
    [68, "KNICKERBOCKER", "RouteComplete"],
    [69, "ASTORIA LINE 8", "RouteComplete"],
    [70, "EVERYTHING BAGEL", "RouteComplete"],
    [71, "GRAND CENTRAL CIRCUIT", "RouteComplete"],
    [72, "2015 UCI WORLDS COURSE", "RouteComplete"],
    [73, "COBBLED CLIMBS", "RouteComplete"],
    [74, "THE FAN FLATS", "RouteComplete"],
    [75, "HILLY ROUTE", "RouteComplete"],
    [76, "SAND AND SEQUOIAS", "RouteComplete"],
    [77, "VOLCANO CIRCUIT", "RouteComplete"],
    [78, "VOLCANO CLIMB", "RouteComplete"],
    [79, "THREE SISTERS", "RouteComplete"],
    [80, "2019 UCI WORLDS HARROGATE CIRCUIT", "RouteComplete"],
    [81, "QUEEN'S HIGHWAY", "RouteComplete"],
    [82, "DUCHY ESTATE", "RouteComplete"],
    [83, "ROYAL PUMP ROOM 8", "RouteComplete"],
    [84, "THE PRETZEL", "RouteComplete"],
    [85, "JUNGLE CIRCUIT", "RouteComplete"],
    [86, "ROAD TO SKY", "RouteComplete"],
    [87, "FOUR HORSEMEN", "RouteComplete"],
    [88, "TOUR OF FIRE AND ICE", "RouteComplete"],
    [89, "BIG LOOP", "RouteComplete"],
    [90, "MOUNTAIN ROUTE", "RouteComplete"],
    [91, "MOUNTAIN 8", "RouteComplete"],
    [92, "FIGURE 8", "RouteComplete"],
    [93, "FIGURE 8 REVERSE", "RouteComplete"],
    [94, "FLAT ROUTE", "RouteComplete"],
    [95, "ROAD TO RUINS", "RouteComplete"],
    [96, "THE MEGA PRETZEL", "RouteComplete"],
    [97, "VOLCANO CIRCUIT CCW", "RouteComplete"],
    [98, "VOLCANO FLAT", "RouteComplete"],
    [99, "OUT AND BACK AGAIN", "RouteComplete"],
    [100, "TEMPUS FUGIT", "RouteComplete"],
    [101, "THE UBER PRETZEL", "RouteComplete"],
    [102, "BIGGER LOOP", "RouteComplete"],
    [103, "TICK TOCK", "RouteComplete"],
    [104, "WHOLE LOTTA LAVA", "RouteComplete"],
    [105, "MUIR AND THE MOUNTAIN", "RouteComplete"],
    [106, "BIG FOOT HILLS", "RouteComplete"],
    [107, "DUST IN THE WIND", "RouteComplete"],
    [108, "QUATCH QUEST", "RouteComplete"],
    [109, "GREATER LONDON 8", "RouteComplete"],
    [110, "THE LONDON PRETZEL", "RouteComplete"],
    [111, "THE PRL HALF", "RouteComplete"],
    [112, "GREATEST LONDON FLAT", "RouteComplete"],
    [113, "THE PRL FULL", "RouteComplete"],
    [114, "GREATER LONDON LOOP", "RouteComplete"],
    [115, "GREATEST LONDON LOOP", "RouteComplete"],
    [116, "TRIPLE LOOPS", "RouteComplete"],
    [117, "KNICKERBOCKER REVERSE", "RouteComplete"],
    [118, "LADY LIBERTY", "RouteComplete"],
    [119, "MIGHTY METROPOLITAN", "RouteComplete"],
    [120, "RISING EMPIRE", "RouteComplete"],
    [121, "THE 6 TRAIN", "RouteComplete"],
    [122, "THE HIGHLINE", "RouteComplete"],
    [123, "LUTSCHER", "RouteComplete"],
    [124, "LUTSCHER CCW", "RouteComplete"],
    [125, "TOUR OF TEWIT WELL", "RouteComplete"],
    [126, "11.1 OCEAN BLVD", "RouteComplete"],
    [127, "5K LOOP", "RouteComplete"],
    [128, "CHILI PEPPER", "RouteComplete"],
    [129, "JON'S ROUTE", "RouteComplete"],
    [130, "THAT'S AMORE", "RouteComplete"],
    [131, "COUCH TO SKY K", "RouteComplete"],
    [132, "FLAT IRONS", "RouteComplete"],
    [133, "HUDSON ROLL", "RouteComplete"],
    [134, "PARK TO PEAK", "RouteComplete"],
    [135, "SHUMAN TRAIL LOOP", "RouteComplete"],
    [136, "MAY FIELD", "RouteComplete"],
    [137, "R.G.V.", "RouteComplete"],
    [138, "DOUCE FRANCE", "RouteComplete"],
    [139, "CASSE PATTES", "RouteComplete"],
    [140, "ROULE MA POULE", "RouteComplete"],
    [141, "PETIT BOUCLE", "RouteComplete"],
    [142, "TIRE BOUCHON", "RouteComplete"],
    [143, "VEN-TOP", "RouteComplete"],
    [144, "CHAMPS-ÉLYSÉES", "RouteComplete"],
    [145, "LUTECE EXPRESS", "RouteComplete"],
    [146, "BEACH ISLAND LOOP", "RouteComplete"],
    [147, "OCEAN LAVA CLIFFSIDE LOOP", "RouteComplete"],
    [148, "SERPENTINE 8", "RouteComplete"],
    [149, "TWO BRIDGES LOOP", "RouteComplete"],
    [150, "SEA TO TREE", "RouteComplete"],
    [151, "KAPPA QUEST", "RouteComplete"],
    [152, "CHAIN CHOMPER", "RouteComplete"],
    [153, "COUNTRYSIDE TOUR", "RouteComplete"],
    [154, "FLATLAND LOOP", "RouteComplete"],
    [155, "TWO VILLAGE LOOP", "RouteComplete"],
    [156, "SPIRIT FOREST", "RouteComplete"],
    [157, "THREE VILLAGE LOOP", "RouteComplete"],
    [158, "KAPPA QUEST REVERSE", "RouteComplete"],
    [159, "SUKI'S PLAYGROUND", "RouteComplete"],
    [160, "VALLEY TO MOUNTAINTOP", "RouteComplete"],
    [161, "FARMLAND LOOP", "RouteComplete"],
    [162, "CLIMBER'S GAMBIT", "RouteComplete"],
    [163, "LEGENDS AND LAVA", "RouteComplete"],
    [164, "RAILWAYS AND ROOFTOPS", "RouteComplete"],
    [165, "ROOFTOP RENDEZVOUS", "RouteComplete"],
    [166, "NEON FLATS", "RouteComplete"],
    [167, "SPRINTER'S PLAYGROUND", "RouteComplete"],
    [168, "NEOKYO ALL-NIGHTER", "RouteComplete"],
    [169, "SLEEPLESS CITY", "RouteComplete"],
    [170, "WANDERING FLATS", "RouteComplete"],
    [171, "TEMPLES AND TOWERS", "RouteComplete"],
    [172, "TWILIGHT HARBOR", "RouteComplete"],
    [173, "CHASING THE SUN", "RouteComplete"],
    [174, "ELECTRIC LOOP", "RouteComplete"],
    [175, "CASTLE TO CASTLE", "RouteComplete"],
    [176, "NEOKYO CRIT COURSE", "RouteComplete"],
    [177, "THREE LITTLE SISTERS", "RouteComplete"],
    [178, "TRIPLE FLAT LOOPS", "RouteComplete"],
    [179, "DOWNTOWN TITANS", "RouteComplete"],
    [180, "EASTERN EIGHT", "RouteComplete"],
    [181, "MAYAN BRIDGE LOOP", "RouteComplete"],
    [182, "ITALIAN VILLAS CIRCUIT", "RouteComplete"],
    [183, "HANDFUL OF GRAVEL (CYCLING)", "RouteComplete"],
    [184, "HANDFUL OF GRAVEL (RUNNING)", "RouteComplete"],
    [185, "SURFIN' SAFARI", "RouteComplete"],
    [186, "SPLASH AND DASH", "RouteComplete"],
    [194, "MECH ISLE LOOP", "RouteComplete"],
    [195, "BRIDGES AND BOARDWALKS", "RouteComplete"],
    [196, "ISLAND HOPPER", "RouteComplete"],
    [197, "FINE AND SANDY", "RouteComplete"],
    [198, "ISLAND OUTSKIRTS", "RouteComplete"],
    [199, "MAKURI 40", "RouteComplete"],
    [200, "COUNTRY TO COASTAL", "RouteComplete"],
    [201, "TURF N SURF", "RouteComplete"],
    [202, "LA REINE", "RouteComplete"],
    [203, "GOTHAM GRIND", "RouteComplete"],
    [204, "WATOPIAS WAISTBAND", "RouteComplete"],
    [205, "RICHMOND UCI REVERSE", "RouteComplete"],
    [206, "ROLLING HIGHLANDS", "RouteComplete"],
    [207, "CITY AND THE SGURR", "RouteComplete"],
    [208, "GLASGOW CRIT CIRCUIT", "RouteComplete"],
    [209, "LOCH LOOP", "RouteComplete"],
    [210, "THE MUCKLE YIN", "RouteComplete"],
    [211, "Portal Climber", "ClimbPortal1x"],
    [212, "Climb Portal Pro", "ClimbPortal10x"],
    [213, "Legs of Steel", "ClimbPortal25x"],
    [214, "COAST CRUSHER", "RouteComplete"],
    [215, "THE BIG RING", "RouteComplete"],
    [216, "ACCELERATE TO ELEVATE", "RouteComplete"],
    [217, "SHORELINES AND SUMMITS", "RouteComplete"],
    [218, "SUGAR COOKIE", "RouteComplete"],
    [219, "GOING COASTAL", "RouteComplete"],
    [220, "TEMPLE TREK", "RouteComplete"],
    [221, "CANOPIES AND COASTLINES", "RouteComplete"],
    [222, "REPACK RUSH", "RouteComplete"],
    [223, "SPIRAL INTO THE VOLCANO", "RouteComplete"],
    [224, "BIG FLAT 8", "RouteComplete"],
    [225, "CASTLE CRIT", "RouteComplete"],
  ] as const
).map(([id, name, imageName]) => ({ id, name, imageName }));
