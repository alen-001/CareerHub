function selectSkill(skills){
    if(skills.length>0)return skills[Math.floor(Math.random()*skills.length)];
    else return null;
}
export function getRecommendations(req, res) {
    try{
        const user=req.user;
        const skills = user.skills;
        const desiredSkills = user.desiredSkills;
        if(skills.length==0){
            res.status(404).send({ message: 'No Skills Found' });
        }
        let selectedSkill=selectSkill(skills);
        const recommendations1 = [];
        recommendations1.push(selectedSkill);
        const recommendations2 = [];
        selectedSkill=selectSkill(desiredSkills);
        if(selectedSkill!=null)recommendations2.push(selectedSkill);
        //Based on your desired skills
        // axios.post('http://localhost:5000/skills', {skill: selectedSkill}).then((response)=>{
        //     recommendations1.push(response.data);
        // })
        // selectedSkills=selectSkill(desiredSkills);
        // axios.post('http://localhost:5000/skills', {skill: selectedSkills}).then((response)=>{
        //     recommendations2.push(response.data);
        // })  
        res.status(200).send({recommendations1,recommendations2});
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
