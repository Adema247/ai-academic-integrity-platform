# Testing and Evaluation Plan

## 1. Purpose

The purpose of this plan is to define how the platform will be tested and how its main components will be evaluated.

## 2. AI Text Classification Evaluation

The AI text classification component will classify English academic text into three categories:

- Human-written.
- AI-generated.
- AI-generated text modified by a humanizer.

The model will be evaluated using a labelled dataset with separate training, validation, and test sets.

The following metrics will be used:

- **Precision:** Measures how many predictions for a category are correct.
- **Recall:** Measures how many actual examples of a category are identified correctly.
- **F1-score:** Combines precision and recall.
- **Confusion matrix:** Shows correct and incorrect predictions for each category.

The test set will not be used for model training or parameter selection.

## 3. Contribution Assessment Evaluation

The contribution assessment component will be tested using available GitHub activity and Google Docs revision history.

The evaluation will check whether the system:

- Collects available data with appropriate authorization.
- Processes activity records correctly.
- Calculates contribution indicators consistently.
- Handles missing or incomplete data.
- Clearly explains the limitations of the indicators.

Contribution indicators will not be treated as a definitive measure of a student's effort or performance.

## 4. Functional Testing

The following scenarios will be tested:

- Submitting valid English academic text.
- Handling empty or invalid input.
- Displaying classification results.
- Handling unavailable external data.
- Displaying contribution indicators.
- Restricting access to protected functions.
- Generating and viewing reports.

## 5. API and Database Testing

API endpoints will be checked for valid requests, invalid requests, expected responses, and error handling. Database operations will be tested to verify data consistency and appropriate access controls.

## 6. Performance Testing

Response time and resource usage will be measured for representative text inputs. Performance results will be documented after implementation.

## 7. Reporting Results

The evaluation report will include the dataset description, experimental setup, classification metrics, functional test results, known limitations, and possible improvements.

No performance results will be claimed before the experiments have been conducted.
