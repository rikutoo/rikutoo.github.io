# LaTeX CV

## Saya-style CV

Edit `cv/cv.tex`, then run `make cv` from the repository root (or `make -C cv`). The build refreshes the website's `files/cv.pdf`, the local `cv/cv.pdf`, and `cv/output/pdf/cv.pdf` together; build intermediates are stored in `cv/.build/saya/`.

This version uses the supplied template's Baskerville typography, italic section headings, horizontal rules, and right-aligned dates. It follows Saya Ikegawa's section order, with separate references, job market paper, work in progress, research experience, teaching experience, fellowships/awards/professional experience, and skills/interests. Research Experience contains only research assistant positions. Dissertation fellowships, internships, and the Keio visiting researcher position appear under Fellowships, Awards, and Professional Experience. The CV also retains CV_RO's publication and presentations. The paper "Attention and Disagreement over the Business Cycle" is omitted at the author's request; the Best Second-Year Paper Award remains listed as an achievement. Sections with no corresponding CV_RO information are omitted.

Biographical and research information comes from `CV_RO.tex`, including its July 16, 2026 snapshot dates and scheduled labels. Reference titles, affiliations, and contact emails were updated on September 24, 2026 from the professional websites of [Olivier Coibion](https://sites.google.com/site/ocoibion/home), [Stefano Eusepi](https://sites.google.com/view/stefano-eusepi/home), and [Christoph Boehm](https://www.christopheboehm.com/). Reference names link to those websites and emails are clickable. No programming skills or hobbies are invented. Project bullet points are presented as short paragraphs. Teaching experience was expanded on October 28, 2026 using the author's evaluation archive, course materials, and instructor confirmations.

## Original CV_RO conversion

`CV_RO.tex` is the archived original conversion. The website now uses `cv.tex` and the build command above. A standard MacTeX or TeX Live installation supplies the required packages. No fonts or assets outside the repository are needed beyond that distribution.

Build intermediates are stored in the ignored `.build/cv/` directory. Include both the LaTeX source and the regenerated PDF when committing CV updates.

## Source and conversion notes

The source is the user-supplied `CV_RO.pdf`, dated **July 16, 2026**. Its education, research, publication, positions, awards, presentations, citizenship, and language details are retained. The date and scheduled presentation labels deliberately reflect that source snapshot rather than the date of conversion.

The LaTeX version uses a two-page A4 layout, consistent date columns, titles above coauthors, and clickable contact links. The page break follows the source's grouping. Update the `\cvdate` macro when revising the CV and revisit the explicit page break if the content grows.

Only mechanical copy corrections were made: “exploit” → “exploits” in the stock-market project, “shot/long” → “short/long” in the term-premia project, and “Works in progress” → “Work in Progress.” Research descriptions were not replaced with the different versions on the website.
