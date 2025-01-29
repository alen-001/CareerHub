"use client"
import calculateCompletionPercentage from "@/lib/utils/calculateCompletionPercentage.js"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PlusCircle, MinusCircle, Heading1 } from "lucide-react"
import ProgressBar from "@/components/ui/ProgressBar"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { TagInput } from "@/components/ui/tag-input"

export default function ProfileBuilder() {
    const [tab,setTab] = useState(0);
    const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    socialLinks: {
        linkedIn: "",
        gitHub: "",
    },
    workExperience: [{ jobTitle: "", company: "", startYear: "", endYear: "", responsibilities: "" }],
    educationDetails: [{ schoolName: "", degree: "", startYear: "", endYear: "", major: "" }],
    skills: ["React", "Tailwind", "Next.js"],
    desiredSkills: [""],
    projects: [{ name: "", description: "", technologiesUsed: [""] }],
    })

    const handleChange = (e, field, index, subfield) => {
        const { value } = e.target;
    
        setProfile((prev) => {
            if (index !== undefined && subfield) {
                return {
                    ...prev,
                    [field]: prev[field].map((item, i) =>
                        i === index ? { ...item, [subfield]: value } : item
                    ),
                };
            } else if (field === "socialLinks" && subfield) {
                return {
                    ...prev,
                    socialLinks: { ...prev.socialLinks, [subfield]: value },
                };
            } else {
                return { ...prev, [field]: value };
            }
        });
    };
    
    
    const handleArrayChange = (tags, field) => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          [field]: tags.map(tag => tag.label),
        }));
      };

    const addArrayField = (field) => {
    setProfile((prev) => ({
        ...prev,
        [field]: [
        ...prev[field],
        field === "workExperience"
            ? { jobTitle: "", company: "", startYear: "", endYear: "", responsibilities: "" }
            : field === "educationDetails"
            ? { schoolName: "", degree: "", startYear: "", endYear: "", major: "" }
            : field === "projects"
                ? { name: "", description: "", technologiesUsed: [""] }
                : "",
        ],
    }))
    }

    const removeArrayField = (field, index) => {
    setProfile((prev) => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index),
    }))
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    console.log(profile)
    // Here you would typically send the data to your backend
    }
    
    function Outline({children}){
        return(
            <>
            <h1 className="text-6xl  mt-6 font-thin ">Your Profile</h1>
            <ProgressBar className="font-thin" percentage={calculateCompletionPercentage(profile)} /> 
            {children}
            </> 
        )
    }
    function BasicInfo(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <Label htmlFor="firstName">First Name*</Label>
            <Input
                id="firstName"
                value={profile.firstName}
                onChange={(e) => handleChange(e, "firstName")}
                required
                
            />
            </div>
            <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
                id="lastName"
                value={profile.lastName}
                onChange={(e) => handleChange(e, "lastName")}
                
            />
            </div>
        </div>

        <div>
            <Label htmlFor="email">Email*</Label>
            <Input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => handleChange(e, "email")}
            required
            
            />
        </div>

        <div>
            <Label htmlFor="username">Username*</Label>
            <Input
            id="username"
            value={profile.username}
            onChange={(e) => handleChange(e, "username")}
            required
            
            />
        </div>

        <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
            id="phoneNumber"
            type="tel"
            value={profile.phoneNumber}
            onChange={(e) => handleChange(e, "phoneNumber")}
            
            />
        </div>

        <div className="grid gap-2">
            <Label>Social Links</Label>
            <Input
            placeholder="LinkedIn"
            value={profile.socialLinks.linkedIn}
            onChange={(e) => handleChange(e, "socialLinks", undefined, "linkedIn")}
            
            />
            <Input
            placeholder="GitHub"
            value={profile.socialLinks.gitHub}
            onChange={(e) => handleChange(e, "socialLinks", undefined, "gitHub")}
            
            />
        </div>
        </>
    )}

    function WorkExperience(){
        return(
            <div>
                <Label>Work Experience</Label>
                {profile.workExperience.map((exp, index) => (
                <div key={index} className="mb-4 p-4 grid gap-2 border border-border rounded">
                    <div className="font-thin">Work Experience {index+1}</div>
                    <Input
                    placeholder="Job Title"
                    value={exp.jobTitle}
                    onChange={(e) => handleChange(e, "workExperience", index, "jobTitle")}
                    
                    />
                    <Input
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => handleChange(e, "workExperience", index, "company")}
                    
                    />
                    <Input
                    placeholder="Start Year"
                    value={exp.startYear}
                    onChange={(e) => handleChange(e, "workExperience", index, "startYear")}
                    
                    />
                    <Input
                    placeholder="End Year"
                    value={exp.endYear}
                    onChange={(e) => handleChange(e, "workExperience", index, "endYear")}
                    
                    />
                    <Textarea
                    placeholder="Responsibilities"
                    value={exp.responsibilities}
                    onChange={(e) => handleChange(e, "workExperience", index, "responsibilities")}
                    
                    />
                    {index > 0 && (
                    <Button
                        type="button"
                        onClick={() => removeArrayField("workExperience", index)}

                        variant="destructive"
                    >
                        <MinusCircle className="mr-2 h-4 w-4" /> Remove
                    </Button>
                    )}
                </div>
                ))}
                <Button
                type="button"
                onClick={() => addArrayField("workExperience")}
                className={cn("bg-primary text-primary-foreground hover:bg-primary/90", "mt-2")}
                >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Work Experience
                </Button>
        </div>
        )
    }
    function Projects(){
        return(
            <div>
                <Label>Projects</Label>
                {profile.projects.map((exp, index) => (
                <div key={index} className="mb-4 p-4 grid gap-2 border border-border rounded">
                    <div className="font-thin">Project {index+1}</div>
                    <Input
                    placeholder="Project Name"
                    value={exp.name}
                    onChange={(e) => handleChange(e, "projects", index, "name")}
                    />
                    <Textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) => handleChange(e, "projects", index, "description")}
                    />
                    <TagInput
                        label="Technologies Used"
                        placeholder="Add technologies..."
                        defaultTags={exp.technologiesUsed.map((tech) => ({ id: tech, label: tech }))}
                        onChange={(tags) => {
                        const newProjects = [...profile.projects]
                        newProjects[index].technologiesUsed = tags.map((tag) => tag.label)
                        setProfile((prev) => ({ ...prev, projects: newProjects }))
                        }}
                    />
                    {index > 0 && (
                    <Button
                        type="button"
                        onClick={() => removeArrayField("projects", index)}

                        variant="destructive"
                    >
                        <MinusCircle className="mr-2 h-4 w-4" /> Remove
                    </Button>
                    )}
                </div>
                ))}
                <Button
                type="button"
                onClick={() => addArrayField("projects")}
                className={cn("bg-primary text-primary-foreground hover:bg-primary/90", "mt-2")}
                >
                <PlusCircle className="mr-2 h-4 w-4" /> Add project
                </Button>
        </div>
        )
    }
    function educationDetails(){
        return(
            <div>
            <Label>Education Details</Label>
            {profile.educationDetails.map((edu, index) => (
            <div key={index} className="mb-4 p-4 grid gap-2 border border-border rounded">
                <Input
                placeholder="School Name"
                value={edu.schoolName}
                onChange={(e) => handleChange(e, "educationDetails", index, "schoolName")}
                
                />
                <Input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, "educationDetails", index, "degree")}
                
                />
                <Input
                placeholder="Start Year"
                value={edu.startYear}
                onChange={(e) => handleChange(e, "educationDetails", index, "startYear")}
                className={{}}
                />
                <Input
                placeholder="End Year"
                value={edu.endYear}
                onChange={(e) => handleChange(e, "educationDetails", index, "endYear")}
                
                />
                <Input
                placeholder="Major"
                value={edu.major}
                onChange={(e) => handleChange(e, "educationDetails", index, "major")}
                
                />
                {index > 0 && (
                <Button
                    type="button"
                    onClick={() => removeArrayField("educationDetails", index)}

                    variant="destructive"
                >
                    <MinusCircle className="mr-2 h-4 w-4" /> Remove
                </Button>
                )}
            </div>
            ))}
            <Button
            type="button"
            onClick={() => addArrayField("educationDetails")}
            className={cn("bg-primary text-primary-foreground hover:bg-primary/90", "mt-2")}
            >
            <PlusCircle className="mr-2 h-4 w-4" /> Add Education
            </Button>
        </div>
        )
    }

    function SkillsAdditionalInfo({ profile, handleArrayChange }) {
        return (
          <>
            <TagInput
              label="Skills"
              placeholder="Add skills..."
              defaultTags={profile.skills.map((skill) => ({ id: skill, label: skill }))}
              onChange={(tags) => handleArrayChange(tags, "skills")}
            />
            <TagInput
              label="Desired Skills"
              placeholder="Add desired skills..."
              defaultTags={profile.desiredSkills.map((skill) => ({ id: skill, label: skill }))}
              onChange={(tags) => handleArrayChange(tags, "desiredSkills")}
            />
          </>
        );
      }
    
    return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center">
    <Card className=' w-2/3 h-10/12 overflow-scroll m-10 p-10'>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <Outline>
                <BasicInfo/>
                <SkillsAdditionalInfo profile={profile} handleArrayChange={handleArrayChange}/>
                <WorkExperience/>
                <educationDetails/>
                <Projects/>
                
            </Outline>
        </form>
        </Card>
    </div>
    )
}
const tagStyles = {
    base: "inline-flex items-center gap-1.5 px-2 py-0.5 text-sm rounded-md transition-colors duration-150",
    colors: {
      blue: "bg-blue-50 text-blue-700 border border-blue-200 hover:border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/30 dark:hover:border-blue-600/50",
      purple:
        "bg-purple-50 text-purple-700 border border-purple-200 hover:border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700/30 dark:hover:border-purple-600/50",
      green:
        "bg-green-50 text-green-700 border border-green-200 hover:border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700/30 dark:hover:border-green-600/50",
    },
  };

