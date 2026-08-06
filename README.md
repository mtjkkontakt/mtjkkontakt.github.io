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

### Publikacja bywa wolna, a status wprowadza w błąd (stan na 6 sierpnia 2026)

**Zmiany wchodzą na stronę, ale nie od razu — potrafi to zająć od kilku do
kilkunastu minut.** Zmierzone: commit wysłany o 13:35 był na serwerze o 13:48.

Przy okazji publikacja pokazuje **czerwony krzyżyk, choć się udaje**. Powód:
publikator czeka na potwierdzenie od GitHuba maksymalnie dziesięć minut, a
GitHub bywa wolniejszy — publikator melduje wtedy porażkę i kończy, a GitHub
dokańcza pracę już po nim i wystawia stronę.

**Jak to sprawdzać:**

1. Po wysłaniu zmian **odczekaj 20–30 minut**.
2. Wejdź na https://mtjkkontakt.github.io i odśwież przez **Ctrl+F5**
   (zwykłe odświeżenie może pokazać starą wersję z pamięci przeglądarki).
3. Jeśli widzisz swoją zmianę — wszystko zadziałało, niezależnie od koloru
   w zakładce Actions.

**Czerwony krzyżyk sam w sobie nic nie mówi.** Prawdziwe problemy z plikami
wyłapuje wcześniejszy krok „Sprawdź, czy nie ma zepsutych odnośników do
plików" — on wypisuje konkretną nazwę brakującego pliku i zatrzymuje
publikację, zanim cokolwiek pójdzie na serwer.

Co już próbowano, żeby nie powtarzać:

- Podniesienie limitu czekania z 10 do 30 minut — **nie zadziałało**,
  publikacja i tak przerywała się po dziesięciu minutach.
- Publikacja prosto z gałęzi zamiast przez Actions — pada w 20 sekund
  z komunikatem „Page build failed.".

Jeśli kiedyś zmiany przestaną wchodzić całkiem (odczekane pół godziny i nic),
to dopiero wtedy jest prawdziwy problem. Wtedy: zgłoszenie na
https://support.github.com/ albo przeniesienie na inny hosting — strona to
zwykłe pliki statyczne, więc postawi ją bez żadnych zmian np. Cloudflare Pages.

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
