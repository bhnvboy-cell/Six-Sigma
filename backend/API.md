# Lean Six Sigma REST API

Base URL: `http://127.0.0.1:5000`

Stage 1 provides the Flask application foundation, database connectivity, the
read-only resource catalog, and route contracts for later stages. Routes marked
with a later stage currently return HTTP `501` and the standard error envelope.

## Response Envelopes

Successful response:

```json
{"data": {"status": "ok"}}
```

List response with metadata:

```json
{"data": [], "meta": {"count": 0}}
```

Error response:

```json
{"error": {"code": "RESOURCE_NOT_FOUND", "message": "Resource template not found."}}
```

Implementing-stage response from a scaffolded route:

```json
{"error": {"code": "NOT_IMPLEMENTED", "message": "Login is added in Stage 2.", "details": {"plannedStage": 2}}}
```

Authentication will use secure, HTTP-only session cookies. API clients must send
cookies with `credentials: "include"`. `Authorization: Bearer` is reserved for a
future non-browser client and is not implemented yet.

## Health

| Method | Path | Auth | Request | Success response |
| --- | --- | --- | --- | --- |
| GET | `/` | None | None | `{"service":"Lean Six Sigma API","stage":1,"documentation":"backend/API.md","health":"/api/health"}` |
| GET | `/api` | None | None | `{"data":{"service":"Lean Six Sigma API","stage":1,"blueprints":["auth","progress","resources","exams","certificates","admin"]}}` |
| GET | `/api/health` | None | None | `{"data":{"status":"ok","service":"Lean Six Sigma API","stage":1}}` |
| GET | `/api/health/db` | None | None | `{"data":{"status":"ok","databaseName":"LeanSixSigmaTraining","serverTime":"2026-10-29T02:43:20"}}` |

## Authentication

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| POST | `/api/auth/register` | 2 | None | `{"username":"jordan.lee","email":"jordan@example.com","password":"long-password","firstName":"Jordan","lastName":"Lee"}` | `{"data":{"user":{"userId":1,"username":"jordan.lee","email":"jordan@example.com","firstName":"Jordan","lastName":"Lee","role":"learner","beltLevel":"white"}}}` |
| POST | `/api/auth/login` | 2 | None | `{"username":"jordan.lee","password":"long-password"}` | `{"data":{"user":{"userId":1,"username":"jordan.lee","role":"learner","beltLevel":"white"}}}` |
| POST | `/api/auth/logout` | 2 | Learner | None | HTTP `204 No Content` |
| GET | `/api/auth/me` | 2 | Learner | None | `{"data":{"user":{"userId":1,"username":"jordan.lee","role":"learner","beltLevel":"white"}}}` |

Register and login responses will also set the secure session cookie. Roles are
`learner` and `admin`; public registration always creates a learner.

## Progress

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/progress` | 2 | Learner | None | `{"data":{"lessons":[{"lessonCode":"white-1","moduleId":1,"status":"Completed","score":null,"timeSpentMinutes":12,"completionDate":"2026-10-29T10:00:00"}],"summary":{"completed":1,"total":111,"percent":0.9}}}` |
| PUT | `/api/progress/lessons/white-1` | 2 | Learner | `{"status":"Completed","timeSpentMinutes":12}` | `{"data":{"lessonCode":"white-1","moduleId":1,"status":"Completed","timeSpentMinutes":12,"completionDate":"2026-10-29T10:00:00"}}` |
| GET | `/api/progress/belt` | 2 | Learner | None | `{"data":{"beltLevel":"yellow","unlockedBelts":["white","yellow"],"nextBelt":"green"}}` |
| PUT | `/api/progress/belt` | 3 | Admin | `{"beltLevel":"yellow"}` | `{"data":{"beltLevel":"yellow","unlockedBelts":["white","yellow"],"nextBelt":"green"}}` |

From Stage 3 onward, learner belt changes are controlled by passed exams rather
than direct client assignment. The `PUT` route remains available only to admins
for corrections and support.

## Resources

The catalog endpoints are implemented in Stage 1. Saved-copy endpoints are added
in Stage 4, and the local-storage migration endpoint is added in Stage 2.

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/resources` | 1 | None | None | `{"data":[{"resourceId":"project-charter","title":"Project Charter","dmaicPhase":"Define","minBelt":"white","icon":"fa-file-signature","estimatedMinutes":30,"description":"Authorize the project.","fields":[...],"example":{...},"sortOrder":10,"isActive":true}],"meta":{"count":12}}` |
| GET | `/api/resources/project-charter` | 1 | None | None | `{"data":{"resourceId":"project-charter","title":"Project Charter","dmaicPhase":"Define","minBelt":"white","fields":[...],"example":{...},"isActive":true}}` |
| GET | `/api/resources/copies` | 4 | Learner | None | `{"data":[{"userResourceId":41,"resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"In Progress","data":{},"createdAt":"2026-10-29T10:00:00","updatedAt":"2026-10-29T10:00:00"}],"meta":{"count":1}}` |
| POST | `/api/resources/copies` | 4 | Learner | `{"resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"Draft","data":{}}` | HTTP `201` with `{"data":{"userResourceId":41,"resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"Draft","data":{},"createdAt":"2026-10-29T10:00:00","updatedAt":"2026-10-29T10:00:00"}}` |
| GET | `/api/resources/copies/41` | 4 | Learner | None | `{"data":{"userResourceId":41,"resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"In Progress","data":{},"createdAt":"2026-10-29T10:00:00","updatedAt":"2026-10-29T10:10:00"}}` |
| PUT | `/api/resources/copies/41` | 4 | Learner | `{"copyName":"Line 2 FMEA v2","status":"Complete","data":{"failures":[]}}` | `{"data":{"userResourceId":41,"copyName":"Line 2 FMEA v2","status":"Complete","data":{"failures":[]},"updatedAt":"2026-10-29T10:20:00"}}` |
| DELETE | `/api/resources/copies/41` | 4 | Learner | None | HTTP `204 No Content` |
| POST | `/api/resources/migrate-local` | 2 | Learner | `{"beltLevel":"green","resources":[{"localId":"copy-1","resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"Draft","data":{}}]}` | `{"data":{"imported":1,"skipped":0,"beltLevel":"green"}}` |

Resource detail field definitions and examples are JSON objects, not escaped
strings. Unknown or inactive template IDs return HTTP `404`.

## Exams

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/exams` | 3 | Learner | None | `{"data":[{"belt":"white","title":"White Belt Exam","questionCount":25,"passPercent":70,"unlocked":true,"bestScore":84,"passed":true}]}` |
| GET | `/api/exams/white` | 3 | Learner | None | `{"data":{"belt":"white","title":"White Belt Exam","passPercent":70,"timeLimitMinutes":45,"questions":[{"questionId":"white-1","prompt":"Which phase defines the problem?","options":[{"key":"A","text":"Define"},{"key":"B","text":"Control"}]}]}}` |
| GET | `/api/exams/white/attempts` | 3 | Learner | None | `{"data":[{"examAttemptId":12,"attemptNumber":2,"score":84,"passingScore":70,"passed":true,"completedAt":"2026-10-29T10:30:00"}]}` |
| POST | `/api/exams/white/attempts` | 3 | Learner | `{"answers":{"white-1":"A","white-2":"C"},"startedAt":"2026-10-29T10:00:00"}` | HTTP `201` with `{"data":{"examAttemptId":12,"attemptNumber":2,"questionCount":25,"correctCount":21,"score":84,"passingScore":70,"passed":true,"completedAt":"2026-10-29T10:30:00"}}` |

Exam responses never include correct answers. Answers are scored on the server
using the existing quiz bank. The pass mark is controlled by
`EXAM_PASS_PERCENT` and defaults to `70`.

## Certificates

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/certificates` | 3 | Learner | None | `{"data":[{"certificateId":7,"beltLevel":"white","learnerName":"Jordan Lee","verificationId":"a9f1c8d2e4b7","issuedAt":"2026-10-29T10:31:00","isRevoked":false}]}` |
| POST | `/api/certificates/white` | 3 | Learner | None | HTTP `201` with `{"data":{"certificateId":7,"beltLevel":"white","learnerName":"Jordan Lee","verificationId":"a9f1c8d2e4b7","issuedAt":"2026-10-29T10:31:00"}}` |
| GET | `/api/certificates/verify/a9f1c8d2e4b7` | 3 | None | None | `{"data":{"valid":true,"learnerName":"Jordan Lee","beltLevel":"white","issuedAt":"2026-10-29T10:31:00","isRevoked":false}}` |

Certificate issuance requires a passed exam attempt for that belt. The
verification route is public and returns no email, password, or account data.

## Admin

All admin routes require an authenticated user with the `admin` role.

| Method | Path | Request | Success response |
| --- | --- | --- | --- |
| GET | `/api/admin/lessons` | None | `{"data":[{"lessonCode":"white-1","moduleId":1,"title":"Quality Foundations","beltLevel":"White Belt"}]}` |
| POST | `/api/admin/lessons` | `{"lessonCode":"white-10","moduleId":1,"lessonOrder":10,"title":"New lesson","objective":"Explain the topic."}` | HTTP `201` with `{"data":{"lessonCode":"white-10","moduleId":1,"lessonOrder":10,"title":"New lesson"}}` |
| PUT | `/api/admin/lessons/white-10` | `{"title":"Updated lesson","objective":"Explain the updated topic."}` | `{"data":{"lessonCode":"white-10","title":"Updated lesson","objective":"Explain the updated topic."}}` |
| GET | `/api/admin/questions` | None | `{"data":[{"questionId":1,"quizId":1,"questionText":"Which phase defines the problem?","options":{"A":"Define","B":"Control"},"correctAnswer":"A"}]}` |
| POST | `/api/admin/questions` | `{"quizId":1,"questionText":"What is a defect?","optionA":"A failure to meet a requirement","optionB":"Any customer request","optionC":"A project delay","optionD":"A team role","correctAnswer":"A","explanation":"A defect is a failure to meet a requirement."}` | HTTP `201` with `{"data":{"questionId":29,"quizId":1,"questionText":"What is a defect?","correctAnswer":"A"}}` |
| PUT | `/api/admin/questions/29` | `{"questionText":"What is a defect?","correctAnswer":"A","explanation":"Updated explanation."}` | `{"data":{"questionId":29,"questionText":"What is a defect?","correctAnswer":"A","explanation":"Updated explanation."}}` |
| GET | `/api/admin/templates` | None | `{"data":[{"resourceId":"project-charter","title":"Project Charter","dmaicPhase":"Define","minBelt":"white","isActive":true}]}` |
| POST | `/api/admin/templates` | `{"resourceId":"stakeholder-analysis","title":"Stakeholder Analysis","dmaicPhase":"Define","minBelt":"green","fields":[],"example":{}}` | HTTP `201` with `{"data":{"resourceId":"stakeholder-analysis","title":"Stakeholder Analysis"}}` |
| PUT | `/api/admin/templates/stakeholder-analysis` | `{"title":"Stakeholder Analysis and Engagement","minBelt":"green","fields":[],"example":{}}` | `{"data":{"resourceId":"stakeholder-analysis","title":"Stakeholder Analysis and Engagement"}}` |
| GET | `/api/admin/glossary` | None | `{"data":[{"termId":1,"term":"DMAIC","definition":"Define, Measure, Analyze, Improve, Control."}]}` |
| POST | `/api/admin/glossary` | `{"term":"Kano model","definition":"Classifies features as basic, performance, or delighter."}` | HTTP `201` with `{"data":{"termId":24,"term":"Kano model","definition":"Classifies features as basic, performance, or delighter."}}` |
| PUT | `/api/admin/glossary/24` | `{"term":"Kano model","definition":"Updated definition."}` | `{"data":{"termId":24,"term":"Kano model","definition":"Updated definition."}}` |
| POST | `/api/admin/import-curriculum` | `{"curriculum":{"belts":[],"modules":[]},"mode":"validate"}` | `{"data":{"valid":true,"belts":5,"modules":26,"lessons":111,"errors":[]}}` |
| GET | `/api/admin/learners` | None | `{"data":[{"userId":1,"username":"jordan.lee","email":"jordan@example.com","beltLevel":"yellow","completedLessons":35,"certificates":1}]}` |
| GET | `/api/admin/exam-results` | None | `{"data":[{"examAttemptId":12,"username":"jordan.lee","beltLevel":"white","score":84,"passingScore":70,"passed":true,"completedAt":"2026-10-29T10:30:00"}]}` |
| GET | `/api/admin/export/learners.csv` | None | `Content-Type: text/csv` with columns `UserId,Username,Email,BeltLevel,CompletedLessons,Certificates` |

## Status Codes

| Status | Meaning |
| --- | --- |
| `200` | Successful read or update |
| `201` | Created |
| `204` | Deleted or logged out with no response body |
| `400` | Invalid JSON or input validation failure |
| `401` | Missing or expired session |
| `403` | Authenticated but not allowed, including locked belts |
| `404` | Unknown resource, copy, certificate, or route |
| `409` | Duplicate username, email, or resource ID |
| `422` | Exam or curriculum data cannot be scored/imported |
| `501` | Route scaffolded for a later stage |
| `503` | SQL Server or ODBC driver unavailable |

## Local Checks

```powershell
Invoke-RestMethod http://127.0.0.1:5000/api/health
Invoke-RestMethod http://127.0.0.1:5000/api/health/db
Invoke-RestMethod http://127.0.0.1:5000/api/resources
```
