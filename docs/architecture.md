# System Architecture

## 1. Overview

The platform will use a modular web architecture. It will consist of a frontend, a backend API, a database, an AI text classification component, and external data collectors.

## 2. Main Components

### 2.1. Frontend

The frontend will be developed using React. It will allow users to submit academic text, view analysis results, review contribution indicators, and access reports.

### 2.2. Backend API

The backend will use Python and FastAPI. It will receive frontend requests, validate input, coordinate analysis, manage user access, and return results through REST endpoints using JSON.

### 2.3. AI Text Classification Component

This component will analyse English academic text and estimate whether it is human-written, AI-generated, or AI-generated text modified by a humanizer. The planned approach combines text representations from an English encoder with stylometric features and an XGBoost classifier.

### 2.4. Contribution Assessment Component

This component will process available GitHub activity and Google Docs revision history. It will calculate contribution indicators based on the available evidence. These indicators will not be treated as a complete or definitive measure of an individual's work.

### 2.5. Database

PostgreSQL will store structured application data, such as user information, analysis records, and contribution assessment results, subject to the final database design.

### 2.6. External Data Collectors

The platform will use authorized access to retrieve relevant GitHub activity and Google Docs revision information. The available data will depend on permissions and the APIs provided by these services.

## 3. System Workflow

1. A user submits English academic text through the frontend.
2. The backend validates the request.
3. The AI classification component analyses the text.
4. The backend returns the predicted category and relevant evaluation information.
5. For contribution assessment, authorized activity data is collected and processed.
6. The system displays results and limitations for human review.

## 4. Planned Technologies

- Frontend: React
- Backend: Python and FastAPI
- Database: PostgreSQL
- API communication: REST and JSON
- Machine learning: English text encoder, stylometric features, and XGBoost
- Deployment: Docker Compose

## 5. Security and Ethical Considerations

The platform will apply access controls and protect authorized user data. Predictions may be incorrect, and contribution indicators may be incomplete. The platform will support human review and will not make automatic disciplinary decisions.

## 6. Implementation Status

This document describes the planned architecture. The components and their interfaces will be refined during development and integration.
