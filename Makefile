.PHONY: test
test:
	nim js --nimcache:app --out:app/test/index.js lib/test/index
