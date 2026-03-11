export interface ParkingDay {
  fecha: string; // ISO date string YYYY-MM-DD
  dia: string;
  parqueo1: string;
  parqueo2: string;
}

export interface ParkingScheduleData {
  parqueos: ParkingDay[];
}

export interface ParkingAssignment {
  date: string; // YYYY-MM-DD
  dayLabel: string;
  isToday: boolean;
  daysFromToday: number;
  relativeLabel: string;
  parqueo1: string;
  parqueo2: string;
}

