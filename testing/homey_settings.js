/* eslint-disable comma-dangle */

'use strict';

/**
 * THIS FILE IS A REPLACEMENT FOR HOMEY.JS WHEN TESTING SETTINGS INTERFACE
 */

class FakeHomey {

  ready() {
    // ok, you're ready
  }

  __(string) {
    return string;
  }

  api(type, command, justNull, callback) {
    console.log(`API command: ${command}`);
    const err = undefined;
    let response;
    if (command.includes('/getStats')) {
      let pp;
      if (command.includes('granularity=3')) {
        pp = [1,null,2,3,4,5,1,2,3,4,5,1,2,3];
      } else {
        pp = [[1,2,3,4,5],null,[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]];
      }
      response = {
        daysInMonth: 31,
        hoursInDay: 24,
        localTime: 1670989328353,
        localDay: 14,
        localMonth: 11,
        localYear: 2022,
        data: {
          // maxPower: [4000, 4900, 4300, 4800, 4500, 4400, 4200, 3200, 1023, 4300],
          maxPower: [4704, 4938, 4021, 4297],
          chargeShedule: [4000, 4000, 0, 0, 4000],
          elPrices: [0.5, 0.43, 0.33, 0.64, 0.93, 0.45, 0.22],
          currentHour: 2,
          price: [1,null,3,4,0.5,1.4,5.2,3.2,2.2,4.2,1.1],
          pricePoints: pp,
          powUsage: [3, 5, 1, 6],
        },
        // dataGood: [true, true, false, true, true],
        dataGood:[0, 1, 1, 0, 1],
      };
      // response = {"daysInMonth":31,"hoursInDay":1,"localTime":1670193702771,"localDay":4,"localMonth":11,"localYear":2022,"data":{"error":{}},"dataGood":false};
      // response = {"daysInMonth":31,"hoursInDay":24,"localTime":1670213729136,"localDay":5,"localMonth":11,"localYear":2022,"data":{"chargeShedule":[],"elPrices":[0.7127719530932262,0.6934892301956708,0.66827484805007,0.6659562841746125,0.6575514901260789,0.7758755332369289,0.8918657689005378,0.9225674188847215,0.9238812717474807,0.9452507021329477,0.9696729082877671,0.9994471327217678,0.9896898430792174,0.9827534728184737,1.0126436254462472,0.9887044534321479,0.9994664540873965,1.0567349818111982,1.1417489905779745,0.9994471327217678,0.97662859991414,0.967721450359257,0.8608122565411902,0.834921626598581],"currentHour":5,"maxPower":[4379.558582499998,4691.687735833334,1258.170082222223,4726.245076388889,8744.871345833333]},"dataGood":[true,true,true,false,true]};
      // response = {"daysInMonth":31,"hoursInDay":24,"localTime":1670303200188,"localDay":6,"localMonth":11,"localYear":2022,"data":{"price":[1,null,3,4,0.5,1.4,5.2,3.2,2.2,4.2,1.1],"pricePoints":[[1,2,3,4,5],null,[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]},"dataGood":[true,true,true,false,true]};
    } else if (command.includes('/apiCommand?cmd=createDeviceList')) {
      response = {
        id_a: { name:"DeviceNamenamenamenamename 1", room: "Stue",    image: "https://as2.ftcdn.net/v2/jpg/02/49/76/93/1000_F_249769389_7su5tYXOvcjcehNCcWTwcjnHvSMkLocJ.jpg", use: true, priority: 0, thermostat_cap: true, driverId: 'no.thermofloor:TF_Thermostat' },
        id_b: { name:"DeviceName 2", room: "Kjøkken", image: "https://as2.ftcdn.net/v2/jpg/02/49/76/93/1000_F_249769389_7su5tYXOvcjcehNCcWTwcjnHvSMkLocJ.jpg", use: true, priority: 1, thermostat_cap: true, reliability: 0.5, driverId: 'no.thermofloor:Z-TRM2fx' },
        id_c: { name:"DeviceName 3", room: "Bad",     image: "https://as2.ftcdn.net/v2/jpg/02/49/76/93/1000_F_249769389_7su5tYXOvcjcehNCcWTwcjnHvSMkLocJ.jpg", use: true, priority: 0, thermostat_cap: false, reliability: 0.6, driverId: 'no.thermofloor:Z-TRM3' },
        id_d: { name:"DeviceName 4", room: "Bad",     image: "https://as2.ftcdn.net/v2/jpg/02/49/76/93/1000_F_249769389_7su5tYXOvcjcehNCcWTwcjnHvSMkLocJ.jpg", use: false, priority: 1, thermostat_cap: true, reliability: 0.7, driverId: 'se.husdata:H60' },
        id_e: { name:"DeviceName 3", room: "Bad",     image: "https://as2.ftcdn.net/v2/jpg/02/49/76/93/1000_F_249769389_7su5tYXOvcjcehNCcWTwcjnHvSMkLocJ.jpg", use: true, priority: 0, thermostat_cap: false, reliability: 0.6, driverId: 'com.everspring:AN179' },
        id_e: { name:"Lader", room: "Ute",     image: "https://as2.ftcdn.net/v2/jpg/02/49/76/93/1000_F_249769389_7su5tYXOvcjcehNCcWTwcjnHvSMkLocJ.jpg", use: false, priority: 1, thermostat_cap: false, reliability: 1.0, driverId: 'no.easee:charger' }
      };
    } else if (command.includes('/apiCommand?cmd=getCurrencies')) {
      response = { NOK: 'Norsk krone', SEK: 'Svensk Krone', DKK: 'Dansk Krone' };
    } else if (command.includes('/apiCommand?cmd=getAppConfigProgress')) {
      response = {
        numSpookeyChanges: 0,
        energyMeterNotConnected: false,
        timeSinceEnergyMeter: 10,
        gotPPFromFlow: true,
        ApiStatus: PRICE_API_OK
      };
    } else if (command.includes('/apiCommand?cmd=getFullState')) {
      response = { fakestate: true };
    } else if (command.includes('/getDevices?type')) {
      response = [{name: 'Nothing selected', value: ''}, {name: 'something', value: 'avv-bbb'}, {name: 'another thing', value: 'ffe-bbb'}];
    } else if (command.includes('/apiCommand?cmd=getMeterReaders')) {
      response = { CCDEB: 'Eva Meter Reader', CAR: 'Easee Equaliser' };
    } else {
      // No return value expected
      // '/apiCommand?cmd=log'
      // '/apiCommand?cmd=setLogLevel&logLevel'
      // '/apiCommand?cmd=setLogUnit&logUnit'
      // '/apiCommand?cmd=logShowCaps&deviceId'
      // '/apiCommand?cmd=clearLog'
      // '/apiCommand?cmd=sendLog'
    }
    callback(err, response);
  }

  get(settingName, callback) {
    const err = undefined;
    let response;
    switch (settingName) {
      case 'expireDaily':
        response = 31;
        break;
      case 'expireHourly':
        response = 7;
        break;
      case 'futurePriceOptions':
        response = {
          minCheapTime: 4,
          minExpensiveTime: 4,
          averageTime: 0,
          dirtCheapPriceModifier: -50,
          lowPriceModifier: -10,
          highPriceModifier: 10,
          extremePriceModifier: 100,
          priceKind: 1, // Spot
          priceCountry: 'no',
          priceRegion: 0,
          surcharge: 0.0198, // Ramua kraft energi web
          priceFixed: 0.6,
          gridTaxDay: 0.3626, // Tensio default
          gridTaxNight: 0.2839, // Tensio default
          VAT: 25,
          currency: 'NOK',
          gridCosts: [{ limit: 2000, price: 73 }, { limit: 5000, price: 128 }, { limit: 10000, price: 219 }]
        };
        break;
      case 'maxPower':
        response = 5000;
        break;
      case 'chargerOptions':
        response = {
          chargeTarget: CHARGE_TARGET_AUTO,
          chargeMin: 1500,
          chargeThreshold: 2000,
          minToggleTime: 120,
          chargeCycleType: OFFER_HOURS,
          chargeRemaining: 0,
          chargeEnd: '2022-10-15T06:00:08.708Z'
        };
        break;
      case 'modeList':
        response = [
          // Normal
          [{ id: 'id_a', operation: CONTROLLED, targetTemp: 24 },
            { id: 'id_b', operation: ALWAYS_OFF, targetTemp: 15 },
            { id: 'id_c', operation: CONTROLLED, targetTemp: 20 },
            { id: 'id_d', operation: CONTROLLED, targetTemp: 20 }
          ],
          [], // Night
          [] // Away
        ];
        break;
      case 'modeNames':
        response = ['Blah', 'Nomode', 'alsoNoMode'];
        break;
      case 'frostList':
        response = null;
        break;
      case 'zones':
        response = null;
        break;
      case 'override':
        response = null;
        break;
      case 'priceActionList':
        response = null;
        break;
      case 'operatingMode':
        response = null;
        break;
      case 'priceMode':
        response = null;
        break;
      case 'pricePoint':
        response = null;
        break;
      case 'errorMargin':
        response = null;
        break;
      case 'controlTemp':
        response = null;
        break;
      case 'freeThreshold':
        response = null;
        break;
      case 'safetyPower':
        response = null;
        break;
      case 'mainFuse':
        response = null;
        break;
      default:
        response = null;
    }
    callback(err, response);
  }

  on() {
  }

  alert(err) {
    window.alert(err);
  }

}

const Homey = new FakeHomey();

function activate() {
  onHomeyReady(Homey);
}

// Using timeout to activate because onHomeyReady is not defined yet at this point
setTimeout(activate, 100);
