// formData:

//   filename: "name"
//   pdf_file: "file in bytes"
import FormData from 'form-data';
export async function fileUpload  (req, res){
    try {
        if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
        const formData = new FormData();
        formData.append('filename', req.body.filename);
        formData.append('pdf_file', req.file.buffer, req.file.originalname); // Properly send file

        // Forward request to FastAPI
        // const response = await axios.post(`${FASTAPI_URL}/api/upload`, formData, {
        //     headers: formData.getHeaders(), // Ensure correct headers
        // });

        // res.json(response.data);

        res.json({ message: 'File uploaded successfully',formData });
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ error: 'File upload failed' });
    }
};
export async function parseResume(req,res){
    //send api request to resume parser
    //get the parsed data
    //send the parsed data back to the client
    // const response=await axios.get(`${FASTAPI_URL}/api/parse`);
    try{
        // const response=await axios.get(`https://localhost:8000/api/parse`);
        const dummyResponse={
            skills: [
                "Reactjs",
                "MongoDb",
                "Toomfoolrey",
                "Skibidi"
            ],
            desiredSkills: [
                "Devops",
                "Golang",
                "MachineLearning"
            ],
            workExperience: [
                {
                    "jobTitle": "Janitor",
                    "company": "Janitor Pvt Ltd",
                    "startYear": 1999,
                    "endYear": 2030,
                    "responsibilities": "clean and be clean"
                }
            ],
            educationDetails: [
                {
                    "schoolName": "Diddy school",
                    "degree": "brainrot",
                    "startYear": 2000,
                    "endYear": 2060,
                    "major": "Skibidi"
                }
            ],
            projects: [
                {
                    "name":"Career Shepherds",
                    "description": "A personalized career hub ",
                    "technologiesUsed": ["Reactjs","Nodejs","FastAPI","Python","LangChain","shadcn-ui"]
                }
            ]
        };
        res.json(dummyResponse);
    }
        catch(error){
            console.error('Parsing Error:', error);
            res.status(500).json({ error: 'Parsing failed' });
        }



}
export function checkResume(req,res){
    const jd=req.body.jd;
    if(!jd) return res.status(400).json({error:'No job description provided'});
    const dummyResponse={
        "Fitment Score": 8.5,
        "Missing Skills/keywords": ["Computer vision", "Structure from Motion (SFM) pipeline", "Photogrammetry"],
        "Resume Improvement Suggestions": [
          "Highlight any experience or projects related to computer vision or photogrammetry",
          "Include any relevant coursework or certifications in machine learning or computer vision"
        ],
        "Personalized Advice": "Your strong programming skills and experience in developing projects using various technologies make you a strong candidate for this role. To increase your chances of getting selected, it would be beneficial to highlight any experience or knowledge you have in the field of computer vision and photogrammetry. Additionally, gaining more exposure to Structure from Motion (SFM) pipeline would make your profile even more attractive for this role."
      }
    res.status(200).json({message:'Resume checked successfully',data:dummyResponse});

}