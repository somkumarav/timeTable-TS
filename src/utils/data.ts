interface IState{
  dayEnnum:string[];
  monthEnnum:string[]

  subjects:{
    id: number;
    subject: string;
    subjectName: string;
    periods:number[],
    faculty: string;
    slot: string;
    code: string;
    googleClassRoomLink?: string;
    googleMeetLink?: string;
  }[];
}


export const dayEnnum:IState['dayEnnum'] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thrusday',
  'Friday',
  'Saturday',
];

export const monthEnnum:IState['monthEnnum'] = [
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

export const s4:IState['subjects']=[
  {
   id: 0,
    subject: 'gt',
    subjectName: 'Graph Theory',
    periods: [24, 33, 42, 51],
    faculty: 'Dr. Susanth C (SC)',
    slot: 'A',
    code: 'MAT 206 ',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDUxMDI4Mzkw',
    googleMeetLink: 'https://meet.google.com/lookup/ea6uhdtjbn?authuser=0&hs=179',
  },
  {
    id: 1,
    subject: 'coa',
    subjectName: 'Computer Organization and Architecture',
    periods: [14, 21, 32, 44],
    faculty: 'Shameem S (SS)',
    slot: 'B',
    code: 'CST 202',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDQ5MDY3NjU1',
    googleMeetLink: 'https://meet.google.com/lookup/fgohtz74gy?authuser=0&hs=179',
  },
  {
    id: 2,
    subject: 'dbms',
    subjectName: 'Data Base Managment System',
    periods: [11, 22, 34, 53],
    faculty: 'Jucy Vareed (JV)',
    slot: 'C',
    code: 'CST 204',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDQ5MDY3NzYw',
    googleMeetLink: 'https://meet.google.com/lookup/fl62oqn4kb?authuser=0&hs=179',
  },
  {
    id: 3,
    subject: 'os',
    subjectName: 'Operating Systems',
    periods: [13, 23, 31, 41],
    faculty: 'Nakulraj K R (NKR)',
    slot: 'D',
    code: 'CST 206',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDQ5MDY3ODU2',
    googleMeetLink: 'https://meet.google.com/lookup/gzoosfb3cq?authuser=0&hs=179',
  },
  {
    id: 4,
    subject: 'pe',
    subjectName: 'Professional Ethics',
    periods: [43, 52],
    faculty: 'Athira P S(APS)	',
    slot: 'E',
    code: 'HUT 200',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDUxMDM3NjM5',
    googleMeetLink: 'https://meet.google.com/lookup/fs2hwqvcqf?authuser=0&hs=179',
  },
  {
    id: 5,
    subject: 'ci',
    subjectName: 'Constitution of India',
    periods: [12, 54],
    faculty: 'Sonia Rose C P (SRCP)',
    slot: 'F',
    code: 'MCN 202',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDUwMDI3MDQx',
    googleMeetLink: 'https://meet.google.com/lookup/f55pnueayr?authuser=0&hs=179',
  },
  {
    id: 6,
    subject: 'digital-lab',
    subjectName: 'Digital Lab',
    periods: [25],
    faculty: 'Remya Rajendran (RR), Honey Mol P K (HPK)',
    slot: 'S',
    code: 'CSL 202',
    googleClassRoomLink: 'https://classroom.google.com/c/MzI2MDUzMzExMjEz',
    googleMeetLink: 'https://meet.google.com/lookup/a5sopjb25y?authuser=0&hs=179',
  },
  {
    id: 7,
    subject: 'os-lab',
    subjectName: 'Operating Systems Lab',
    periods: [15],
    faculty: 'Nakulraj K R (NKR), Jucy Vareed (JV)',
    slot: 'T',
    code: 'CSL204',
    googleClassRoomLink :'https://classroom.google.com/c/MzI2MDU0NTQ2NDA2',
    googleMeetLink: 'https://meet.google.com/lookup/fovzsojpz4?authuser=0&hs=179',
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

export const subjectEnum={
  11:'dms'
}