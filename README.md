<h1 align="center">Welcome to GIVE ME CON 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> 기브미콘은 유튜브 API를 크롤링하여 컨텐츠를 추천 및 트렌드를 분석하는 플랫폼입니다.

## Install

### Backend

```sh
pip install -r requirement.txt
python manage.py makemirations
python manage.py migrate
python manage.py runserver
```

### Frontend

```sh
cd frontend/
npm install
```

## Import Youtube Dataset

```sh
python make_category.py
python crawler.py
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Dependency

### Frontend

- React
- Redux

### Backend

- Python 3.6.5
- Django
- Django Restframework
- Django Rest Swagger

## Developer

👤 **Seong-Min Han**

- Github: [@zhsks528](https://github.com/zhsks528)

👤 **Ji-Hae Yoon**

- Github: [@ji-hae](https://github.com/YOONJIHAE)

👤 **Mi-na Yu**

- Github: [@Yumina9](https://github.com/Yumina9)

👤 **Moo-Jae Park**

- Github: [@Parkmoojae](https://github.com/Parkmoojae)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
