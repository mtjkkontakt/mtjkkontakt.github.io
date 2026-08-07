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

### Gdy zmiany nie wchodzą na stronę — sprawdź, czy kolejka nie stoi

Normalnie publikacja trwa **około 20 sekund**. Jeśli po kilku minutach i
odświeżeniu przez Ctrl+F5 nadal widzisz starą wersję, prawie na pewno
zakorkowała się kolejka publikacji.

**Co się stało 6 sierpnia 2026** (opis, żeby następnym razem rozpoznać to od
razu): jeden przebieg zawiesił się w stanie **`waiting`** — czekał na
zatwierdzenie środowiska `github-pages`, choć środowisko nie miało ustawionych
żadnych osób zatwierdzających, więc nie było komu i czego zatwierdzić. Wisiał
tak 13 godzin i **blokował wszystkie kolejne publikacje**, które przez to
kończyły się po dziesięciu minutach błędem „Timeout reached". Wyglądało to na
wolne albo zepsute publikowanie, a w rzeczywistości była to jedna zatkana
kolejka. Po anulowaniu tamtego przebiegu następna publikacja poszła w 21
sekund i zakończyła się zielonym znaczkiem.

**Jak to naprawić, gdyby się powtórzyło:**

1. Wejdź na https://github.com/mtjkkontakt/mtjkkontakt.github.io/actions
2. Znajdź przebieg, który wisi w stanie **Waiting** albo **Queued** dłużej niż
   kilka minut.
3. Otwórz go i kliknij **Cancel workflow** (przycisk w prawym górnym rogu).
4. Wróć na listę, otwórz najnowszy przebieg i kliknij **Re-run all jobs**.

Po tym publikacja powinna przejść w kilkadziesiąt sekund.

**Zwykłe sprawdzanie po zmianie:** odczekaj minutę, wejdź na
https://mtjkkontakt.github.io i odśwież przez **Ctrl+F5** (zwykłe odświeżenie
potrafi pokazać starą wersję z pamięci przeglądarki).

Błędy w samych plikach — na przykład zdjęcie, którego brakuje — wyłapuje krok
„Sprawdź, czy nie ma zepsutych odnośników do plików". Wypisuje wtedy konkretną
nazwę pliku i zatrzymuje publikację, zanim cokolwiek pójdzie na serwer.

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
