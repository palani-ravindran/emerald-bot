const fcl = require('@onflow/fcl');
const t = require('@onflow/types');
const { holdingScripts } = require('../holdings/entities');

const UFC = async (emeraldIds) => {
  const scriptCode = holdingScripts['UFC'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper',
    };

  // 1. 3+, 2. Champion
  const roleIds = ['979898271281586180', '979886293091766302'];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];
  return await executeScript(scriptCode, args);
};

const NFL = async (emeraldIds) => {
  const scriptCode = holdingScripts['NFL'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper',
    };

  // 1. 3+
  const roleIds = ['980633744966819930'];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];
  return await executeScript(scriptCode, args);
};

const EAD = async (emeraldIds) => {
  const scriptCode = holdingScripts['EAD'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper',
    };

  // 1. 25+, 2. 100+, 3. 250+
  const roleIds = [
    '970994786720972830', // 1+
    '984246197101412432', // 25+
    '983563607335899217', // 100+
    '984246308179152966', // 250+
    '999881442626641961', // 500+
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];
  return await executeScript(scriptCode, args);
};

const Flunks = async (emeraldIds) => {
  const scriptCode = holdingScripts['Flunks'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org',
    };

  // 1. Holder, 2. Whale, 3. Jock, 4. Geek, 5. Prep, 6. Freak
  const roleIds = [
    '961353472328994826',
    '958216670218965094',
    '979841797608050688',
    '979842660393185330',
    '979842799451140166',
    '979841981381480519',
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];
  return await executeScript(scriptCode, args);
};

const InceptionFlunks = async (emeraldIds) => {
  const scriptCode = holdingScripts['InceptionFlunks'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org',
    };

  // 1. >= 1, 2. >= 8, 3. >= 8
  const roleIds = [
    '945509809745182740',
    '945509281267060807',
    '930157852377636906',
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];
  return await executeScript(scriptCode, args);
};

const IXLabs = async (emeraldIds) => {
  const scriptCode = holdingScripts['IXLabs'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org',
    };

  // 1. 3 Cool Cats, 2. All 30 Cool Cats
  const roleIds = ['922504964662771822', '922523238762950696'];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];
  return await executeScript(scriptCode, args);
};

const Driverz = async (emeraldIds) => {
  const scriptCode = holdingScripts['Driverz'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org',
    };

  // 1. 1, 2. 6, 3. 13, 4. 25
  const roleIds = [
    '981264736098344970', // 1
    '987185469282484245', // 6
    '981264841660579951', // 13
    '981264946530754654', // 25
    '991045701125423204', // Captain
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];
  return await executeScript(scriptCode, args);
};

const Genies = async (emeraldIds) => {
  const scriptCode = holdingScripts['Genies'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org',
    };

  const roleIds = [
    // Lucid Tokyo Holder
    '981662081243811911',
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const WIT = async (emeraldIds) => {
  const scriptCode = holdingScripts['WIT'];

  const roleIds = [
    '984558304510496798', // Ballerz
    '984558859861516368', // Piggos
    '984559036127129680', // Goobz
    '984559362381078538', // Flovatar
    '988632169276641331', // Flunks
  ];

  let dapper = [];
  let blocto = [];
  if (emeraldIds['dapper']) {
    const dapperArgs = [
      fcl.arg(emeraldIds['dapper'], t.Address),
      fcl.arg(roleIds, t.Array(t.String)),
    ];
    dapper = await executeScript(scriptCode, dapperArgs);
  }
  if (emeraldIds['blocto']) {
    const bloctoArgs = [
      fcl.arg(emeraldIds['blocto'], t.Address),
      fcl.arg(roleIds, t.Array(t.String)),
    ];
    blocto = await executeScript(scriptCode, bloctoArgs);
  }

  if (blocto.error) {
    blocto = [];
  }
  if (dapper.error) {
    dapper = [];
  }
  return dapper.concat(blocto.filter((item) => dapper.indexOf(item) < 0));
};

const NFW = async (emeraldIds) => {
  const scriptCode = holdingScripts['NFW'];

  const roleIds = [
    '982024446627954739', // Driverz
    '982023267017719808', // Flunks
    '982024121745551400', // .find
    '982024358694354964', // bl0x
    '982095721534726184', // GOOBz
    '982097954397630504', // EmeraldID
    '983106203670413323', // Piggos
    '983106282447859722', // Crypto Pharaohs
    '983106476157579334', // Arlequin
    '983119676806680607', // Epix
    '983119759862296648', // Enemy Metal
    '983120167989035008', // SNKRHUD,
    '983493329226436638', // Flovatar,
    '983493931159408640', // Goated Goats
    '983547522943434832', // Ballerz
    '983549184680538112', // MetaPanda
    '983553743326965780', // some.place
    '983580514214633504', // Barter Yard Club
  ];

  let dapper = [];
  let blocto = [];
  if (emeraldIds['dapper']) {
    const dapperArgs = [
      fcl.arg(emeraldIds['dapper'], t.Address),
      fcl.arg(roleIds, t.Array(t.String)),
    ];
    dapper = await executeScript(scriptCode, dapperArgs);
  }
  if (emeraldIds['blocto']) {
    const bloctoArgs = [
      fcl.arg(emeraldIds['blocto'], t.Address),
      fcl.arg(roleIds, t.Array(t.String)),
    ];
    blocto = await executeScript(scriptCode, bloctoArgs);
  }

  if (blocto.error) {
    blocto = [];
  }
  if (dapper.error) {
    dapper = [];
  }
  return dapper.concat(blocto.filter((item) => dapper.indexOf(item) < 0));
};

const Flovatar = async (emeraldIds) => {
  const scriptCode = holdingScripts['Flovatar'];
  const user = emeraldIds['blocto'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Blocto EmeraldID at https://id.ecdao.org',
    };

  const roleIds = [
    '897968477715955742', // FlovatarOwner
    '939690430847651870', // Ape
    '939690216812343348', // Devil
    '939690492826910761', // FloTrotter
    '939690570132123708', // Droid
    '939689759956140072', // Racer
    '939690786767929407', // Cat
    '939690983052955649', // Naked
    '939691086027296869', // Undead
    '939695012873134141', // Power
    '939691333805817878', // Starbattle
    '948381132745998347', // Suit
    '948381277436932126', // Girlpower
    '948381344659038218', // Stoner
    '948381416431976548', // Mustache
    '948381486774640680', // First100
    '948381563136147546', // Astronaut
    '948381627334135898', // Legendary
    '939690883102695434', // Gray
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const SNKRHUD = async (emeraldIds) => {
  const scriptCode = holdingScripts['SNKRHUD'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper',
    };

  const roleIds = [
    '953279887685333004', // Sidekicks (1+)
    '988442388278153226', // Whale (10+)
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const Flowscore = async (emeraldIds) => {
  const scriptCode = holdingScripts['Flowscore'];
  let dapper = [];
  let blocto = [];

  const roleIds = [
    '991991999962042435', // SNKRHUD
    '991991999962042434', // Bl0x
  ];

  if (emeraldIds['dapper']) {
    const dapperArgs = [
      fcl.arg(emeraldIds['dapper'], t.Address),
      fcl.arg(roleIds, t.Array(t.String)),
    ];
    dapper = await executeScript(scriptCode, dapperArgs);
  }

  if (emeraldIds['blocto']) {
    const bloctoArgs = [
      fcl.arg(emeraldIds['blocto'], t.Address),
      fcl.arg(roleIds, t.Array(t.String)),
    ];
    blocto = await executeScript(scriptCode, bloctoArgs);
  }

  if (blocto.error) {
    blocto = [];
  }

  if (dapper.error) {
    dapper = [];
  }

  return dapper.concat(blocto.filter((item) => dapper.indexOf(item) < 0));
};

const Bl0x = async (emeraldIds) => {
  const scriptCode = holdingScripts['Bl0x'];
  const user = emeraldIds['blocto'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Blocto EmeraldID at https://id.ecdao.org/blocto',
    };

  const roleIds = [
    '993411748927385681', // 1
    '993422415319289856', // 5
    '993422533195989022', // 15
    '993413849946525736', // 25,
    '996126592403255347', // Unopened Packs
    '996500126573011098', // Module trait
    '996499378841849866', // Artifact trait
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const TheFabricant = async (emeraldIds) => {
  const scriptCode = holdingScripts['TheFabricant'];
  const user = emeraldIds['blocto'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Blocto EmeraldID at https://id.ecdao.org/blocto',
    };

  const roleIds = [
    '971043192889811014', // ItemNFT
    '971121539766431774', // TheFabricantS1ItemNFT
    '971121710331998259', // TheFabricantS2ItemNFT
    '989488592839643147', // TheFabricantAccessPass
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const MotoGP = async (emeraldIds) => {
  const scriptCode = holdingScripts['MotoGP'];
  const user = emeraldIds['blocto'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Blocto EmeraldID at https://id.ecdao.org/blocto',
    };

  const roleIds = [
    '997444026703827095', // 5 packs
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const TSE = async (emeraldIds) => {
  const scriptCode = holdingScripts['TSE'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper',
    };

  const roleIds = [
    '1003849437103272018', // Owns all 'Extra Spice' set minus the burned moment
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const CNN = async (emeraldIds) => {
  const scriptCode = holdingScripts['CNN'];
  let dapper = [];
  let blocto = [];

  const roleIds = [
    '953264416890171413', // Vault Collector
    '1002409710223376474', // First Collector
  ];

  if (emeraldIds['dapper']) {
    const dapperArgs = [
      fcl.arg(emeraldIds['dapper'], t.Address),
      fcl.arg(roleIds, t.Array(t.String)),
    ];
    dapper = await executeScript(scriptCode, dapperArgs);
  }

  if (emeraldIds['blocto']) {
    const bloctoArgs = [
      fcl.arg(emeraldIds['blocto'], t.Address),
      fcl.arg(roleIds, t.Array(t.String)),
    ];
    blocto = await executeScript(scriptCode, bloctoArgs);
  }

  if (blocto.error) {
    blocto = [];
  }

  if (dapper.error) {
    dapper = [];
  }

  return dapper.concat(blocto.filter((item) => dapper.indexOf(item) < 0));
};

const Momentables = async (emeraldIds) => {
  const scriptCode = holdingScripts['Momentables'];
  const user = emeraldIds['blocto'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Blocto EmeraldID at https://id.ecdao.org/blocto',
    };

  const roleIds = [
    '1002465648561102860', // Crypto Pharaohs Collector Role (1+ packs)
    '1002466440714145823', // Crypto Pharaohs Merchant Role (3+ packs)
    '1002467103393206332', // Crypto Pharaohs Minister Role (6+ packs)
    '1002467898465456148', // Crypto Pharaohs Royal Role (9+ packs)
    '1002468598473822308', // Pharaoh Cats Collector Role (1+ packs)
    '1002469021540679680', // Pharaoh Cats Merchant Role (3+ packs)
    '1002469878277603378', // Pharaoh Cats Minister Role (6+ packs)
    '1002470211057897592', // Pharaoh Cats Royal Role (9+ packs)
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const ABD = async (emeraldIds) => {
  const scriptCode = holdingScripts['ABD'];
  const user = emeraldIds['blocto'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Blocto EmeraldID at https://id.ecdao.org/blocto',
    };

  const roleIds = [
    '969480231817732136', // Any ID
    '969480569673109534', // ABD Legendary
    '1007408035293044868', // ABD Refractor
    '1000561174988996678', // ABD 69
    '1000561465750728743', // ABD 420
  ];

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];

  return await executeScript(scriptCode, args);
};

const Gaia = async (emeraldIds) => {
  const scriptCode = holdingScripts['Gaia'];
  const user = emeraldIds['dapper'];
  if (!user)
    return {
      error: true,
      message:
        'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper',
    };

  const roleIds = [
    '1004840033003524166', // 0. Ballerz
    '1004967835031842846', // 1. Sneakerz
    '1004841038550155364', // 2. Driverz
    '1004840997492113498', // 3. Flunks
    '1004840955742011442', // 4. SNKRHUD,
    '1004840871671386122', // 5. MetaPanda
    '1004840269562261535', // 6. Barter Yard Club
    '1005330614582530130', // 7. UFC
    '1005331566416908340', // 8. UFC Champ
    '1005330768588963980', // 9. NFLAD
    '1005330847760654347', // 10. NBATS
    '1005335237234012170', // 11. Cool Cat
    '1005326271951142972', // 12. NLL
    '1005330475985940582', // 13. H&S
    '1005339590711853108', // 14. Gaia Deity
  ]

  const args = [fcl.arg(user, t.Address), fcl.arg(roleIds, t.Array(t.String))];
  return await executeScript(scriptCode, args);
};

const executeScript = async (scriptCode, args) => {
  try {
    const result = await fcl
      .send([fcl.script(scriptCode), fcl.args(args)])
      .then(fcl.decode);
    return [...new Set(result)]; // removes duplicates
  } catch (e) {
    console.log(e);
    return {
      error: true,
      message: 'You do not meet the requirements for any of these roles.',
    };
  }
};

const entities = {
  UFC,
  Flunks,
  IXLabs,
  NFL,
  Driverz,
  Genies,
  NFW,
  EAD,
  WIT,
  InceptionFlunks,
  Flovatar,
  SNKRHUD,
  Bl0x,
  TheFabricant,
  Flowscore,
  MotoGP,
  CNN,
  TSE,
  Gaia,
  Momentables,
};

module.exports = {
  entities,
};
