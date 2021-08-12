all:
	bash -c 'cd tf && pug .'

clean:
	rm -rf tf/*.html
