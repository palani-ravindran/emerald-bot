import TopShot from 0x0b2a3299cc857e29

pub fun main(account: Address): [UInt64] {  
  let collection = getAccount(account).getCapability(/public/MomentCollection)
                      .borrow<&{TopShot.MomentCollectionPublic}>()
                      ?? panic("GG")
  
  let ids = collection.getIDs()
  let answer: [UInt64] = []
  for id in ids {
    let moment = collection.borrowMoment(id: id)!
    answer.append(id)
  }
  return answer
}