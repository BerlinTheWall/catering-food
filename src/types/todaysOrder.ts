export interface TodayOrder {
  monthName: string;
  dayName: string;
  dayNumber: number;
  foodName: string;
  hasOrder: boolean;
  isPaid: boolean;
  foodCalendarId: number;
  foodSize?: string;
}
