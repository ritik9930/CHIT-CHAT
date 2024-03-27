const FAKE_LOCATIONS = [
  {
    coords: {
      latitude: 22.7925,                  //jamshedpur
      longitude: 86.1842,
    },
  },
  {
    coords: {                             // kolkata
      latitude: 22.5675,
      longitude: 88.3700,
    },
  },
  {
    coords: {
      latitude: 25.6000,
      longitude: 85.1000,               //patna
    },
  },
  {
    coords: {
      latitude: 12.9789,
      longitude: 77.5917,             //bangalore
    },
  },
  {
    coords: {
      latitude: 25.1800,
      longitude:75.8300,                  //kota
    },
  },
  {
    coords: {
      latitude: 18.5203,
      longitude: 73.8567,                    //pune
    },
  },
  {
    coords: {
      latitude: 26.219915,
      longitude: 84.357959,                 //siwan
    },
  },
  {
    coords: {
      latitude: 25.8736128,
      longitude: 86.5828864,                 //saharsa
    },
  },

  {
      coords: {
          latitude: 23.665783,
          longitude: 86.152725,            //bokaro
        },
    },

    {
      coords: {
          latitude: 23.795399,
          longitude: 86.427040,             //dhanbad
        },
    },

    // {
    //   coords: {
    //       latitude: 40.776676,
    //       longitude: -73.971321,             //New York
    //     },
    // },

    // {
    //   coords: {
    //       latitude: 51.509865,
    //       longitude: -0.118092,              //London
                 
    //     },
    // },


    // {
    //   coords: {
    //       latitude: 35.6839,
    //       longitude: 139.7744,           //Tokyo    
                 
    //     },
    // },
];

export const getFakeLocation = () => {
  return FAKE_LOCATIONS[Math.floor(Math.random() * FAKE_LOCATIONS.length)];
};