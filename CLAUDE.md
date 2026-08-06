# CLAUDE.md

Instrukcje dla Claude Code pracującego nad tym repozytorium (strona MTJK).

## Co to za projekt

Statyczna strona-wizytówka (portfolio + oferta) dla jednoosobowej działalności
zajmującej się nadrukami DTF na odzieży — koszulki, bluzy, gadżety reklamowe.
Strona jest wysyłana firmom, klubom i ekipom jako oferta współpracy, więc
priorytetem jest to, żeby działała niezawodnie i wyglądała wiarygodnie
(nie amatorsko, nie jak spam).

Hosting: GitHub Pages, repo `mtjk.github.io`, publikacja przez GitHub Actions
(`.github/workflows/deploy.yml`).

## Historia — skąd wzięła się ta strona

Wygląd zaprojektowano w **Claude Design** (projekt „Portfolio MTJK z ceennikiem",
design system „Industry", wariant ciemny). Ten katalog to **ręczna implementacja**
tamtego projektu: czysty HTML/CSS/JS, bez runtime'u Claude Design.

Poprzednia wersja (bezpośredni eksport z Claude Design) miała trzy problemy,
których tu celowo nie ma i nie należy ich przywracać:

- wymagała serwera HTTP, bo runtime robił `fetch()` do plików sidecar,
- ładowała React/ReactDOM/Babel z CDN (unpkg.com) przy każdym wejściu na stronę,
- trzymała zdjęcia jako base64 w `.image-slots.state.json` zamiast jako pliki.

Zdjęcia zostały z tamtego pliku wypakowane do `assets/img/`.

**Zmiany wyglądu można nadal projektować w Claude Design**, ale nie da się
wgrać eksportu wprost do tego repo — trzeba przenieść zmianę ręcznie do plików
HTML/CSS. Projekt w Claude Design ma id `9c03d440-8f26-4edc-9923-aa93037bce67`
(narzędzie DesignSync, uprawnienia do odczytu i zapisu).

## Struktura

- `index.html`, `portfolio.html`, `proces.html`, `kontakt.html` — cztery podstrony.
  `index.html` musi się tak nazywać, bo GitHub Pages tego wymaga.
- `assets/css/style.css` — jedno źródło wyglądu: tokeny (kolory, odstępy,
  czcionki) przeniesione z design systemu „Industry", potem klasy komponentów.
- `assets/js/site.js` — tylko dwie rzeczy: zwijane menu na wąskich ekranach
  i wysyłka formularza przez `mailto:`. Bez bibliotek zewnętrznych.
- `assets/img/` — zdjęcia. Nie wrzucaj tu plików większych niż ~300 KB;
  większość odbiorców otwiera link z telefonu.

## Zasady, o których trzeba pamiętać

- **Nawigacja jest skopiowana w każdym z czterech plików HTML.** To świadoma
  decyzja — dołączanie wspólnego nagłówka wymagałoby JavaScriptu (miganie treści,
  gorzej dla wyszukiwarek) albo kroku budowania (za dużo zachodu dla czterech
  podstron). Zmieniasz nawigację? Zmień ją we wszystkich czterech plikach
  i sprawdź, czy `aria-current="page"` jest na właściwym linku.
- **Nie dodawaj kroku budowania, frameworka ani zależności z npm**, dopóki
  właściciel wyraźnie o to nie poprosi. Cała wartość tego układu polega na tym,
  że pliki w repo = pliki na serwerze.
- **Nie wstawiaj `grid-template-columns` (ani innych reguł układu) w atrybucie
  `style`** — reguły z arkusza dla wąskich ekranów nie mają jak takiego zapisu
  nadpisać. Układy siatek trzymamy w klasach `.grid--*` w `style.css`.
- Adres kontaktowy to `mtjk.kontakt@gmail.com` (właściciel podał go zamiast
  `mtjk@gmail.com` z projektu w Claude Design). Występuje w czterech plikach
  HTML — stopki, karta kontaktu oraz `data-mailto` i `action` w formularzu.
  Przy ewentualnej podmianie zmień wszystkie wystąpienia naraz.
- Ceny i tabela rozmiarów na `portfolio.html` (55 zł, 100% bawełna, 185–190 g/m²)
  są przepisane z materiału reklamowego właściciela `assets/img/oferta-piotrkow.jpg`.
  Nie zmyślaj cen — jeśli coś ma się zmienić, dopytaj.

## Deployment

- Publikacja po każdym pushu na `main`, przez workflow `Deploy do GitHub Pages`.
- Workflow przed publikacją sprawdza, czy wszystkie ścieżki w `src`/`href`
  wskazują na istniejące pliki — zepsuty odnośnik zatrzymuje publikację.
- Jednorazowo trzeba ustawić na GitHubie: Settings → Pages → Source:
  **GitHub Actions** (nie „Deploy from a branch").
- Przy podpięciu własnej domeny `.pl`: plik `CNAME` + rekordy DNS + aktualizacja
  adresów w `sitemap.xml`, `robots.txt` i znacznikach `canonical`/`og:`.
  Szczegóły w `README.md`.

## Styl pracy z właścicielem

Właściciel prowadzi działalność od niedawna i nie jest osobą techniczną.
Tłumacz zmiany prostym językiem, bez żargonu — a jeśli żargon jest konieczny,
wyjaśnij go w jednym zdaniu. Komentarze w kodzie i dokumentacja są po polsku
z tego samego powodu.
