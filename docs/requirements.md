SYSTEM REQUIREMENTS

1. Purpose

The purpose of the platform is to support academic integrity verification and personal contribution assessment in student projects.

2. Functional Requirements

FR-1: The system shall accept English academic text for analysis.

FR-2: The system shall classify text into three categories: human-written, AI-generated, and AI-generated text modified using a humanizer.

FR-3: The system shall display the predicted category and relevant evaluation information.

FR-4: The system shall collect available contribution data from GitHub activity and Google Docs revision history.

FR-5: The system shall calculate contribution indicators based on available activity data.

FR-6: The system shall provide a web interface for viewing analysis results.

FR-7: The system shall allow teachers to review analysis results.

FR-8: The system shall generate reports containing analysis results and relevant limitations.

3. Non-Functional Requirements

NFR-1 — Usability: The interface should be simple and easy to understand.

NFR-2 — Security: Access to protected functions and data should be controlled.

NFR-3 — Privacy: External data shall only be accessed with appropriate authorization.

NFR-4 — Reliability: The system should handle invalid input and display errors clearly.

NFR-5 — Performance: The system should return results within a reasonable time.

NFR-6 — Transparency: The system should explain that predictions are estimates and may be incorrect.

4. Limitations

The initial version will focus on English academic text. It will not include plagiarism detection, analysis of Russian or Kazakh text, detection of AI-generated source code, or automatic disciplinary decisions.

5. Evaluation

The text classification component will be evaluated using standard classification metrics, including precision, recall, F1-score, and a confusion matrix.

Contribution indicators will be assessed using available activity data, with the limitations of the assessment clearly documented.
