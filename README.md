AI-BASED PLATFORM FOR ACADEMIC INTEGRITY VERIFICATION AND PERSONAL CONTRIBUTION ASSESSMENT

1. Project Overview

This project aims to develop a web platform that supports academic integrity verification and personal contribution assessment in student projects.

The platform will analyse English academic text to estimate whether it is human-written, AI-generated, or AI-generated text modified using a humanizer. It will also provide contribution indicators based on available GitHub activity and Google Docs revision history.

The system will serve as a decision-support tool, providing explanations and limitations rather than making automatic disciplinary decisions.

2. Problem Statement

AI-generated text and uneven participation in group projects can make academic assessment more difficult. This project aims to provide transparent indicators that help teachers review academic work and understand individual contributions.

AI detection results are estimates and should not be treated as definitive proof of academic misconduct.

3. Main Objectives

- Develop a three-class academic text classification component.
- Estimate personal contributions using available project activity data.
- Provide understandable results and explanations.
- Support teacher review through a web interface.
- Evaluate system performance and document its limitations.

4. Project Scope

Included:
- English academic text analysis.
- Classification of human-written, AI-generated, and humanizer-modified AI text.
- Contribution indicators based on GitHub activity and Google Docs revision history.
- Explainable reports and a teacher review workflow.
- Testing and evaluation of the proposed approach.

Out of scope:
- Plagiarism detection.
- Russian and Kazakh text analysis.
- AI detection in source code.
- Biometrics and online proctoring.
- Automatic disciplinary decisions.

5. Planned Technologies

- Backend: Python, FastAPI
- Database: PostgreSQL
- Frontend: React
- Communication: REST API, JSON
- Machine learning: English text encoder, stylometric features, XGBoost classifier
- Deployment: Docker Compose

These technologies are planned for the project. Implementation and integration will be completed progressively.

6. Team and Responsibilities

Alina Irsymova (SE-2408)

- Backend API and database.
- Authentication and user roles.
- GitHub and Google Docs data collection.
- Report generation, deployment, and privacy.

Darkhan Ademi (SE-2407)

- AI text detection and model evaluation.
- Personal contribution indicators and inference service.
- Web interface, visualisation, and review workflow.

Supervisor: Tutkyshbayeva Shyryn Sarybayevna

Both team members will contribute to requirements, literature review, integration, testing, and project evaluation.

7. Project Management

Tasks and progress are tracked in YouTrack. Development work will be documented through meaningful commits, task-linked branches, and code reviews where applicable.

GitHub repository:
https://github.com/Adema247/ai-academic-integrity-platform

YouTrack board:
https://ademi247.youtrack.cloud/projects/AIP/agiles/204-1/current

8. Current Status

The project is currently in the initial planning and design stage. The project scope, requirements, technology stack, GitHub repository, and YouTrack task board have been prepared.

System architecture, UI prototypes, implementation, and testing will be developed progressively.

9. Ethical Considerations and Limitations

The platform will provide decision-support information rather than final judgments about academic misconduct. Detection results may contain false positives and false negatives.

Contribution indicators may be incomplete when external activity data is unavailable. Results must be interpreted by a human reviewer and considered alongside other evidence.

10. Setup and Usage

The application is currently in the planning and initial design stage. Installation and execution instructions will be added once the application code and configuration are available.
