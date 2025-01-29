"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import ProgressBar from "@/components/profile_components/ProgressBar"
import { BasicInfo } from "@/components/profile_components/Basicinfo"
import { EducationAndSkills } from "@/components/profile_components/EducationAndSkills"
import { WorkExperienceAndProjects } from "@/components/profile_components/WorkExperienceAndProjects"
import { FormNavigation } from "@/components/profile_components/FormNavigation"
import { Card } from "@/components/ui/card"
const formSteps = [
  { title: "Basic Information", component: BasicInfo },
  { title: "Education and Skills", component: EducationAndSkills },
  {
    title: "Work Experience and Projects",
    component: WorkExperienceAndProjects
  }
]

export default function ProfileBuilder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [errors, setErrors] = useState({});
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    resume: "",
    socialLinks: { linkedIn: "", gitHub: "" },
    workExperience: [
      {
        jobTitle: "",
        company: "",
        startYear: "",
        endYear: "",
        responsibilities: ""
      }
    ],
    educationDetails: [
      { schoolName: "", degree: "", startYear: "", endYear: "", major: "" }
    ],
    skills: [],
    desiredSkills: [],
    projects: [{ name: "", description: "", technologiesUsed: [] }]
  })

  const handleChange = (e, field, index, subfield) => {
    if (index !== undefined && subfield) {
      setProfile(prev => ({
        ...prev,
        [field]: prev[field].map((item, i) =>
          i === index ? { ...item, [subfield]: e.target.value } : item
        )
      }))
    } else if (field === "socialLinks") {
      setProfile(prev => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [subfield]: e.target.value }
      }))
    } else {
      setProfile(prev => ({ ...prev, [field]: e.target.value }))
    }
  }

  const addArrayField = field => {
    setProfile(prev => {
      if (
        (field === "workExperience" && prev.workExperience.length >= 3) ||
        (field === "educationDetails" && prev.educationDetails.length >= 2) ||
        (field === "projects" && prev.projects.length >= 3)
      ) {
        return prev
      }
      return {
        ...prev,
        [field]: [
          ...prev[field],
          field === "workExperience"
            ? {
                jobTitle: "",
                company: "",
                startYear: "",
                endYear: "",
                responsibilities: ""
              }
            : field === "educationDetails"
            ? {
                schoolName: "",
                degree: "",
                startYear: "",
                endYear: "",
                major: ""
              }
            : field === "projects"
            ? { name: "", description: "", technologiesUsed: [] }
            : ""
        ]
      }
    })
  }

  const removeArrayField = (field, index) => {
    setProfile(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData();
    const newErrors={};
    if(!profile.firstName){
        newErrors.firstName="First Name is required";
        setCurrentStep(0);
    };
    if(!profile.email){
        newErrors.email="Email is required"
        setCurrentStep(0);
    };
    if(!profile.username){
        newErrors.username="Username is required"
        setCurrentStep(0);
    };
    if(Object.keys(newErrors).length>0){
        setErrors(newErrors);
        return;
    }
    const skills=profile.skills.map(
        (skill) => {
            return skill.label;
        }
    )
    const desiredSkills=profile.desiredSkills.map(
        (skill) => {
            return skill.label;
        }
    )
    const projects=profile.projects.map(
        (project) => {
            return {
                name: project.name,
                description: project.description,
                technologiesUsed: project.technologiesUsed.map(
                    (technology) => {
                        return technology.label;
                    }
                )
            }
        }
    )
    Object.entries(profile).forEach(([key, value]) => {
        if (key === "skills") {
            formData.append(key, JSON.stringify(skills));
        } else if (key === "desiredSkills") {
            formData.append(key, JSON.stringify(desiredSkills));
        } else if (key === "projects") {
            formData.append(key, JSON.stringify(projects));
        } else if (typeof value === "object") {
            formData.append(key, JSON.stringify(value));
        } else {
            formData.append(key, value);
        }
    });

    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    // Here you would typically send the data to your backend
  }

  const calculateCompletionPercentage = () => {
    const fields = [
      profile.firstName,
      profile.lastName,
      profile.email,
      profile.username,
      profile.phoneNumber,
      profile.socialLinks.linkedIn,
      profile.socialLinks.gitHub,
      ...profile.workExperience.flatMap(exp => Object.values(exp)),
      ...profile.educationDetails.flatMap(edu => Object.values(edu)),
      ...profile.skills,
      ...profile.desiredSkills,
      ...profile.projects.flatMap(proj => [
        proj.name,
        proj.description,
        ...proj.technologiesUsed
      ])
    ]

    const filledFields = fields.filter(field => field !== "").length
    const totalFields = fields.length

    return Math.round((filledFields / totalFields) * 100)
  }

  const CurrentStepComponent = formSteps[currentStep].component

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center">
    <Card className=' w-2/3 h-10/12 overflow-scroll m-10 p-10'>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
            {formSteps[currentStep].title}
        </h1>
        <ProgressBar percentage={calculateCompletionPercentage()} />
        <CurrentStepComponent
          profile={profile}
          handleChange={handleChange}
          addArrayField={addArrayField}
          removeArrayField={removeArrayField}
          setProfile={setProfile}
        />
        <FormNavigation
          currentStep={currentStep}
          totalSteps={formSteps.length}
          onPrevious={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          onNext={() =>
            setCurrentStep(prev => Math.min(formSteps.length - 1, prev + 1))
          }
        />
        {currentStep === formSteps.length - 1 && (
          <Button type="submit" className="w-full">
            Submit Profile
          </Button>
        )}
      </form>
      </Card>
    </div>
  )
}

