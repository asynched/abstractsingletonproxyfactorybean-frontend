import { getRandomArrayElement } from './arrays'

export const randomNames = {
  names: [
    'hurdlewaistcoat',
    'shrivelsedge',
    'cakeoden',
    'oxbirdcancer',
    'butcherduring',
    'thumbsupfounder',
    'divorceupright',
    'fourthprivacy',
    'unfinishedcurse',
    'skateheadsail',
    'kiwiunsteady',
    'solvekey',
    'truthapparent',
    'financialvital',
    'fandesk',
    'comfortsense',
    'vaultingknock',
    'actressincentive',
    'ownscrubs',
    'explosionconviction',
    'horriblenye',
    'sentencestroke',
    'caponround',
    'azurewalrus',
    'laborerracehorse',
    'evaporatebeers',
    'soundsoupy',
    'farmerbritish',
    'collectivegaping',
    'croatianporch',
    'towerloss',
    'winnerplusia',
  ],
  get randomName() {
    return getRandomArrayElement(this.names)
  },
}

export const randomGreetingMessages = {
  messages: ['Hello', 'Hallo', 'Olá', 'Bonjour', 'Привет'],
  get randomMessage() {
    return getRandomArrayElement(this.messages)
  },
}
