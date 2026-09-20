// /lib/models/Project.ts
import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
  // Optional fields — safe to leave unset on existing documents.
  // They let the Work section present a project as a product rather than
  // just "repo + tech stack" when you choose to fill them in.
  role?: string;
  problem?: string;
  highlights?: string[];
  githubUrl?: string;
  featured?: boolean;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: String,
  image: String,
  techStack: [String],
  link: String,
  role: String,
  problem: String,
  highlights: [String],
  githubUrl: String,
  featured: { type: Boolean, default: false },
});

export default models.Project || model<IProject>("Project", ProjectSchema);