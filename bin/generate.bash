#!/usr/bin/env bash

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/src/swagger.yml \
  -g typescript-axios \
  -o /local/dist \
  --api-package=api \
  --model-package=model \
  --additional-properties=withSeparateModelsAndApi=true
