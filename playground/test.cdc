// import AllDay from "./AllDay.cdc"
import AllDay from 0xe4cf4bdc1751c65d

pub fun main(account: Address, setName: String): Bool {
  let setData: AllDay.SetData = AllDay.getSetDataByName(name: setName)
  let setPlaysInEditions: [UInt64] = setData.setPlaysInEditions.keys
  let neededLength = setPlaysInEditions.length
  
  let collection = getAccount(account).getCapability(AllDay.CollectionPublicPath)
                      .borrow<&{AllDay.MomentNFTCollectionPublic}>()
                      ?? panic("This account does not have an NFL All Day Collection set up.")
  
  let ids = collection.getIDs()
  let editionIds: [UInt64] = []
  for id in ids {
    let moment = collection.borrowMomentNFT(id: id)!
    let editionID = moment.editionID
    if setPlaysInEditions.contains(editionID) && !editionIds.contains(editionID) {
      editionIds.append(editionID)
    }
  }
  return editionIds.length == neededLength
}