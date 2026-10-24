SYSTEM ARCHITECTURE

1. Overview

The platform will use a modular web architecture consisting of a frontend, backend API, database, AI text classification component, and external data collectors.

2. Main Components

2.1. Frontend

The frontend will be developed using React. Users will be able to submit academic text, view analysis results, review contribution indicators, and access reports.

2.2. Backend API

The backend will use Python and FastAPI. It will handle requests from the frontend, validate input, coordinate analysis, manage user access, and return results through REST API endpoints using JSON.

2.3. AI Text Classification Component

This component will analyse English academic text and classify it as human-written, AI-generated, or AI-generated text modified using a humanizer.

The planned approach combines text representations from an English encoder with stylometric features and an XGBoost classifier.

2.4. Contribution Assessment Component

This component will analyse available GitHub activity and Google Docs revision history to calculate contribution indicators based on the collected data.

These indicators will not be considered a complete or definitive measure of an individual's work.

2.5. Database

PostgreSQL will store structured application data, including user information, analysis records, and contribution assessment results. The final database structure will be defined during development.

2.6. External Data Collectors

The platform will retrieve relevant GitHub activity and Google Docs revision information through authorized access. The collected data will depend on user permissions and the APIs available from these services.

3. System Workflow

1. The user submits English academic text through the frontend.
2. The backend validates the request.
3. The AI classification component analyses the text.
4. The backend returns the predicted category and relevant evaluation information.
5. For contribution assessment, the system collects authorized activity data from external services.
6. The collected data is processed to calculate contribution indicators.
7. The system displays the results and their limitations for human review.

4. Planned Technologies

- Frontend: React
- Backend: Python, FastAPI
- Database: PostgreSQL
- API communication: REST, JSON
- Machine learning: English text encoder, stylometric features, XGBoost
- Deployment: Docker Compose

5. Security and Ethical Considerations

The platform will use access controls and protect user data obtained through authorized access.

AI predictions may be inaccurate, and contribution indicators may not reflect the full extent of an individual's work. Therefore, the results will support human review and will not be used to make automatic disciplinary decisions.

6. Implementation Status

This document describes the planned system architecture. The components and their interfaces will be refined during development and integration.
