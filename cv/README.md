# LaTeX CV

Edit `CV_RO.tex`, then run `make cv` from the repository root. This compiles the CV with `latexmk` and copies the finished PDF to `files/cv.pdf`, which is the website's CV destination. A standard MacTeX or TeX Live installation supplies the required packages. No fonts or assets outside the repository are needed beyond that distribution.

Build intermediates are stored in the ignored `.build/cv/` directory. Include both the LaTeX source and the regenerated PDF when committing CV updates.

## Source and conversion notes

The source is the user-supplied `CV_RO.pdf`, dated **July 16, 2026**. Its education, research, publication, positions, awards, presentations, citizenship, and language details are retained. The date and scheduled presentation labels deliberately reflect that source snapshot rather than the date of conversion.

The LaTeX version uses a two-page A4 layout, consistent date columns, titles above coauthors, and clickable contact links. The page break follows the source's grouping. Update the `\cvdate` macro when revising the CV and revisit the explicit page break if the content grows.

Only mechanical copy corrections were made: “exploit” → “exploits” in the stock-market project, “shot/long” → “short/long” in the term-premia project, and “Works in progress” → “Work in Progress.” Research descriptions were not replaced with the different versions on the website.
