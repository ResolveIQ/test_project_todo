import mongoose from "mongoose";

const ReminderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255
    },

    description: {
      type: String,
      maxlength: 2000
    },

    type: {
      type: String,
      enum: ["time_based"],
      default: "time_based",
      immutable: true
    },

    status: {
      type: String,
      enum: [
        "active",
        "paused",
        "completed",
        "cancelled"
      ],
      default: "active",
      index: true
    },

    priority: {
      type: String,
      enum: ["low", "normal", "high"],
      default: "normal"
    },

    timezone: {
      type: String,
      required: true
    },

    schedule: {
      type: {
        type: String,
        enum: [
          "once",
          "daily",
          "weekly",
          "monthly"
        ],
        required: true
      },

      timeOfDay: {
        type: String,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/
      },

      daysOfWeek: {
        type: [Number],
        validate: {
          validator: (values:unknown) =>
            values.every(day => day >= 1 && day <= 7)
        }
      },

      dayOfMonth: {
        type: Number,
        min: 1,
        max: 31
      },

      startAt: Date,

      endAt: Date,

      recurrenceRule: String,

      nextTriggerAt: {
        type: Date,
        index: true
      }
    },

    notification: {
      enabled: {
        type: Boolean,
        default: true
      },

      channels: {
        type: [String],
        enum: [
          "push",
          "email",
          "sms"
        ],
        default: ["push"]
      }
    }
  },

  {
    timestamps: true
  }
);