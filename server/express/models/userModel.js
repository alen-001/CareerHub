import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true ,unique: true },
  username: { type: String, required: true ,unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, length: 10 },
  resume: { type: String },
  socialLinks: {
    linkedIn: { type: String },
    gitHub: { type: String },
  },
  workExperience: [
    {
      jobTitle: { type: String },
      company: { type: String },
      startYear: { type: Number },
      endYear: { type: Number },
      responsibilities: { type: String },
    },
  ],
  educationDetails: [
    {
      schoolName: { type: String },
      degree: { type: String },
      startYear: { type: Number },
      endYear: { type: Number },
      major: { type: String },
    },
  ],
  skills: [String],
  desiredSkills: [String],
  projects: [
    {
      name: { type: String },
      description: { type: String },
      technologiesUsed: [String],
    },
  ],
});
const userModel = mongoose.model('User', userSchema);
export default userModel;