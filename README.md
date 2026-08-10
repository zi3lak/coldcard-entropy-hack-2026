# Hack na entropię Coldcard (2026) — analiza inżynieryjna

Kompletny raport badawczy (deep research) o największym znanym exploicie portfela sprzętowego w historii Bitcoina: wadzie generatora liczb losowych w firmware Coldcard, ujawnionej 30 lipca 2026 r.

**🔗 Żywa strona:** publikowana przez GitHub Pages (link w ustawieniach repozytorium / sekcji "About") — dostępna po polsku (`/`) i po angielsku (`/en/`), z przełącznikiem języka w nagłówku.

## Zawartość

- [`Hack-na-entropie-Coldcard-2026-analiza-inzynieryjna.md`](Hack-na-entropie-Coldcard-2026-analiza-inzynieryjna.md) — pełny tekst źródłowy raportu (PL) w Markdown, 63 przypisy źródłowe.
- [`en/Coldcard-Entropy-Hack-2026-Engineering-Analysis.md`](en/Coldcard-Entropy-Hack-2026-Engineering-Analysis.md) — pełne tłumaczenie raportu na angielski.
- [`index.html`](index.html) / [`en/index.html`](en/index.html) — wersje webowe raportu (ta sama treść, wygenerowana z Markdown przez pandoc + własny szablon), publikowane jako strona GitHub Pages.
- [`assets/report.css`](assets/report.css), [`assets/report.js`](assets/report.js) — wspólna, profesjonalna szata graficzna (tryb jasny/ciemny, blok metryk dokumentu, spis treści, statystyki) współdzielona przez obie wersje językowe.
- [`assets/`](assets) — wykresy i wizualizacje w wersji polskiej; [`assets/en/`](assets/en) — te same wykresy przerysowane po angielsku.

## Zakres raportu

1. Skala i przebieg ataku (cztery fale sweepów, ~1 719–2 055 BTC)
2. Anatomia błędu (`#ifndef` zamiast `#if`, fallback do PRNG Yasmarang)
3. Technologia seed: BIP-39/BIP-32, TRNG vs PRNG vs CSPRNG
4. Analiza przyczyn: techniczna, organizacyjna (spór licencyjny), kulturowa
5. Komunikacja kryzysowa właściciela (Rodolfo Novak / NVK)
6. Precedensy branżowe (Trust Wallet, Dark Skippy, Trezor, Ledger Recover)
7. Rekomendacje obronne i procedura migracji
8. Konsekwencje prawne i rynkowe
9. **Aktualizacja na 10 sierpnia 2026** — najnowszy bilans strat, fundusz odkupu roszczeń, front prawny

## Aktualizacje

Raport jest okresowo aktualizowany o nowe informacje z newsów branżowych. Data ostatniej aktualizacji jest widoczna w nagłówku dokumentu i na stronie.

---

*Materiał ma charakter wyłącznie informacyjno-edukacyjny i nie stanowi porady inwestycyjnej ani prawnej.*
