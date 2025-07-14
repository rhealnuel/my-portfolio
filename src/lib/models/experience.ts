// /lib/models/Experience.ts
import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IExperience extends Document {
  company: string;
  logo: string;
  role: string;
  date: string;
  bullets: string[];
}

const ExperienceSchema = new Schema<IExperience>({
  company: { type: String, required: true },
  logo: String,
  role: String,
  date: String,
  bullets: [String],
});

export default models.Experience || model<IExperience>("Experience", ExperienceSchema);
