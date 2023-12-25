import { Schema, model } from 'mongoose';
import { TCourse, TDetails, TTags } from './course.interface';

export const TagsSchema = new Schema<TTags>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const DetailsSchema = new Schema<TDetails>({
  level: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});
const courseSchema = new Schema<TCourse>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    instructor: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: function (price: number) {
          return price >= 0;
        },
        message: 'Price must be Greater than 0',
      },
    },
    tags: [
      {
        type: TagsSchema,
        required: true,
      },
    ],
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
      trim: true,
    },
    provider: {
      type: String,
      required: true,
      trim: true,
    },
    durationInWeeks: {
      type: Number,
    },
    details: {
      type: DetailsSchema,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
  },
);
courseSchema.virtual('reviews', {
  ref: 'review',
  foreignField: 'courseId',
  localField: '_id',
});
courseSchema.pre('save', function (next) {
  const startDate = new Date(this.startDate);
  const endDate = new Date(this.endDate);

  const differenceInDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const durationInWeeks = Math.ceil(differenceInDays / 7);
  console.log(durationInWeeks);
  this.durationInWeeks = durationInWeeks;
  next();
});

export const Course = model<TCourse>('Course', courseSchema);
