import AllDay from 0xe4cf4bdc1751c65d

pub fun main(account: Address, setName: String): {String: String} {
  let setData: AllDay.SetData = AllDay.getSetDataByName(name: setName)
  let setIDs: [UInt64] = setData.setPlaysInEditions.keys
  let collection = getAccount(account).getCapability(/public/AllDayNFTCollection)
                      .borrow<&{AllDay.MomentNFTCollectionPublic}>()
                      ?? panic("GG")
  let ids = collection.getIDs()
  let moments: [MomentData] = []
  let playIds: [UInt64] = []
  for id in ids {
    let moment: &AllDay.NFT = collection.borrowMomentNFT(id: id)!
    let playID: UInt64 = moment.id
    if !playIds.contains(playID) && setIDs.contains(playID) {
      let play: AllDay.PlayData = AllDay.getPlayData(id: id)
      let playMetadata: {String: String} = play.metadata
      return playMetadata
      // let momentData = MomentData(_serialNumber: moment.data.serialNumber, _player: play["FullName"]!, _team: play["TeamAtMoment"]!, _date: play["DateOfMoment"]!, _playCategory: play["PlayCategory"]!, _setName: setName)
      // moments.append(momentData)
      // playIds.append(playID)
    }
  }
  // return Result(_owner: account, _setData: setData, _moments: moments)
  return {"gg": "gg"}
}

pub struct Result {
  pub let owner: Address
  pub let setData: AllDay.SetData
  pub let moments: [MomentData]

  init(_owner: Address, _setData: AllDay.SetData, _moments: [MomentData]) {
    self.owner = _owner
    self.setData = _setData
    self.moments = _moments
  }
}
  
pub struct MomentData {
  pub let serialNumber: UInt32
  pub let player: String
  pub let team: String
  pub let date: String
  pub let playCategory: String
  pub let setName: String

  init(_serialNumber: UInt32, _player: String, _team: String, _date: String, _playCategory: String, _setName: String) {
    self.serialNumber = _serialNumber
    self.player = _player
    self.team = _team
    self.date = _date
    self.playCategory = _playCategory
    self.setName = _setName
  }
}