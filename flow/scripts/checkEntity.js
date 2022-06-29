const fcl = require('@onflow/fcl');
const t = require('@onflow/types');
const { holdingScripts } = require('../holdings/entities');

const UFC = async (emeraldIds) => {
  const scriptCode = holdingScripts['UFC'];
  const user = emeraldIds["dapper"];
  if (!user) return { error: true, message: 'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper' };

  // 1. 3+, 2. Champion
  const roleIds = ['979898271281586180', '979886293091766302'];

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ]
  return await executeScript(scriptCode, args);
}

const NFL = async (emeraldIds) => {
  const scriptCode = holdingScripts['NFL'];
  const user = emeraldIds["dapper"];
  if (!user) return { error: true, message: 'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper' };

  // 1. 3+
  const roleIds = ['980633744966819930'];

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ]
  return await executeScript(scriptCode, args);
}

const EAD = async (emeraldIds) => {
  const scriptCode = holdingScripts['EAD'];
  const user = emeraldIds["dapper"];
  if (!user) return { error: true, message: 'You need to create your Dapper EmeraldID at https://id.ecdao.org/dapper' };

  // 1. 25+, 2. 100+, 3. 250+ 
  const roleIds = ['984246197101412432', '983563607335899217', '984246308179152966'];

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ]
  return await executeScript(scriptCode, args);
}

const Flunks = async (emeraldIds) => {
  const scriptCode = holdingScripts['Flunks'];
  const user = emeraldIds["dapper"];
  if (!user) return { error: true, message: 'You need to create your Dapper EmeraldID at https://id.ecdao.org' };

  // 1. Holder, 2. Whale, 3. Jock, 4. Geek, 5. Prep, 6. Freak
  const roleIds = ['961353472328994826', '958216670218965094', '979841797608050688', '979842660393185330', '979842799451140166', '979841981381480519'];

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ]
  return await executeScript(scriptCode, args);
}

const InceptionFlunks = async (emeraldIds) => {
  const scriptCode = holdingScripts['InceptionFlunks'];
  const user = emeraldIds["dapper"];
  if (!user) return { error: true, message: 'You need to create your Dapper EmeraldID at https://id.ecdao.org' };

  // 1. >= 1, 2. >= 8, 3. >= 8
  const roleIds = ['945509809745182740', '945509281267060807', '930157852377636906'];

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ]
  return await executeScript(scriptCode, args);
}

const IXLabs = async (emeraldIds) => {
  const scriptCode = holdingScripts['IXLabs'];
  const user = emeraldIds["dapper"];
  if (!user) return { error: true, message: 'You need to create your Dapper EmeraldID at https://id.ecdao.org' };

  // 1. 3 Cool Cats, 2. All 30 Cool Cats
  const roleIds = ['922504964662771822', '922523238762950696'];

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ]
  return await executeScript(scriptCode, args);
}

const Driverz = async (emeraldIds) => {
  const scriptCode = holdingScripts['Driverz'];
  const user = emeraldIds["dapper"];
  if (!user) return { error: true, message: 'You need to create your Dapper EmeraldID at https://id.ecdao.org' };

  // 1. 1, 2. 6, 3. 13, 4. 25
  const roleIds = [
    '981264736098344970', // 1
    '987185469282484245', // 6
    '981264841660579951', // 13
    '981264946530754654', // 25
    '991045701125423204', // Captain
  ];

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ]
  return await executeScript(scriptCode, args);
}

const Genies = async (emeraldIds) => {
  const scriptCode = holdingScripts['Genies'];
  const user = emeraldIds["dapper"];
  if (!user) return { error: true, message: 'You need to create your Dapper EmeraldID at https://id.ecdao.org' };

  const roleIds = [
    // Lucid Tokyo Holder
    '981662081243811911',
  ];

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ];

  return await executeScript(scriptCode, args);
}

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
  if (emeraldIds["dapper"]) {
    const dapperArgs = [
      fcl.arg(emeraldIds["dapper"], t.Address),
      fcl.arg(roleIds, t.Array(t.String))
    ]
    dapper = await executeScript(scriptCode, dapperArgs);
  }
  if (emeraldIds["blocto"]) {
    const bloctoArgs = [
      fcl.arg(emeraldIds["blocto"], t.Address),
      fcl.arg(roleIds, t.Array(t.String))
    ]
    blocto = await executeScript(scriptCode, bloctoArgs);
  }

  if (blocto.error) {
    blocto = [];
  }
  if (dapper.error) {
    dapper = [];
  }
  return dapper.concat(blocto.filter((item) => dapper.indexOf(item) < 0));
}

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
  if (emeraldIds["dapper"]) {
    const dapperArgs = [
      fcl.arg(emeraldIds["dapper"], t.Address),
      fcl.arg(roleIds, t.Array(t.String))
    ]
    dapper = await executeScript(scriptCode, dapperArgs);
  }
  if (emeraldIds["blocto"]) {
    const bloctoArgs = [
      fcl.arg(emeraldIds["blocto"], t.Address),
      fcl.arg(roleIds, t.Array(t.String))
    ]
    blocto = await executeScript(scriptCode, bloctoArgs);
  }

  if (blocto.error) {
    blocto = [];
  }
  if (dapper.error) {
    dapper = [];
  }
  return dapper.concat(blocto.filter((item) => dapper.indexOf(item) < 0));
}

const Flovatar = async (emeraldIds) => {
  const scriptCode = holdingScripts['Flovatar'];
  const user = emeraldIds["blocto"];
  if (!user) return { error: true, message: 'You need to create your Blocto EmeraldID at https://id.ecdao.org' };

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

  const args = [
    fcl.arg(user, t.Address),
    fcl.arg(roleIds, t.Array(t.String))
  ];

  return await executeScript(scriptCode, args);
}

const executeScript = async (scriptCode, args) => {
  try {
    const result = await fcl.send([
      fcl.script(scriptCode),
      fcl.args(args)
    ]).then(fcl.decode);
    return result;
  } catch (e) {
    console.log(e)
    return { error: true, message: 'You do not meet the requirements for any of these roles.' };
  }
}

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
  Flovatar
}

module.exports = {
  entities
}