install:
	npm install

start:
	npm run babel-node -- 'src/bin/gendiff.js'

publish:
	npm publish

lint:
	npm run eslint -- src

lintall:
	npm run eslint

build:
	rm -rf dist
	npm run build

test:
	npm test

.PHONY: install start publish lint lintall build test
