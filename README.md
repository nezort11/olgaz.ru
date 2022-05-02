# olgaz.ru

Personal/business static website built with Next.js

## Build

Make HTML export:

```sh
npm run build
```

Upload files to object storage (S3):

```sh
s3cmd --storage-class STANDARD put --recursive out s3://olgaz.ru/
```
