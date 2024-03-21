all:
	npm i; npm run dev;

build:
	npm run build;

deploy:
	npm run deploy;

clean:
	rm -rf node_modules;

dev:
	npm run dev;

.PHONY: all build deploy clean dev