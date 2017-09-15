.PHONY: test
test:
	nim js --nimcache:app --out:app/test/index.js lib/test/index

.PHONY: watch
watch:
	browser-sync start --server --startPath app --files app
