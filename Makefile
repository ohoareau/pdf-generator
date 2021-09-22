export CI

build: ## Build
	@yarn --silent build

clean: clean-modules clean-coverage
clean-coverage: ## Remove test coverage directory
	@rm -rf coverage/
clean-modules: ## Remove Javascript dependencies directory
	@rm -rf node_modules/

install: ## Install the Javascript dependencies
	@yarn --silent install

publish:
	@V=$(shell npm version patch) git add . && git commit -am "feat: $(V)" && git push && git tag $(V) && push --tags
	@npm publish

run-cli:
	@yarn --silent run-cli $(d) $(c) $(t)

test: ## Execute the tests
	@CI=true yarn --silent test --all --color --coverage --detectOpenHandles
test-ci: ## Execute the tests
	@CI=true yarn --silent test --all --color --coverage --detectOpenHandles
test-cov: ## Execute the tests
	@yarn --silent test --coverage --detectOpenHandles
test-dev: ## Execute the tests
	@yarn --silent test --all --color --detectOpenHandles

.DEFAULT_GOAL := install
.PHONY: build \
		clean clean-coverage clean-modules \
		install \
		run-cli \
		publish \
		test test-ci test-cov test-dev
