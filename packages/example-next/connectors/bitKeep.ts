import { initializeConnector } from '@web3-react/core'
import { BitKeep } from '@web3-react/bitkeep' 

 
export const [bitKeep, hooks] = initializeConnector<BitKeep>((actions) => new BitKeep(actions))
