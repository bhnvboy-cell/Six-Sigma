# Lean Six Sigma REST API

Base URL: `http://127.0.0.1:5000`

Stage 4 provides the Flask application foundation, database connectivity,
bcrypt authentication with server-side sessions, lesson/module progress, the
read-only resource catalog, saved project copies, local-storage migration,
server-scored belt exams, exam-based belt promotion, certificates, and
administrator curriculum, template, glossary, learner, and reporting routes.

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

Authentication uses secure, HTTP-only session cookies. API clients must send
cookies with `credentials: "include"`. `Authorization: Bearer` is reserved for a
future non-browser client and is not implemented yet.

## Health

| Method | Path | Auth | Request | Success response |
| --- | --- | --- | --- | --- |
| GET | `/` | None | None | `{"service":"Lean Six Sigma API","stage":3,"documentation":"backend/API.md","health":"/api/health"}` |
| GET | `/api` | None | None | `{"data":{"service":"Lean Six Sigma API","stage":3,"blueprints":["auth","progress","resources","exams","certificates","admin"]}}` |
| GET | `/api/health` | None | None | `{"data":{"status":"ok","service":"Lean Six Sigma API","stage":3}}` |
| GET | `/api/health/db` | None | None | `{"data":{"status":"ok","databaseName":"LeanSixSigmaTraining","serverTime":"2026-10-29T02:43:20"}}` |

## Authentication

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| POST | `/api/auth/register` | 2 | None | `{"username":"jordan.lee","email":"jordan@example.com","password":"long-password","firstName":"Jordan","lastName":"Lee"}` | `{"data":{"user":{"userId":1,"username":"jordan.lee","email":"jordan@example.com","firstName":"Jordan","lastName":"Lee","role":"learner","beltLevel":"white"}}}` |
| POST | `/api/auth/login` | 2 | None | `{"username":"jordan.lee","password":"long-password"}` | `{"data":{"user":{"userId":1,"username":"jordan.lee","role":"learner","beltLevel":"white"}}}` |
| POST | `/api/auth/logout` | 2 | Learner | None | HTTP `204 No Content` |
| GET | `/api/auth/me` | 2 | Learner | None | `{"data":{"user":{"userId":1,"username":"jordan.lee","role":"learner","beltLevel":"white"}}}` |

Register and login responses also set the HTTP-only session cookie with the name
`lss_session` (configurable). Passwords are validated (8-72 bytes) and hashed with
bcrypt at `BCRYPT_ROUNDS` cost. Roles are `learner` and `admin`; public
registration always creates a learner at `white`; any submitted `beltLevel` is
ignored. Belts advance only by passing official exams.

## Progress

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/progress` | 2 | Learner | None | `{"data":{"lessons":[{"lessonCode":"white-1","moduleId":1,"status":"Completed","score":null,"timeSpentMinutes":12,"completionDate":"2026-10-29T10:00:00"}],"summary":{"totalLessons":112,"completedLessons":1,"percentComplete":0.9},"moduleProgress":[{"moduleId":1,"totalLessons":4,"completedLessons":1,"completed":false}]}}` |
| PUT | `/api/progress/lessons/white-1` | 2 | Learner | `{"status":"Completed","timeSpentMinutes":12}` | `{"data":{"progress":{"lessonCode":"white-1","moduleId":1,"status":"Completed","timeSpentMinutes":12,"completionDate":"2026-10-29T10:00:00"}}}` |
| PUT | `/api/progress/modules/1` | 2 | Learner | `{"status":"Completed"}` | `{"data":{"moduleId":1,"status":"Completed","lessonCodes":["white-1"],"summary":{"totalLessons":112,"completedLessons":4,"percentComplete":3.6}}}` |
| GET | `/api/progress/belt` | 3 | Learner | None | `{"data":{"beltLevel":"yellow","beltName":"Yellow Belt","unlockedBelts":["white","yellow"],"nextBelt":"green"}}` |
| PUT | `/api/progress/belt` | 3 | Admin | `{"beltLevel":"yellow","userId":1}` | `{"data":{"beltLevel":"yellow","beltName":"Yellow Belt","unlockedBelts":["white","yellow"],"nextBelt":"green","userId":1}}` |
| POST | `/api/progress/migrate-local` | 2 | Learner | `{"beltLevel":"green","completedModules":[1,2],"lessons":["white-1"]}` | `{"data":{"importedLessons":9,"completedModules":2,"beltLevel":"white","summary":{"totalLessons":112,"completedLessons":9,"percentComplete":8.1}},"meta":{"requestedBeltLevel":"green","beltLevelIgnored":true}}` |

Setting a lesson to `Not Started` deletes its progress row. Migration imports
lesson progress and completed modules only; the submitted `beltLevel` is ignored
because belts are awarded by exams.

Belt changes are controlled by passed exams rather than direct client
assignment. `PUT /api/progress/belt` is limited to admins for corrections and
support; omit `userId` to update the admin's own account.

## Resources

The catalog endpoints and saved-copy endpoints are implemented in Stage 2. Every
copy stores a client-generated `clientId`, so the local-storage migration is
repeat-safe and a retried create returns the existing row.

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/resources` | 1 | None | None | `{"data":[{"resourceId":"project-charter","title":"Project Charter","dmaicPhase":"Define","minBelt":"white","icon":"fa-file-signature","estimatedMinutes":30,"description":"Authorize the project.","fields":[...],"example":{...},"sortOrder":10,"isActive":true}],"meta":{"count":12}}` |
| GET | `/api/resources/project-charter` | 1 | None | None | `{"data":{"resourceId":"project-charter","title":"Project Charter","dmaicPhase":"Define","minBelt":"white","fields":[...],"example":{...},"isActive":true}}` |
| GET | `/api/resources/copies` | 2 | Learner | None | `{"data":[{"userResourceId":41,"clientId":"copy-1","resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"In Progress","data":{},"createdAt":"2026-10-29T10:00:00","updatedAt":"2026-10-29T10:00:00"}],"meta":{"count":1}}` |
| POST | `/api/resources/copies` | 2 | Learner | `{"clientId":"copy-1","resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"Draft","data":{}}` | HTTP `201` with `{"data":{"userResourceId":41,"clientId":"copy-1","resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"Draft","data":{},"createdAt":"2026-10-29T10:00:00","updatedAt":"2026-10-29T10:00:00"}}`; a repeated `clientId` returns the existing copy with HTTP `200` and `meta.created` set to `false` |
| GET | `/api/resources/copies/41` | 2 | Learner | None | `{"data":{"userResourceId":41,"resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"In Progress","data":{},"createdAt":"2026-10-29T10:00:00","updatedAt":"2026-10-29T10:10:00"}}` |
| PUT | `/api/resources/copies/41` | 2 | Learner | `{"copyName":"Line 2 FMEA v2","status":"Complete","data":{"failures":[]}}` | `{"data":{"userResourceId":41,"copyName":"Line 2 FMEA v2","status":"Complete","data":{"failures":[]},"updatedAt":"2026-10-29T10:20:00"}}` |
| DELETE | `/api/resources/copies/41` | 2 | Learner | None | HTTP `204 No Content` |
| POST | `/api/resources/migrate-local` | 2 | Learner | `{"resources":[{"clientId":"copy-1","resourceId":"fmea","copyName":"Line 2 FMEA","projectName":"Fill Variation","status":"Draft","data":{}}]}` | `{"data":{"imported":[{"copy":{...},"created":true,"localId":"copy-1"}],"skipped":[],"importedCount":1,"existingCount":0}}` |

Resource detail field definitions and examples are JSON objects, not escaped
strings. Unknown or inactive template IDs return HTTP `404`. The `ClientId`
column and its unique index are added by
`sql/migrations/002_user_resource_client_ids.sql`.

## Exams

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/exams` | 3 | Learner | None | `{"data":[{"belt":"white","title":"White Belt Exam","questionCount":25,"passPercent":80,"timeLimitMinutes":45,"unlocked":true,"bestScore":84,"passed":true,"attemptCount":2}],"meta":{"count":5}}` |
| GET | `/api/exams/white` | 3 | Learner | None | `{"data":{"belt":"white","title":"White Belt Exam","questionCount":25,"passPercent":80,"timeLimitMinutes":45,"questions":[{"questionId":"white-1","prompt":"Which phase defines the problem?","options":[{"key":"A","text":"Define"},{"key":"B","text":"Control"}]}]}}` |
| GET | `/api/exams/white/attempts` | 3 | Learner | None | `{"data":[{"examAttemptId":12,"attemptNumber":2,"questionCount":25,"correctCount":21,"score":84,"passingScore":80,"passed":true,"startedAt":"2026-10-29T10:00:00","completedAt":"2026-10-29T10:30:00"}],"meta":{"count":1}}` |
| POST | `/api/exams/white/attempts` | 3 | Learner | `{"answers":{"white-1":"A","white-2":"C"},"startedAt":"2026-10-29T10:00:00"}` | HTTP `201` with `{"data":{"examAttemptId":12,"attemptNumber":2,"questionCount":25,"answeredCount":25,"correctCount":21,"score":84,"passingScore":80,"passed":true,"promoted":true,"userBeltLevel":"yellow","startedAt":"2026-10-29T10:00:00","completedAt":"2026-10-29T10:30:00","results":[{"questionId":"white-1","selected":"A","correctOption":"A","isCorrect":true,"explanation":"..."}]}}` |

Exam delivery responses never include correct answers. Scoring happens on the
server, and the submission response includes the per-question result and
explanation so learners can review. The pass mark is controlled by
`EXAM_PASS_PERCENT` and defaults to `80`, matching the curriculum.

An exam is unlocked when its belt rank is less than or equal to the learner's
current belt. Passing the exam for the current belt promotes the learner to the
next belt (White to Yellow, Yellow to Green, and so on); lower belts can be
retaken without changing the current belt. The exam bank is read from
`data/quizzes.json`; regenerate the browser copy with
`node scripts/build-quizzes.js` after editing it.

## Certificates

| Method | Path | Stage | Auth | Request | Success response |
| --- | --- | --- | --- | --- | --- |
| GET | `/api/certificates` | 3 | Learner | None | `{"data":[{"certificateId":7,"beltLevel":"white","examAttemptId":12,"learnerName":"Jordan Lee","verificationId":"a9f1c8d2e4b7","certificateNumber":"LSS-WB-2026-A9F1C8","issuedAt":"2026-10-29T10:31:00","expiresAt":null,"isRevoked":false}],"meta":{"count":1}}` |
| POST | `/api/certificates/white` | 3 | Learner | None | HTTP `201` with `{"data":{"certificateId":7,"beltLevel":"white","examAttemptId":12,"learnerName":"Jordan Lee","verificationId":"a9f1c8d2e4b7","certificateNumber":"LSS-WB-2026-A9F1C8","issuedAt":"2026-10-29T10:31:00","expiresAt":null,"isRevoked":false},"meta":{"created":true}}`; a repeated request for an active certificate returns the existing row with HTTP `200` and `meta.created:false` |
| GET | `/api/certificates/verify/a9f1c8d2e4b7` | 3 | None | None | `{"data":{"valid":true,"learnerName":"Jordan Lee","beltLevel":"white","certificateNumber":"LSS-WB-2026-A9F1C8","verificationId":"a9f1c8d2e4b7","issuedAt":"2026-10-29T10:31:00","isRevoked":false}}` |

Certificate issuance requires a passed exam attempt for that belt. The
verification route is public and returns no email, password, or account data.
Revoked certificates remain verifiable but report `valid:false`. Each active
certificate has a unique `verificationId` and a human-readable
`certificateNumber`.

## Admin

All admin routes require an authenticated user with the `admin` role.

| Method | Path | Request | Success response |
| --- | --- | --- | --- |
| GET | `/api/admin/lessons` | None | `{"data":[{"lessonCode":"W1.1","moduleId":1,"lessonOrder":1,"title":"History of Six Sigma and Lean","beltLevel":"White Belt"}]}` |
| POST | `/api/admin/lessons` | `{"lessonCode":"W1.6","moduleId":1,"lessonOrder":6,"title":"New lesson","objective":"Explain the topic."}` | HTTP `201` with `{"data":{"lessonCode":"W1.6","moduleId":1,"lessonOrder":6,"title":"New lesson"}}` |
| PUT | `/api/admin/lessons/W1.6` | `{"title":"Updated lesson","objective":"Explain the updated topic."}` | `{"data":{"lessonCode":"W1.6","title":"Updated lesson","objective":"Explain the updated topic."}}` |
| GET | `/api/admin/questions` | None | `{"data":[{"questionId":1,"quizId":1,"questionText":"Which phase defines the problem?","options":{"A":"Define","B":"Control"},"correctAnswer":"A"}]}` |
| POST | `/api/admin/questions` | `{"quizId":1,"questionText":"What is a defect?","optionA":"A failure to meet a requirement","optionB":"Any customer request","optionC":"A project delay","optionD":"A team role","correctAnswer":"A","explanation":"A defect is a failure to meet a requirement."}` | HTTP `201` with `{"data":{"questionId":29,"quizId":1,"questionText":"What is a defect?","correctAnswer":"A"}}` |
| PUT | `/api/admin/questions/29` | `{"questionText":"What is a defect?","correctAnswer":"A","explanation":"Updated explanation."}` | `{"data":{"questionId":29,"questionText":"What is a defect?","correctAnswer":"A","explanation":"Updated explanation."}}` |
| GET | `/api/admin/templates` | None | `{"data":[{"resourceId":"project-charter","title":"Project Charter","dmaicPhase":"Define","minBelt":"white","isActive":true}]}` |
| POST | `/api/admin/templates` | `{"resourceId":"stakeholder-analysis","title":"Stakeholder Analysis","dmaicPhase":"Define","minBelt":"green","fields":[],"example":{}}` | HTTP `201` with `{"data":{"resourceId":"stakeholder-analysis","title":"Stakeholder Analysis"}}` |
| PUT | `/api/admin/templates/stakeholder-analysis` | `{"title":"Stakeholder Analysis and Engagement","minBelt":"green","fields":[],"example":{}}` | `{"data":{"resourceId":"stakeholder-analysis","title":"Stakeholder Analysis and Engagement"}}` |
| GET | `/api/admin/glossary` | None | `{"data":[{"termId":1,"term":"DMAIC","definition":"Define, Measure, Analyze, Improve, Control."}]}` |
| POST | `/api/admin/glossary` | `{"term":"Kano model","definition":"Classifies features as basic, performance, or delighter."}` | HTTP `201` with `{"data":{"termId":24,"term":"Kano model","definition":"Classifies features as basic, performance, or delighter."}}` |
| PUT | `/api/admin/glossary/24` | `{"term":"Kano model","definition":"Updated definition."}` | `{"data":{"termId":24,"term":"Kano model","definition":"Updated definition."}}` |
| POST | `/api/admin/import-curriculum` | `{"curriculum":{"belts":[],"modules":[]},"mode":"validate"}` | `{"data":{"valid":true,"belts":5,"modules":26,"lessons":112,"errors":[]}}` |
| GET | `/api/admin/learners` | None | `{"data":[{"userId":1,"username":"jordan.lee","email":"jordan@example.com","beltLevel":"yellow","completedLessons":35,"certificates":1,"lastLogin":"2026-10-29T10:29:00","lastLoginIp":"192.168.1.10"}]}` |
| GET | `/api/admin/exam-results` | None | `{"data":[{"examAttemptId":12,"username":"jordan.lee","beltLevel":"white","score":84,"passingScore":80,"passed":true,"completedAt":"2026-10-29T10:30:00"}]}` |
| GET | `/api/admin/login-audit?limit=500` | None | `{"data":[{"loginAuditId":1,"userId":1,"username":"jordan.lee","ipAddress":"192.168.1.10","success":true,"attemptedAt":"2026-10-29T10:29:00"}]}` |
| GET | `/api/admin/export/learners.csv` | None | `Content-Type: text/csv` with columns `UserId,Username,Email,BeltLevel,CompletedLessons,Certificates,LastLogin,LastLoginIp` |
| GET | `/api/admin/export/exam-results.csv` | None | `Content-Type: text/csv` with every exam attempt and score |
| GET | `/api/admin/export/login-audit.csv?limit=5000` | None | `Content-Type: text/csv` with every sign-in attempt and IP address |

`PUT` admin routes support partial updates by omitting fields. Lesson codes,
resource IDs, and glossary term IDs are immutable; `PUT /api/admin/lessons/<code>`
identifies the lesson by its `lessonCode`.

`POST /api/admin/import-curriculum` accepts the `data/curriculum.json` structure.
Use `"mode":"validate"` to validate without writing, or `"mode":"apply"` to
transactionally upsert modules and lessons by module ID and lesson code. Apply
does not delete lessons that are absent from the import, so existing learner
progress is preserved.

Each CSV export sends `Content-Disposition: attachment` with a descriptive
filename. Glossary terms use the `GlossaryTerms` table created by
`sql/migrations/003_admin_glossary.sql`.

Every `/api/auth/login` attempt is written to `LoginAudit` with the username,
client IP address, user agent, timestamp, and success flag. When many learners
share one IP address, use the username to identify the individual; the IP only
shows the shared network. `TRUST_PROXY_HEADERS=yes` makes the API read the first
`X-Forwarded-For` address instead of the socket address. The table is created by
`sql/migrations/004_login_audit.sql`.

## Status Codes

| Status | Meaning |
| --- | --- |
| `200` | Successful read or update, including a repeated idempotent create |
| `201` | Created |
| `204` | Deleted or logged out with no response body |
| `400` | Invalid JSON or input validation failure |
| `401` | Missing or expired session |
| `403` | Authenticated but not allowed, including locked belts |
| `404` | Unknown resource, copy, certificate, lesson, quiz, template, term, learner, or route |
| `409` | Duplicate username, email, lesson code, resource ID, or glossary term |
| `422` | Exam data cannot be scored |
| `503` | SQL Server or ODBC driver unavailable |

## Local Checks

```powershell
Invoke-RestMethod http://127.0.0.1:5000/api/health
Invoke-RestMethod http://127.0.0.1:5000/api/health/db
Invoke-RestMethod http://127.0.0.1:5000/api/resources

$body = @{
    username = "jordan.lee"
    email = "jordan@example.com"
    password = "long-password"
    firstName = "Jordan"
} | ConvertTo-Json
Invoke-RestMethod http://127.0.0.1:5000/api/auth/register -Method Post -ContentType "application/json" -Body $body -SessionVariable session
Invoke-RestMethod http://127.0.0.1:5000/api/auth/me -WebSession $session
Invoke-RestMethod http://127.0.0.1:5000/api/progress -WebSession $session
Invoke-RestMethod http://127.0.0.1:5000/api/exams -WebSession $session
Invoke-RestMethod http://127.0.0.1:5000/api/exams/white -WebSession $session
```

The session cookie is HTTP-only. Browser clients must send requests with
`credentials: "include"`; `html/js/api-client.js` already does this.
