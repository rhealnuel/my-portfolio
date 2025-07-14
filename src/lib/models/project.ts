// /lib/models/Project.ts
import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: String,
  image: String,
  techStack: [String],
  link: String,
});

export default models.Project || model<IProject>("Project", ProjectSchema);
