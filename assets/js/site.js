/* ==========================================================================
   MTJK — skrypt strony
   Dwie rzeczy: zwijane menu na telefonie i wysyłka formularza kontaktowego
   przez program pocztowy. Bez bibliotek zewnętrznych.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Menu na wąskich ekranach
     --------------------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    var setOpen = function (open) {
      links.setAttribute("data-open", open ? "true" : "false");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
    };

    setOpen(false);

    toggle.addEventListener("click", function () {
      setOpen(links.getAttribute("data-open") !== "true");
    });

    // Escape zamyka menu i wraca fokusem na przycisk
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.getAttribute("data-open") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    // Kliknięcie poza menu je zamyka
    document.addEventListener("click", function (e) {
      if (
        links.getAttribute("data-open") === "true" &&
        !links.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        setOpen(false);
      }
    });

    // Po powrocie do szerokiego ekranu menu musi być znowu widoczne
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) setOpen(false);
    });
  }

  /* ---------------------------------------------------------------------
     Kopiowanie adresu i telefonu
     Na stronie kontaktowej nie ma formularza — są dane kontaktowe wprost.
     Kliknięcie w adres otwiera program pocztowy, ale nie każdy tego chce,
     więc obok stoi przycisk kopiujący do schowka.
     Przyciski są w HTML ukryte (hidden) i pokazują się dopiero tutaj —
     bez JavaScriptu albo bez dostępu do schowka nie wyświetlą się wcale,
     zamiast udawać, że działają.
     --------------------------------------------------------------------- */
  var copyButtons = document.querySelectorAll(".btn-copy");
  var canCopy = navigator.clipboard && typeof navigator.clipboard.writeText === "function";

  if (copyButtons.length && canCopy) {
    var status = document.getElementById("copy-status");
    var resetTimer = null;

    Array.prototype.forEach.call(copyButtons, function (btn) {
      btn.hidden = false;

      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(btn.dataset.copy).then(
          function () {
            btn.textContent = "Skopiowano";
            if (status) status.textContent = "Skopiowano do schowka: " + btn.dataset.copy;

            clearTimeout(resetTimer);
            resetTimer = setTimeout(function () {
              btn.textContent = "Kopiuj";
              if (status) status.textContent = "";
            }, 3000);
          },
          function () {
            if (status) status.textContent = "Nie udało się skopiować — zaznacz i skopiuj ręcznie.";
          }
        );
      });
    });
  }
})();
