# Career Shepherds: Your Personalized AI counsellor

### To run the project locally run the following commands in the root directory
```[bash]
cd frontend
npm run dev
cd ..
cd /server/express
npm run dev
```
## Techstack and System Design
![Flow Chart Whiteboard in Red Blue Basic Style](https://github.com/user-attachments/assets/5812d4d1-392a-4865-aca6-0d0dcb998c0b)



### 1. **Frontend (User Interface)**

- Framework: React.js (MERN stack)
- Features:
    - User authentication and profile management.
    - Dashboard for personalized career guidance and skill recommendations.
    - Chatbot for real-time interaction.
    - Visualization of career pathways and skill progressions.

### 2. **Backend (API Services)**

- Framework: Node.js (MERN stack)
- Services:
    - User data management.
    - Integration with FastAPI/Flask for AI model endpoints.
    - Middleware for data processing and routing.

### 3. **AI Models**

- Framework: FastAPI/Flask
- Models:
    - **Skill Assessment Model:** Validates and assesses skills from resumes, certifications, or projects.
    - **Career Recommendation Model:** Suggests career paths based on user profiles and market trends.
    - **Chatbot Model:** Provides human-like interaction with empathy and emotional intelligence (e.g., GPT-based).
    - **Bias Mitigation Model:** Identifies and reduces biases in recommendations.
    - **Market Trends Analysis Model:** Analyzes real-time market data for career transitions.

### 4. **Database**

- Database: PostgreSQL and MongoDb
- Features:
    - User profiles and preferences.
    - Historical interaction logs.
    - Market trend datasets.
    - Feedback and analytics data.

### 5. **AI and Data Processing Libraries**

- **Python Libraries:** PyTorch, TensorFlow, Transformers, Pandas, NumPy, scikit-learn, NLTK, spaCy.
- **APIs for Market Data:** LinkedIn, Glassdoor, Indeed (if available).
