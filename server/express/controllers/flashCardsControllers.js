// async function  GenerateFlashcards(req,res){
//     try{
//         const {text}=req.body;
//         if(!text){
//             res.status(404).send({ message: 'Please provide some text' });
//             return;
//         }
//         const response=await axios.post(`${FAST_API_URL}/api/flashcards`,{text:text});
//         res.status(200).send({flashcards:response.data});
//     }catch(err){
//         console.log("Error in flashcards controller", err.message);
//         res.status(500).send({ message: 'Internal Server Error' });
//     }
// }