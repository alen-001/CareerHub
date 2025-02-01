import axios from "axios";
const FAST_API_URL = 'http://localhost:8000';
function selectSkill(skills){
    if(skills.length>0)return skills[Math.floor(Math.random()*skills.length)];
    else return null;
}
export async function getRecommendations(req, res) {
    try{
        const user=req.user;
        const skills = user.skills;
        const desiredSkills = user.desiredSkills;
        if(skills.length==0){
            res.status(404).send({ message: 'No Skills Found' ,user});
            return;
        }
        let selectedSkill=selectSkill(skills);
        const response1=await axios.post(`${FAST_API_URL}/api/recommend-courses`,{text:selectedSkill});
        selectedSkill=selectSkill(desiredSkills);
        let response2=[];
        if(selectedSkill)response2=await axios.post(`${FAST_API_URL}/api/recommend-courses`,{text:selectedSkill});

        // const response1={
        //     "url": {
        //         "8454": "https://www.coursera.org/professional-certificates/mathworks-computer-vision-engineer",
        //         "3699": "https://www.coursera.org/learn/introduction-computer-vision-watson-opencv",
        //         "1859": "https://www.udemy.com/course/mastering-computer-vision-theory-projects-in-python/",
        //         "5955": "https://www.coursera.org/learn/intro-self-driving-cars",
        //         "7594": "https://www.coursera.org/learn/build-basic-generative-adversarial-networks-gans"
        //     },
        //     "course_title": {
        //         "8454": "MathWorks Computer Vision Engineer",
        //         "3699": "Introduction to Computer Vision and Image Processing",
        //         "1859": "Computer Vision in Python for Beginners (Theory & Projects)",
        //         "5955": "Introduction to Self-Driving Cars",
        //         "7594": "Build Basic Generative Adversarial Networks (GANs)"
        //     },
        //     "popularity_score": {
        //         "8454": 4.682264150943396,
        //         "3699": 4.296694850115296,
        //         "1859": 4.384879725085911,
        //         "5955": 4.698379869010686,
        //         "7594": 4.697651174412794
        //     }
        //   };
        res.status(200).send({recs:response1.data,drecs:response2.data});
    }catch(err){
        console.log("Error in recommendation controller", err.message);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}

export function getExplicitRecommendations(req, res) {
    try{
        const user=req.user;
        const explicitSkills=req.body.skills || [];
        const selectedSkill=selectSkill(explicitSkills);
        if(explicitSkills.length>0){
            const recommendations = [];
            recommendations.push(selectedSkill);
            // axios.post('http://localhost:5000/skills', {skills: explicitSkills}).then((response)=>{
            //     recommendations.push(response.data);
            // })
            res.send(recommendations);
        }else{
            res.status(404).send({ message: 'Please provide explicit skills' });
        }
    }catch(err){
        console.log("Error in recommendation controller", err.message);
        res.status(500).send({ message: 'Internal Server Error' });
    }
}
