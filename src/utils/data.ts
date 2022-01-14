interface IState {
  dayEnnum: string[];
  monthEnnum: string[];

  subjects: {
    id: number;
    subject: string;
    subjectName: string;
    periods: number[];
    faculty: string;
    slot: string;
    code: string;
    googleClassRoomLink?: string;
    googleMeetLink?: string;
  }[];
}

export const dayEnnum: IState['dayEnnum'] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thrusday',
  'Friday',
  'Saturday',
];

export const monthEnnum: IState['monthEnnum'] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const s4: IState['subjects'] = [
  {
    id: 0,
    subject: 'flat',
    subjectName: 'Formal Languages and Automata Theory',
    periods: [14, 31, 42, 53],
    faculty: 'Salitha K K',
    slot: 'A',
    code: 'CST 301',
    googleClassRoomLink: 'https://classroom.google.com/u/0/c/NDM1OTY0MzM5NDU1',
    googleMeetLink: 'https://meet.google.com/usx-spkx-fvx?authuser=0',
  },
  {
    id: 1,
    subject: 'cn',
    subjectName: 'Computer Networks',
    periods: [13, 24, 41, 52],
    faculty: 'Jucy Vareed',
    slot: 'B',
    code: 'CST 303',
    googleClassRoomLink: 'https://classroom.google.com/u/0/c/NDM1OTY0MzM5NTE2',
    googleMeetLink: 'https://meet.google.com/rvx-zjck-gsp?authuser=0',
  },
  {
    id: 2,
    subject: 'ss',
    subjectName: 'System Software',
    periods: [22, 33, 44, 51],
    faculty: 'Remya P S',
    slot: 'C',
    code: 'CST 305',
    googleClassRoomLink: 'https://classroom.google.com/u/0/c/NDM1OTY0MzM5NTU2',
    googleMeetLink: 'https://meet.google.com/dpy-wxmv-zzx?authuser=0',
  },
  {
    id: 3,
    subject: 'mm',
    subjectName: 'Microprocessors And Microconrollers',
    periods: [12, 21, 54],
    faculty: 'Beena M V',
    slot: 'D',
    code: 'CST 307',
    googleClassRoomLink: 'https://classroom.google.com/u/0/c/NDM1OTY0MzM5NTc5',
    googleMeetLink: 'https://meet.google.com/ahd-mwhq-rrj?authuser=0',
  },
  {
    id: 4,
    subject: 'mss',
    subjectName: 'Management of Software Systems',
    periods: [11, 23, 32],
    faculty: 'Anima V A',
    slot: 'E',
    code: 'CST 309',
    googleClassRoomLink: 'https://classroom.google.com/u/0/c/NDM1OTY2Nzc0NjQ2',
    googleMeetLink: 'https://meet.google.com/kif-yfkj-tcn?authuser=0',
  },
  {
    id: 5,
    subject: 'dm',
    subjectName: 'Disaster Management',
    periods: [34, 43],
    faculty: 'Lasitha Mohanhas',
    slot: 'F',
    code: '-',
    googleClassRoomLink: 'https://classroom.google.com/u/0/c/NDM1OTY0MzM5NjI1',
    googleMeetLink: 'https://meet.google.com/yhk-yboi-fxo',
  },
  {
    id: 6,
    subject: 'dblab',
    subjectName: 'Database Management Systems Lab',
    periods: [15],
    faculty: 'Jucy Vareed, Anima V A',
    slot: 'S',
    code: 'CSL 333',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDUzMzExMjEz',
    googleMeetLink:
      'https://meet.google.com/lookup/a5sopjb25y?authuser=0&hs=179',
  },
  {
    id: 7,
    subject: 'ssmlab',
    subjectName: 'System Software and Microprocessor Lab',
    periods: [25],
    faculty: 'Beena M V, Shameem S',
    slot: 'T',
    code: 'CSL 331',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDU0NTQ2NDA2',
    googleMeetLink:
      'https://meet.google.com/lookup/fovzsojpz4?authuser=0&hs=179',
  },
  {
    id: 8,
    subject: 'cfml',
    subjectName: 'Computational Fundamentals for Machine Learning',
    periods: [61, 62],
    faculty: 'Thulasi Rajan K(TRK)',
    slot: 'u',
    code: 'CST294',
    googleClassRoomLink: '',
    googleMeetLink: '',
  },
];
