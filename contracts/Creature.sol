// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

/**
 * @title Creature
 * Creature - a contract for my non-fungible creatures.
 */
contract Creature is ERC721Tradable {
    constructor(string memory _name, string memory _symbol, address _proxyRegistryAddress, address childChainManager)
        ERC721Tradable(_name, _symbol, _proxyRegistryAddress, childChainManager)
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "https://www.losernft.org/loserpunks/";
    }

    function contractURI() public pure returns (string memory) {
        return "https://www.losernft.org/loserpunks/contract.json";
    }
}
