BudgetBook AngularJS Application
=========================

## 설정방법 (console)

    $ git clone git@github.com:subicura/bb-ng.git # clone source
    $ cd bb-ng

    $ npm install    # npm package install (grunt/karma/...)
    $ bower install  # bower package install (angular/jquery/sematic-ui/...)
    $ cp app/scripts/config.js.example app/scripts/config.js
    $ grunt server   # launch server!!

## configuration

- app/scripts/config.js 파일의 내용을 환경에 맞게 수정해주세요.

## file naming convention

- 소문자시작 + camel case
  - ex) ngShow.js
  - ex) userService.js

## Server(BudgetBook API) repository

- https://github.com/rorlab/bbapi.git (source)
- https://github.com/rorlab/bbapi     (homepage)

## Coding Note

- https://docs.google.com/document/d/1B0eesqGERt39OwywQJbVSeaNQsfJa5PR0qIc1EsRbxQ/edit?usp=sharing
