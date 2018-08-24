'use strict'
var networks = function() {}

const {
  CLASSIC,
  CLASSIC_CODE,
  EXPANSE,
  EXPANSE_CODE,
} = require('./enums')

networks.networkList = {
  [CLASSIC]: {
    'chainId': CLASSIC_CODE,
    'ticker': 'ETC',
    'blockExplorerTx': 'https://gastracker.io/tx/[[txHash]]',
    'blockExplorerAddr': 'https://gastracker.io/addr/[[address]]',
    'blockExplorerToken': 'https://gastracker.io/token/[[tokenAddress]]/[[address]]',
    'service': 'ETC Cooperative',
    'rpcUrl': 'https://ethereumclassic.network',
    'exchanges': ['ShapeShift'],
    'buyUrl': '',
  },
  [EXPANSE]: {
    'chainId': EXPANSE_CODE,
    'ticker': 'EXP',
    'blockExplorerTx': 'https://www.gander.io/tx/[[txHash]]',
    'blockExplorerAddr': 'https://www.gander.io/address/[[address]]',
    'blockExplorerToken': 'https://www.gander.io/token/[[tokenAddress]]/[[address]]',
    'service': 'Expanse Tech',
    'rpcUrl': 'https://node.expanse.tech',
    'exchanges': ['ShapeShift'],
    'buyUrl': '',
  },
}

module.exports = networks
