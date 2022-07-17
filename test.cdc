import Bl0x from 0x7620acf6d7f2468a
import NonFungibleToken from 0x1d7e57aa55817448
import MetadataViews from 0x1d7e57aa55817448

pub fun main(user: Address): Bool {

  let collection = getAccount(user).getCapability(Bl0x.CollectionPublicPath).borrow<&Bl0x.Collection{MetadataViews.ResolverCollection}>()!
  let ids = collection.getIDs()
  for id in ids {
    let nft = collection.borrowViewResolver(id: id)!
    let view = nft.resolveView(Type<Bl0x.Data>())! as! Bl0x.Data

    if view!.traits.keys.contains("Module") {
      return true
    }
  }

  return false
}