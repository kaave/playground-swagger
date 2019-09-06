-include $(CURDIR)/.env

_:
	@make dev

dev:
	@echo "open http://localhost:${PORT_UI}"
	docker-compose up

build:
	docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i /local/swagger.yml \
		-g typescript-axios \
		-o /local/dist/typescript-axios
