# Navedex

[![Netlify Status](https://api.netlify.com/api/v1/badges/dcbd8433-036a-4c61-a46e-2d12f326590f/deploy-status)](https://app.netlify.com/sites/kalu-navedex/deploys)

The system consists of a web app for viewing and creating browsers, with information such as: names, ages, positions, company time and projects that participated.

[Demo](https://navedex2.netlify.app/)

## Login

Digite qualquer email e password para entrar na demo.

## Commands

- `> yarn dev` to start development server.
- `> yarn typecheck` to run typechecker.
- `> yarn build` to build for release.

## Releasing/Deploy

1. Merge into master;
2. In master, create a tag with the release version.
3. Push

## Dificuldades

- API não permitindo criar novo usuário, todos os endpoints estão exigindo token, mesmo os que deveriam ser públicos.
