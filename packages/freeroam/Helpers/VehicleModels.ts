let vehicleModels = {
    "Compacts": ["blista","dilettante","dilettante2","issi2","prairie","brioso"],

    "Sedans": ["asea","asea2","asterope","emperor","emperor2","emperor3","fugitive",
        "ingot","intruder","premier","primo","regina","romero","schafter2","stanier",
        "stratum","stretch","superd","surge","tailgater","washington","cog55","cog552",
        "cognoscenti","cognoscenti2","primo2","warrener"
    ],

    "SUVs": ["baller","baller2","bjxl","cavalcade","cavalcade2","dubsta","dubsta2","fq2","granger","gresley",
        "habanero","landstalker","mesa","mesa2","patriot","radi","rocoto","seminole","serrano","contender",
        "huntley","xls","xls2"],"Coupes":["cogcabrio","exemplar","f620","felon","felon2","jackal","oracle",
        "oracle2","sentinel","sentinel2","zion","zion2","windsor","windsor2"
    ],

    "Muscle": ["buccaneer","dominator","gauntlet","hotknife","phoenix","picador","ratloader","ruiner","sabregt",
        "vigero","voodoo2","buccaneer2","chino","chino2","coquette3","dukes","dukes2","faction","faction2",
        "faction3","lurcher","moonbeam","moonbeam2","ratloader2","ruiner2","ruiner3","sabregt2","slamvan",
        "slamvan2","slamvan3","stalion2","tampa","virgo","virgo2","virgo3","voodoo"
    ],

    "Sports Classics": [
        "jb700","manana","monroe","peyote","stinger","stingergt","tornado","tornado2","tornado3","tornado4","ztype",
        "btype","btype2","btype3","casco","feltzer3","tornado5","tornado6","infernus2","turismo2"
    ],

    "Sports": ["banshee","buffalo","buffalo2","carbonizzare","comet2","coquette","elegy2","feltzer2","fusilade","futo",
        "khamelion","ninef","ninef2","penumbra","rapidgt","rapidgt2","schwarzer","sultan","surano","bestiagts","blista2",
        "blista3","buffalo3","comet3","elegy","jester2","kuruma","kuruma2","lynx","massacro","massacro2","omnis","raptor",
        "seven70","specter","specter2","tampa2","tropos","ruston"],"Super":["adder","bullet","cheetah","entityxf","infernus",
        "vacca","voltic","banshee2","fmj","italigtb","italigtb2","le7b","nero","nero2","osiris","penetrator","pfister811",
        "prototipo","reaper","sheava","sultanrs","t20","tempesta","tyrus","voltic2","zentorno","gp1"
    ],

    "Motorcycles": ["akuma","bagger","bati","bati2","carbonrs","daemon","double","faggio2","hexer","nemesis","pcj",
        "ruffian","sanchez","sanchez2","vader","avarus","bf400","chimera","cliffhanger","daemon2","defiler","diablous",
        "diablous2","enduro","esskey","faggio","faggio3","fcr","fcr2","gargoyle","hakuchou","hakuchou2","lectro","manchez",
        "nightblade","ratbike","sanctus","shotaro","sovereign","thrust","vindicator","vortex","wolfsbane","zombiea","zombieb"
    ],

    "Off-road":["bfinjection","blazer","blazer2","blazer3","bodhi2","dloader","dune","dune2","mesa3","rancherxl","rancherxl2",
        "rebel","rebel2","sandking","sandking2","blazer4","blazer5","brawler","dune4","dune5","insurgent","insurgent2",
        "kalahari","technical","technical2","trophytruck","trophytruck2"
    ],

    "Industrial":["bulldozer","cutter","dump","flatbed", "handler","mixer","mixer2","rubble","tiptruck","tiptruck2","guardian"],

    "Utility":["airtug","armytanker","armytrailer","armytrailer2","baletrailer","boattrailer","caddy","caddy2","docktrailer",
        "docktug","forklift","freighttrailer","graintrailer","mower","proptrailer","raketrailer","ripley","sadler","sadler2",
        "scrap","tanker","towtruck","towtruck2","tr2","tr3","tr4","tractor","tractor2","tractor3","trailerlogs","trailers",
        "trailers2","trailers3","trailersmall","trflat","tvtrailer","utillitruck","utillitruck2","utillitruck3","tanker2"
    ],

    "Vans":["bison","bison2","bison3","bobcatxl","boxville","boxville2","boxville3","burrito","burrito2","burrito3","burrito4",
        "burrito5","camper","gburrito","journey","minivan","pony","pony2","rumpo","rumpo2","speedo","speedo2","surfer",
        "surfer2","taco","youga","boxville4","boxville5","gburrito2","minivan2","rumpo3","youga2"
    ],

    "Cycles":["bmx","cruiser","fixter","scorcher","tribike","tribike2","tribike3"],

    "Boats":["dinghy","dinghy2","jetmax","marquis","predator","seashark","seashark2","squalo","submersible","suntrap",
        "tropic","dinghy3","speeder","submersible2","toro","tug"],"Helicopters":["annihilator","buzzard","buzzard2",
        "cargobob","cargobob2","cargobob3","frogger","frogger2","maverick","polmav","skylift","cargobob4","savage",
        "supervolito","supervolito2","swift","swift2","valkyrie","volatus"],"Planes":["blimp","cargoplane",
        "cuban800","duster","jet","lazer","luxor","mammatus","shamal","stunt","titan","velum","dodo","hydra",
        "luxor2","miljet","nimbus","velum2"],"Service":["airbus","bus","coach","rentalbus","taxi","tourbus",
        "trash","brickade","rallytruck","trash2","wastelander"
    ],

    "Emergency":["ambulance","fbi","fbi2","firetruk","lguard","pbus","police","police2","police3","police4","policeb",
        "policeold1","policeold2","policet","pranger","riot","sheriff","sheriff2"
    ],

    "Military":["barracks","barracks2","crusader","rhino","barracks3"],

    "Commercial":["benson","biff","hauler","mule","mule2","packer","phantom","pounder","stockade","stockade3",
        "mule3","phantom2"
    ],

    "Trains": ["cablecar","freight","freightcar","freightcont1","freightcont2","freightgrain","metrotrain","tankercar"]
};

export function isVehicleModelValid(model: string): boolean {
    model = model.toLowerCase();

    for (let key in vehicleModels) {
        if ((vehicleModels as any)[key].indexOf(model) != -1) {
            return true;
        }
    }

    return false;
}