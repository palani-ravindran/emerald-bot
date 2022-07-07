import SNKRHUDNFT from 0x80af1db15aa6535a
  import NonFungibleToken from 0x1d7e57aa55817448

  pub fun main(user: Address): [UInt64] {
    var earnedRoles: [String] = []

    // This checks for NFT asset count
    if let collection = getAccount(user).getCapability(SNKRHUDNFT.CollectionPublicPath).borrow<&{SNKRHUDNFT.CollectionPublic}>() {
      let ids = collection.getIDs()
      return ids
      
    }

    return [1]
  }