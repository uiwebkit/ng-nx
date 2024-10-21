# NgNx

Still far from ideal!

Documentation in progress ...

Storybook setup in progress ...

Unit tests in progress ...

E2E setup in progress ...

## Important

This task may not be 100% yours. I would gladly spend many hours doing exactly your task, but I decided to do it once for everyone who wants to appreciate my skills. Thank you for understanding!

## Task Description

Create an Angular application with a page of users. On this page we see users, sort them, perform search and have the ability to paginate if the list is too long.

## Acceptance Criteria

- User list is displayed under `/users` URL with the following columns:
  - firstName
  - lastName
  - age
  - address
- Search by firstName and lastName (case insensitive)
- Sorting by firstName, lastName and age
- Pagination

## Additional information

Used https://dummyjson.com/docs/users as an API.

- I placed everything in libraries and divided them to *-data and *-view.
- All code (business logic) should be placed in *-data and *-view should be 'dump'
- Enable SSR and SSG for first page faster loading
- All components are standalone and are lazy loaded in app level
- Angular Material as components library (why? - official, the best)
- Tailwind CSS for declarative styling (fast and clear)
- Signals and NgRx Signals everywhere where it is possible (clean and maintainable code)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve uni-users
```

To run storybook:

```sh
npx nx story uni-users
```

To run linter for all:

```sh
npx nx run-many -t lint --projects=* --parallel=5
```

To run unit tests for all:

```sh
npx nx run-many -t test --projects=* --parallel=5
```

To create a production bundle:

```sh
npx nx build uni-users
```

To see all available targets to run for a project, run:

```sh
npx npx nx show project uni-users
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.
