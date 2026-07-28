export interface ParkingDay {
  fecha: string; // ISO date string YYYY-MM-DD
  dia: string;
  /** Parking slot 121 */
  parqueo121: string;
  /** Parking slot 317 */
  parqueo317: string;
  /** Parking slot 318 */
  parqueo318: string;
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
  parqueo121: string;
  parqueo317: string;
  parqueo318: string;
}
