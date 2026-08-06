# Strona MTJK — nadruki na koszulki i odzież reklamową

Statyczna strona-wizytówka (portfolio + oferta) dla działalności zajmującej się
nadrukami DTF. Publikowana automatycznie na GitHub Pages pod adresem
**https://mtjkkontakt.github.io**.

Strona jest napisana w czystym HTML, CSS i odrobinie JavaScriptu. Nie ma tu
żadnego "budowania" projektu, node_modules ani frameworków — pliki, które leżą
w repozytorium, to dokładnie te pliki, które trafiają na serwer.

---

## Co gdzie leży

```
index.html            strona główna („O mnie")
portfolio.html        realizacje + przykładowa oferta z cenami
proces.html           „Jak pracuję" — cztery kroki współpracy
kontakt.html          dane kontaktowe i formularz

assets/css/style.css  cały wygląd strony (kolory, czcionki, układ)
assets/js/site.js     menu na telefonie + obsługa formularza
assets/img/           zdjęcia i logo

.github/workflows/    automatyczna publikacja na GitHub Pages
robots.txt            zgoda dla wyszukiwarek
sitemap.xml           mapa strony dla wyszukiwarek
.nojekyll             wyłącza niepotrzebne przetwarzanie plików przez GitHuba
```

---

## Jak obejrzeć stronę na swoim komputerze

Otwórz plik `index.html` podwójnym kliknięciem. Strona zadziała — w odróżnieniu
od wcześniejszej wersji z Claude Design nie wymaga serwera.

---

## Jak opublikować zmiany

1. Wrzuć zmienione pliki do repozytorium `mtjkkontakt.github.io` na GitHubie
   (gałąź `main`).
2. Reszta dzieje się sama: zakładka **Actions** pokazuje przebieg publikacji,
   a po 1–2 minutach zmiany są widoczne pod https://mtjkkontakt.github.io.

Jednorazowa konfiguracja na GitHubie (tylko za pierwszym razem):
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

Publikację można też uruchomić ręcznie: **Actions → Deploy do GitHub Pages →
Run workflow**.

Zanim strona zostanie opublikowana, workflow sprawdza, czy wszystkie odnośniki
do plików (zdjęcia, style, skrypty) faktycznie istnieją. Jeśli któregoś brakuje,
publikacja się zatrzyma i pokaże, w którym pliku jest problem — dzięki temu
na żywo nie pojawi się strona z brakującym zdjęciem.

---

## Co trzeba jeszcze sprawdzić / uzupełnić

- [x] ~~**Adres e-mail.**~~ W całym serwisie jest `mtjk.kontakt@gmail.com`.
      Gdyby kiedyś miał się zmienić: występuje w `kontakt.html` (cztery miejsca,
      w tym `data-mailto` i `action` w formularzu) oraz w stopkach `index.html`,
      `portfolio.html` i `proces.html`.
- [ ] **Link do Facebooka.** Na stronie kontaktowej jest sama nazwa profilu,
      bez odnośnika. Warto wkleić prawdziwy adres.
- [ ] **Zdjęcia realizacji.** Na razie mamy dwa. W `portfolio.html` czekają
      cztery gotowe bloki w komentarzu — patrz niżej.

---

## Jak dodać nową realizację do portfolio

1. Wrzuć zdjęcie do `assets/img/` (najlepiej kwadratowe, maks. ~1200 px
   szerokości — duże pliki spowalniają stronę na telefonie).
2. Otwórz `portfolio.html` i znajdź komentarz
   `GOTOWE BLOKI DO UZUPEŁNIENIA`.
3. Wybierz jeden z czterech gotowych bloków, podmień w nim `src="…"` na nazwę
   swojego pliku i opisz zdjęcie w `alt="…"`.
4. Usuń znaczniki komentarza (`<!--` i `-->`) wokół tego bloku.
5. Gdy realizacji ze zdjęciami będzie trzy lub więcej, zmień w tym samym pliku
   `class="grid grid--2"` na `class="grid grid--3"` — karty ustawią się
   w trzech kolumnach.

---

## Formularz kontaktowy — jak działa

GitHub Pages serwuje wyłącznie gotowe pliki, nie ma tam żadnego programu, który
mógłby odebrać dane z formularza. Dlatego formularz składa treść wiadomości
i otwiera ją w programie pocztowym osoby, która go wypełniła — dopiero ona
klika „wyślij".

Jeśli kiedyś ma to działać „normalnie" (wiadomość ląduje w skrzynce bez
otwierania poczty), najprostsza droga to darmowe konto w usłudze typu
Formspree: wtedy w `kontakt.html` w znaczniku `<form>` wystarczy ustawić
`action="https://formspree.io/f/TWOJ-ID"` i usunąć atrybut `data-mailto`.

---

## Własna domena `.pl`

Gdy domena będzie kupiona:

1. Dodaj do repozytorium plik `CNAME` (bez rozszerzenia) z jedną linią —
   nazwą domeny, np. `mtjk.pl`.
2. U rejestratora domeny ustaw rekordy DNS:
   - cztery rekordy **A** dla `@`: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - rekord **CNAME** dla `www` wskazujący na `mtjkkontakt.github.io`
3. Na GitHubie: **Settings → Pages → Custom domain** — wpisz domenę
   i zaznacz **Enforce HTTPS** (opcja pojawi się po kilkunastu minutach).
4. Zmień adresy `https://mtjkkontakt.github.io` na nową domenę w `sitemap.xml`,
   `robots.txt` oraz w znacznikach `canonical` i `og:` w czterech plikach HTML.
