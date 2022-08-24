import UFC_NFT from 0x329feb3ab062d289

  pub fun main(user: Address): [UInt32] {
    let roleIds: [String] = ["1", "2", "3"]
    var earnedRoles: [String] = []
    let answer: [UInt32] = []

    // This checks for at least 3 UFC Moments
    if let collection = getAccount(user).getCapability(UFC_NFT.CollectionPublicPath).borrow<&UFC_NFT.Collection{UFC_NFT.UFC_NFTCollectionPublic}>() {
      let ids = collection.getIDs()
      if ids.length >= 3 {
        earnedRoles.append(roleIds[0])
      }

      var countForJoshEmmett: Int = 0

      for id in ids {
        let moment = collection.borrowUFC_NFT(id: id)!
        answer.append(moment.setId)
        let setId: UInt32 = moment.setId
        let metadata = UFC_NFT.getSetMetadata(setId: setId)!
        if (!earnedRoles.contains(roleIds[1]) && metadata["TIER"]?.toLower() == "champion") {
          earnedRoles.append(roleIds[1])
        }
        if setId == 199 {
          countForJoshEmmett = countForJoshEmmett + 1
        }
      }

      if countForJoshEmmett >= 3 {
        earnedRoles.append(roleIds[2])
      }
    }

    return answer
  }