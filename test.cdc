import UFC_NFT from 0x329feb3ab062d289

  pub fun main(user: Address): Int {
    let answer: [UInt32] = []
    var count = 0

    // This checks for at least 3 UFC Moments
    if let collection = getAccount(user).getCapability(UFC_NFT.CollectionPublicPath).borrow<&UFC_NFT.Collection{UFC_NFT.UFC_NFTCollectionPublic}>() {

        for id in collection.getIDs() {
          let moment = collection.borrowUFC_NFT(id: id)!
          if moment.setId == 199 {
            count = count + 1
          }
          answer.append(moment.setId)
        }
        
    }

    return count
  }