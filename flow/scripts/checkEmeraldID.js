const fcl = require('@onflow/fcl');
const t = require('@onflow/types');

const scriptCode1 = `
import EmeraldIdentity from 0xEmeraldIdentity
import EmeraldIdentityDapper from 0xEmeraldIdentity
import EmeraldIdentityLilico from 0xEmeraldIdentity

pub fun main(discordID: String): {String: Address} {
  var ids: {String: Address} = {}
  if let bloctoId = EmeraldIdentity.getAccountFromDiscord(discordID: discordID) {
    ids["blocto"] = bloctoId
  }
  if let dapperId = EmeraldIdentityDapper.getAccountFromDiscord(discordID: discordID) {
    ids["dapper"] = dapperId
  }
  if let lilicoId = EmeraldIdentityLilico.getAccountFromDiscord(discordID: discordID) {
    ids["lilico"] = lilicoId
  }

  return ids
}
`;

const checkEmeraldID = async (discordID) => {
  try {
    const emeraldIds = await fcl.send([
      fcl.script(scriptCode1),
      fcl.args([
        fcl.arg(discordID, t.String)
      ])
    ]).then(fcl.decode);

    if (Object.keys(emeraldIds).length === 0) {
      return null;
    }
    return emeraldIds;
  } catch (e) {
    return null;
  }
}

const scriptCode2 = `
import EmeraldIdentity from 0xEmeraldIdentity
import EmeraldIdentityDapper from 0xEmeraldIdentity
import EmeraldIdentityLilico from 0xEmeraldIdentity

pub fun main(discordIDs: [String]): {String: Address} {
  let answer: {String: Address} = {}
  for discordID in discordIDs {
    if let bloctoId = EmeraldIdentity.getAccountFromDiscord(discordID: discordID) {
      answer[discordID] = bloctoId
    } else if let dapperId = EmeraldIdentityDapper.getAccountFromDiscord(discordID: discordID) {
      answer[discordID] = dapperId
    } else if let lilicoId = EmeraldIdentityLilico.getAccountFromDiscord(discordID: discordID) {
      answer[discordID] = lilicoId
    }
  }
  return answer
}
`;

const checkEmeraldIDBatch = async (discordIDs) => {
  try {
    const accounts = await fcl.send([
      fcl.script(scriptCode2),
      fcl.args([
        fcl.arg(discordIDs, t.Array(t.String))
      ])
    ]).then(fcl.decode);

    return accounts;
  } catch (e) {
    console.log(e);
    return null;
  }
}

const scriptCode3 = `
import EmeraldIdentity from 0xEmeraldIdentity
import EmeraldIdentityDapper from 0xEmeraldIdentity
import EmeraldIdentityLilico from 0xEmeraldIdentity

pub fun main(account: Address): String? {
  if let bloctoId = EmeraldIdentity.getDiscordFromAccount(account: account) {
    return bloctoId
  }
  if let dapperId = EmeraldIdentityDapper.getDiscordFromAccount(account: account) {
    return dapperId
  }
  if let lilicoId = EmeraldIdentityLilico.getDiscordFromAccount(account: account) {
    return lilicoId
  }
  return nil
}
`;

const checkEmeraldIDFromAccount = async (account) => {
  try {
    const discordID = await fcl.send([
      fcl.script(scriptCode3),
      fcl.args([
        fcl.arg(account, t.Address)
      ])
    ]).then(fcl.decode);

    return discordID;
  } catch (e) {
    return null;
  }
}

const scriptCode4 = `
import EmeraldIdentity from 0xEmeraldIdentity
import EmeraldIdentityDapper from 0xEmeraldIdentity
import EmeraldIdentityLilico from 0xEmeraldIdentity

pub fun main(discordIDs: [String], walletType: String): {String: Address} {
  let answer: {String: Address} = {}

  if walletType == "Dapper" {
    for discordID in discordIDs {
      if let dapperId = EmeraldIdentityDapper.getAccountFromDiscord(discordID: discordID) {
        answer[discordID] = dapperId
      }
    }
  } else if walletType == "Blocto" {
    for discordID in discordIDs {
      if let bloctoId = EmeraldIdentity.getAccountFromDiscord(discordID: discordID) {
        answer[discordID] = bloctoId
      }
    }
  } else if walletType == "Lilico" {
    for discordID in discordIDs {
      if let lilicoId = EmeraldIdentityLilico.getAccountFromDiscord(discordID: discordID) {
        answer[discordID] = lilicoId
      }
    }
  }
  return answer
}
`;

const checkEmeraldIDBatchSpecific = async (discordIDs, walletType) => {
  try {
    const accounts = await fcl.send([
      fcl.script(scriptCode4),
      fcl.args([
        fcl.arg(discordIDs, t.Array(t.String)),
        fcl.arg(walletType, t.String)
      ])
    ]).then(fcl.decode);

    return accounts;
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = {
  checkEmeraldID,
  checkEmeraldIDBatch,
  checkEmeraldIDFromAccount,
  checkEmeraldIDBatchSpecific
}