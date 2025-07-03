1. users

    | COLUMN             |     |
    | ------------------ | --- |
    | id                 |     |
    | name               |     |
    | email              |     |
    | ?email_verified_at |     |
    | password           |     |
    | ?remember_token    |     |
    | created_at         |     |
    | updated_at         |     |

1. password_reset_tokens

    | COLUMN      |     |
    | ----------- | --- |
    | email       |     |
    | token       |     |
    | ?created_at |     |

1. sessions

    | COLUMN        |     |
    | ------------- | --- |
    | id            |     |
    | ?user_id      |     |
    | ?ip_address   |     |
    | ?user_agent   |     |
    | payload       |     |
    | last_activity |     |

1. cache

    | COLUMN     |     |
    | ---------- | --- |
    | key        |     |
    | value      |     |
    | expiration |     |

1. cache_locks

    | COLUMN     |     |
    | ---------- | --- |
    | key        |     |
    | owner      |     |
    | expiration |     |

1. jobs

    | COLUMN       |     |
    | ------------ | --- |
    | queue        |     |
    | payload      |     |
    | attempts     |     |
    | reserved_at  |     |
    | available_at |     |
    | created_at   |     |

1. job_batches

    | COLUMN          |     |
    | --------------- | --- |
    | id              |     |
    | name            |     |
    | total_jobs      |     |
    | pending_jobs    |     |
    | failed_jobs     |     |
    | failed_jobs_ids |     |
    | ?options        |     |
    | ?cancelled_at   |     |
    | created_at      |     |
    | finished_at     |     |

1. failed_jobs

    | COLUMN     |     |
    | ---------- | --- |
    | uuid       |     |
    | connection |     |
    | queue      |     |
    | payload    |     |
    | expiration |     |
    | failed_at  |     |
