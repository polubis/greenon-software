# How to git?

## Flow

In this project we'll use **gitflow**. 

The **main** branch is reserved for production code which is used by users. 

The **develop** branch will be used for regular development process. 

Every **pull request** should be merged to these branches as single, squashed commit that following **Commits conventions**.

After having stable **develop** branch we may create a **release cut** branch. 

Every merged commit should have **prefix number** for better readability. So, for example: **10. [TESTS] Description of the commit**.

## Commits conventions

When adding devops/configuration stuff: `git commit -m "[SETUP] Description of the commit"`.

When adding tests: `git commit -m "[TESTS] Description of the commit"`.

When fixing a bug: `git commit -m "[BUG] Description of the commit"`.

When adding improvement/refactor: `git commit -m "[PATCH] Description of the commit"`.

When adding new feature: `git commit -m "[FEATURE] Description of the commit"`.

When adding hotfix: `git commit -m "[HOTFIX] Description of the commit"`.