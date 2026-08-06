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
     Formularz kontaktowy
     Strona jest statyczna (GitHub Pages) — nie ma serwera, który przyjąłby
     dane formularza. Skrypt składa więc gotową wiadomość i otwiera ją
     w programie pocztowym użytkownika.
     Jeśli kiedyś dojdzie prawdziwa obsługa formularza (np. Formspree),
     wystarczy ustawić w HTML action="https://..." i usunąć ten blok.
     --------------------------------------------------------------------- */
  var form = document.getElementById("contact-form");

  if (form && form.dataset.mailto) {
    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) return; // przeglądarka pokaże własne komunikaty
      e.preventDefault();

      var val = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };

      var name = val("k-name");
      var email = val("k-email");
      var topic = val("k-topic");
      var msg = val("k-msg");

      var subject = "Zapytanie ze strony MTJK" + (topic ? " — " + topic : "");

      var body = [
        "Imię i nazwisko: " + name,
        "E-mail: " + email,
        "Czego potrzebuję: " + topic,
        "",
        msg
      ].join("\n");

      window.location.href =
        "mailto:" +
        form.dataset.mailto +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      var status = document.getElementById("form-status");
      if (status) {
        status.textContent =
          "Otwieram Twój program pocztowy z gotową wiadomością. " +
          "Jeśli nic się nie stało, napisz bezpośrednio na " +
          form.dataset.mailto + ".";
      }
    });
  }
})();
