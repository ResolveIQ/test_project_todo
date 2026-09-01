export interface createReminder{
    _id: string;
    userId: string;
    title: string;
    description?: string;
    type: "time_based";
    status:ReminderStatus;
    priority:ReminderPriority;
    timeZone:string;
    notification: ReminderNotification;
    createdAt:Date;
    updatedAt:Date;
    schedule:ReminderSchedule
}

export type ReminderStatus =
  | "active"
  | "paused"
  | "completed"
  | "cancelled";


export type ReminderPriority =
    | "high"
    | "normal"
    | "low"

export type ReminderScheduleType =
  | "once"
  | "daily"
  | "weekly"
  | "monthly";

export type NotificationChannel =
  | "push"
  | "email"
  | "sms";


export interface ReminderNotification {
  enabled: boolean;
  channels: NotificationChannel[];
}


export interface ReminderSchedule {
  type: ReminderScheduleType;
  timeOfDay?: string;
  daysOfWeek?: number[];
  dayOfMonth?: number;
  startAt?: Date;
  endAt?: Date;
  recurrenceRule?: string;
  nextTriggerAt?: Date;
}