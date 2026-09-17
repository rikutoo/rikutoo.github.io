.PHONY: cv

# Requires a TeX distribution with latexmk (for example, MacTeX or TeX Live).
# Temporary build products stay in .build; only the finished PDF goes on the site.
cv:
	latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=.build/cv -jobname=cv cv/CV_RO.tex
	mkdir -p files
	cp .build/cv/cv.pdf files/cv.pdf
