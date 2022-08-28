const videoData = [
  {
    name: "Mis Scarlet",
    prsent: true,
    rooms: [
      { kitchen: false },
      { ballrom: false },
      { conservatory: false },
      { "dinding room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mis White",
    prsent: false,
    rooms: [
      { kitchen: false },
      { ballrom: false },
      { conservatory: false },
      { "dinding room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    prsent: true,
    rooms: [
      { kitchen: false },
      { ballrom: false },
      { conservatory: false },
      { "dinding room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    prsent: false,
    rooms: [
      { kitchen: false },
      { ballrom: false },
      { conservatory: false },
      { "dinding room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustad",
    prsent: true,
    rooms: [
      { kitchen: false },
      { ballrom: false },
      { conservatory: false },
      { "dinding room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

// looping

// for(var i=9, 1 =videoData.length; i<1, i++){
//     console.log(videoData[i])
// }

// const present = videoData.filter((video) => video.present);

// let pres = videoData.filter(({ present }) => present);

// console.log(present);
// console.log(pres);

const filteredData = videoData.filter((video) => videoData.present === true);

console.log(filteredData);
console.log(filteredData.length);
