# Database

## 1. users

| Key | Column            | Type            | Constraints    |
| --- | ----------------- | --------------- | -------------- |
| PK  | id                | BIGINT UNSIGNED | AUTO INCREMENT |
|     | name              | VARCHAR         |                |
|     | email             | VARCHAR         | UNIQUE         |
|     | email_verified_at | TIMESTAMP       | NULLABLE       |
|     | password          | VARCHAR         |                |
|     | remember_token    | VARCHAR(100)    | NULLABLE       |
|     | created_at        | TIMESTAMP       | NULLABLE       |
|     | updated_at        | TIMESTAMP       | NULLABLE       |

## 2. password_reset_tokens

| Key | Column     | Type      | Constraints |
| --- | ---------- | --------- | ----------- |
| PK  | email      | VARCHAR   |             |
|     | token      | VARCHAR   |             |
|     | created_at | TIMESTAMP | NULLABLE    |

## 3. sessions

| Key | Column        | Type            | Constraints |
| --- | ------------- | --------------- | ----------- |
| PK  | id            | VARCHAR         |             |
| FK  | user_id       | BIGINT UNSIGNED | NULLABLE    |
|     | ip_address    | VARCHAR(45)     | NULLABLE    |
|     | user_agent    | TEXT            | NULLABLE    |
|     | payload       | LONGTEXT        |             |
|     | last_activity | INTEGER         | INDEX       |

## 4. cache

| Key | Column     | Type       | Constraints |
| --- | ---------- | ---------- | ----------- |
| PK  | key        | VARCHAR    |             |
|     | value      | MEDIUMTEXT |             |
|     | expiration | INTEGER    |             |

## 5. cache_locks

| Key | Column     | Type    | Constraints |
| --- | ---------- | ------- | ----------- |
| PK  | key        | VARCHAR |             |
|     | owner      | VARCHAR |             |
|     | expiration | INTEGER |             |

## 6. jobs

| Key | Column       | Type             | Constraints    |
| --- | ------------ | ---------------- | -------------- |
| PK  | id           | BIGINT UNSIGNED  | AUTO INCREMENT |
|     | queue        | VARCHAR          | INDEX          |
|     | payload      | LONGTEXT         |                |
|     | attempts     | TINYINT UNSIGNED |                |
|     | reserved_at  | INTEGER UNSIGNED | NULLABLE       |
|     | available_at | INTEGER UNSIGNED |                |
|     | created_at   | INTEGER UNSIGNED |                |

## 7. job_batches

| Key | Column         | Type       | Constraints |
| --- | -------------- | ---------- | ----------- |
| PK  | id             | VARCHAR    |             |
|     | name           | VARCHAR    |             |
|     | total_jobs     | INTEGER    |             |
|     | pending_jobs   | INTEGER    |             |
|     | failed_jobs    | INTEGER    |             |
|     | failed_job_ids | LONGTEXT   |             |
|     | options        | MEDIUMTEXT | NULLABLE    |
|     | cancelled_at   | INTEGER    | NULLABLE    |
|     | created_at     | INTEGER    |             |
|     | finished_at    | INTEGER    | NULLABLE    |

## 8. failed_jobs

| Key | Column     | Type            | Constraints               |
| --- | ---------- | --------------- | ------------------------- |
| PK  | id         | BIGINT UNSIGNED | AUTO INCREMENT            |
|     | uuid       | VARCHAR         | UNIQUE                    |
|     | connection | TEXT            |                           |
|     | queue      | TEXT            |                           |
|     | payload    | LONGTEXT        |                           |
|     | exception  | LONGTEXT        |                           |
|     | failed_at  | TIMESTAMP       | DEFAULT CURRENT_TIMESTAMP |
