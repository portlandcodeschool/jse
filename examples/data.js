var data = [{
  name: 'Niagara',
  rig: 'brig',
  hull: 'wood',
  port: 'Erie, PA',
  status: 'active'
},
{ name: 'Bounty',
  rig: 'full-rigged ship',
  hull: 'wood',
  port: 'Fall River, MA',
  status: 'sunk'
},
{ name: 'Surprise, née Rose',
  rig: 'full-rigged ship',
  hull: 'wood',
  port: 'San Diego, CA',
  status: 'tourist attraction'
},
{ name: 'Europa',
  rig: 'barque',
  hull: 'steel',
  port: 'Amsterdam',
  status: 'active',
},
{ name: 'Pride of Baltimore II',
  rig: 'square topsail schooner',
  hull: 'wood',
  port: 'Baltimore, MD',
  status: 'active'
},
{ name: 'Spirit of Massachusetts',
  rig: 'gaff topsail schooner',
  hull: 'wood',
  status: 'floating restaurant'
},
{ name: 'Virginia',
  rig: 'gaff topsail schooner',
  hull: 'wood',
  status: 'for sale'
},
{ name: 'White Raven',
  rig: 'wishbone schooner',
  hull: 'steel',
  status: 'active'
}];

// initial version:
module.exports = data;

// flexible version:
// if(typeof module !== 'undefined') {
//   module.exports = data;
// }
