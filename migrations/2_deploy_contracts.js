const Creature = artifacts.require("Creature");

module.exports = function(deployer) {
  
  const proxyRegistryAddress = '0xf57b2c51ded3a29e6891aba85459d600256cf317'; // rinkeby
  //const proxyRegistryAddress = '0x58807baD0B376efc12F5AD86aAc70E78ed67deaE'; // matic
  const ChildChainManagerProxy = '0xb5505a6d998549090530911180f38aC5130101c6'; // matic
  deployer.deploy(Creature, "LOSERPUNKS", "失败朋克", proxyRegistryAddress, ChildChainManagerProxy);
};
