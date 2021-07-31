const N = 2
const Creature = artifacts.require('Creature');

module.exports = async function(callback) {
  try {
  
    const nft = await Creature.at('0xcf57667f3c107cd97105b9cd97c81c21ab8ba0c5')
    
    for (let i=0; i<N; i++) {
      console.log("publishing: ", i)
      await nft.mintTo('0x6d9c2dbB7c09f68B2fCD04a8DEE4a8906B177A13')
    }
    
  }
  catch(error) {
    console.log(error)
  }

  callback()
}
