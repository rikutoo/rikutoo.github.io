.PHONY: all cv

all: cv

# Saya-style CV. Run here, or use `make -C cv` from the repository root.
cv:
	latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=.build/saya cv.tex
	mkdir -p output/pdf ../files
	cp .build/saya/cv.pdf output/pdf/cv.pdf
	cp .build/saya/cv.pdf cv.pdf
	cp .build/saya/cv.pdf ../files/cv.pdf
