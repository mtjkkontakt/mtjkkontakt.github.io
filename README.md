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

### ⚠ Publikacja na GitHub Pages nie działa (stan na 6 sierpnia 2026)

**Strona stoi zamrożona na wersji z 6 sierpnia, godz. 12:31.** Wszystkie
późniejsze zmiany są w repozytorium, ale nie trafiają na serwer.

Co ustalono:

- Wszystkie zapisy publikacji mają status „failure". Utykają na
  `deployment_queued` i po dziesięciu minutach czekania są przerywane.
- Jedna jedyna publikacja przeszła — ta o 12:31 — i była wyjątkiem,
  a nie regułą.
- Przetestowano **obie** niezależne drogi publikacji: przez GitHub Actions
  oraz prosto z gałęzi (`Deploy from a branch`). Druga pada w 20 sekund
  z komunikatem „Page build failed.".
- Konfiguracja jest poprawna: pliki są w repozytorium, gałąź `main` jest
  domyślna i dopuszczona przez politykę środowiska, uprawnienia Actions są
  otwarte, wersje akcji aktualne, adres e-mail konta potwierdzony.

Skoro zawodzą obie drogi naraz, problem nie leży w plikach ani w ustawieniach
repozytorium. Wygląda na ograniczenie po stronie GitHuba, prawdopodobnie
związane ze świeżo założonym kontem.

**Co robić:**

1. **Sprawdź skrzynkę.** GitHub wysyła na adres konta wiadomość „Page build
   failure" z konkretną przyczyną — znacznie bardziej szczegółową niż to,
   co widać przez API. To najkrótsza droga do odpowiedzi.
2. **Napisz do wsparcia** na https://support.github.com/ — treść zgłoszenia:
   *„GitHub Pages deployments consistently fail on repo
   mtjkkontakt/mtjkkontakt.github.io. Actions deployments stay in
   `deployment_queued` and time out; branch-based builds fail immediately with
   'Page build failed.'. The repository is public, the workflow completes all
   steps, the account email is verified. Only one deployment ever succeeded."*
3. **Rozważ inny hosting.** Strona to zwykłe pliki statyczne, więc postawi ją
   bez żadnych zmian Netlify (https://app.netlify.com/drop — przeciągasz folder)
   albo Cloudflare Pages. Repozytorium na GitHubie zostaje wtedy jako miejsce
   pracy i kopia zapasowa.

**Dopóki to trwa, czerwony krzyżyk w zakładce Actions oznacza dokładnie to,
co oznacza: zmiana nie weszła na stronę.** Po każdej zmianie sprawdzaj samą
stronę — wejdź na https://mtjkkontakt.github.io i odśwież przez Ctrl+F5.

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

## Kontakt bez formularza — dlaczego tak

Na stronie kontaktowej **nie ma formularza** i jest to świadoma decyzja.

Pierwsza wersja miała formularz, ale na stronie statycznej nie ma serwera,
który przyjąłby zgłoszenie — formularz musiał otwierać program pocztowy
odwiedzającego. Na Windowsie oznaczało to wyskakujący Outlook, w którym część
osób musi się jeszcze logować. Sporo klientów zwyczajnie by odpadło.

Zamiast tego adres i telefon stoją wprost, dużą czcionką:

- kliknięcie w adres otwiera program pocztowy (na telefonie działa naturalnie),
- obok jest przycisk **Kopiuj** dla tych, którzy wolą wkleić adres do swojej
  poczty w przeglądarce,
- nad nimi jest lista tego, co warto napisać w wiadomości — dzięki temu
  dostajesz zapytania od razu z komplet informacji do wyceny.

Przycisk „Kopiuj" jest w HTML ukryty i pokazuje go dopiero skrypt, po sprawdzeniu,
że przeglądarka pozwala na kopiowanie. Jeśli nie pozwala, przycisk nie pojawia
się wcale, zamiast udawać, że działa.

Gdybyś kiedyś jednak chciał prawdziwy formularz (wiadomość ląduje w skrzynce
bez otwierania poczty), potrzebny jest pośrednik — np. darmowe Web3Forms albo
Formspree. Warto wtedy pamiętać, że dane klientów zaczną przechodzić przez
serwery firmy trzeciej i wypadałoby dopisać o tym zdanie pod formularzem.

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
