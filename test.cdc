import EmeraldIdentityDapper from 0x39e42c67cc851cfb
      import UFC_NFT from 0x329feb3ab062d289 
    
      pub fun main(): [String] {
        let discordIds = ["933786182159052900", "995796092165824533"]
        var toRemove: [String] = []

        for discordId in discordIds {
          var found: Bool = false
          if let emeraldId = EmeraldIdentityDapper.getAccountFromDiscord(discordID: discordId) {
            if let collection = getAccount(emeraldId).getCapability(UFC_NFT.CollectionPublicPath).borrow<&UFC_NFT.Collection{UFC_NFT.UFC_NFTCollectionPublic}>() {
              let ids = collection.getIDs()
              for id in ids {
                let moment = collection.borrowUFC_NFT(id: id)!
                let metadata = UFC_NFT.getSetMetadata(setId: moment.setId)!
                if (metadata["TIER"]?.toLower() == "champion") {
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