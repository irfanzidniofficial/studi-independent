const videoData = [
  {
    name: "Mis Scarlet",
    present: true,
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
    present: false,
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
    present: true,
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
    present: false,
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
    present: true,
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

const filteredData = videoData.filter((video) => {
  return video.present;
});

console.log(filteredData);
// console.log(filteredData.length);

const dataFilter = filteredData.map((data) => {
  let name = data.name.toString();
  let present = data.present.toString();
  let rooms = data.rooms;

  let roomsObject = {
    nama: name,
    present: present,
    rooms: rooms,
  };
  console.log(roomsObject);
});

// console.log(dataFilter);
