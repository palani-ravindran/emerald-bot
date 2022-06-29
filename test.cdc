import EmeraldIdentity from 0x39e42c67cc851cfb
      import RaribleNFT from 0x01ab36aaf654a13e 
      import NonFungibleToken from 0x1d7e57aa55817448
    
      pub fun main(): [String] {
        var toRemove: [String] = []
        var discordIds: [String] = ["143100912687251456"]

        for discordId in discordIds {
          var found: Bool = false
          if let emeraldId = EmeraldIdentity.getAccountFromDiscord(discordID: discordId) {
            if let collection = getAccount(emeraldId).getCapability(RaribleNFT.collectionPublicPath).borrow<&{NonFungibleToken.CollectionPublic}>() {
              let arrayOfSocks: [UInt64] = [15029, 15027, 15026, 15025, 15024, 15023, 15021, 15020, 15019, 15017, 15016, 15015, 15013, 15010, 15009, 15008, 15007, 15006, 15005, 15004, 15002, 15000, 14998, 14996, 14993, 14992, 14991, 14990, 14988, 14986, 14985, 14979, 14977, 14974, 14973, 14972, 14970, 14969, 14966, 14962, 14961, 14960, 14959, 14957, 14955, 14953, 14950, 14948, 14947, 14946, 14939, 14899, 14898, 14897, 14894, 14892, 14889, 14886, 14883, 14881, 14878, 14876, 14875, 14873, 14869, 14867, 14863, 14862, 14857, 14856, 14855, 14850, 14849, 14847, 14844, 14843, 14840, 14838, 14837, 14835, 14833, 14830, 14826, 14824, 14822, 14819, 14818, 14817, 14816, 14815, 14814, 14813, 14812, 14810, 14808, 14805, 14803, 14802, 14801, 14800, 14799, 14798, 14797, 14796, 14795, 14792, 14791, 14790, 14789, 14787, 14786]
              let ids: [UInt64] = collection.getIDs()
              for sock in arrayOfSocks {
                if ids.contains(sock) {
                  found = true
                  break
                }
              }
            }
          }
          if !found {
            toRemove.append(discordId)
          }
        }
    
        return toRemove
      }