-include $(CURDIR)/.env

_:
	@make dev

dev:
	@echo "open http://localhost:${PORT_NGINX}"
	docker-compose up

build:
	@echo "WIP"
