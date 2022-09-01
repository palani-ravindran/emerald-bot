import TopShot from "./TopShot.cdc"

pub fun main(account: Address, momentId: UInt64): Bool {  
  let collection = getAccount(account).getCapability(/public/MomentCollection)
                      .borrow<&{TopShot.MomentCollectionPublic}>()
                      ?? panic("GG")
  
  let ids = collection.getIDs()
  for id in ids {
    let moment = collection.borrowMoment(id: id)!
    let momentId: UInt64 = moment.id
  }
  return playIds.length == neededLength
}