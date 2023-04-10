/**
 * You go to: https://poedb.tw/us/Awakened_Sextant#Sextant
 * then open the developer console and paste this into the console.
 * On the output right click and choose copy object. Thats how you get the
 * poedb_mods in DataMassager.js
 */
(function() {
    const weights = $('tr td:nth-child(4)').map((e, i) => $(i).html().split('<br>').pop().replace(/[^0-9]/gi, ''))
    const mods = $('tr td:nth-child(3)').map((e, i) => $(i).html().replace(/<br>/gi, ' ').replace(/<.*?>/gi, '').replace(/(\d uses remaining)/gi, '').replace(/(map .+ \[\d+\])/gm, '').trim())
    const modsAndWeights = {}
    for (let i = 0; i < weights.length; ++i) {
      modsAndWeights[mods[i]]=Number(weights[i])
    }

    return modsAndWeights;
  })();