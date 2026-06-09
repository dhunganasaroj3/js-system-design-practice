// Renderer for the system design practice site.
// Reads the global QUESTIONS array (from questions.js) and wires up
// search + difficulty filtering. Adding questions requires no changes here.

(function () {
  const listEl = document.getElementById("list");
  const countEl = document.getElementById("count");
  const searchEl = document.getElementById("search");
  const filtersEl = document.getElementById("filters");
  const menuEl = document.getElementById("menu");

  let activeCat = "System Design";
  let activeDiff = "All";
  let query = "";

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // Minimal markdown: **bold** only (prompts use it for emphasis).
  function mdInline(str) {
    return escapeHtml(str).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function matches(q) {
    if ((q.category || "System Design") !== activeCat) return false;
    if (activeDiff !== "All" && q.difficulty !== activeDiff) return false;
    if (!query) return true;
    const hay = (q.title + " " + q.tags.join(" ") + " " + q.prompt).toLowerCase();
    return hay.includes(query);
  }

  function cardHtml(q) {
    const tags = q.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const ref = q.reference
      ? `<div class="reference">
           <p class="ref-label">Reference Example</p>
           <pre>${escapeHtml(q.reference)}</pre>
         </div>`
      : "";
    return `
      <article class="card" data-id="${q.id}">
        <div class="card-head" role="button" tabindex="0" aria-expanded="false">
          <span class="card-num">#${q.id}</span>
          <h2 class="card-title">${escapeHtml(q.title)}</h2>
          <span class="badge ${q.difficulty}">${q.difficulty}</span>
          <span class="caret">▶</span>
        </div>
        <div class="card-body">
          <div class="tags">${tags}</div>
          <div class="prompt">${mdInline(q.prompt)}</div>
          ${ref}
        </div>
      </article>`;
  }

  function render() {
    const items = QUESTIONS.filter(matches);
    countEl.textContent = `${items.length} question${items.length === 1 ? "" : "s"}`;
    listEl.innerHTML = items.length
      ? items.map(cardHtml).join("")
      : `<p class="empty">No questions match your search.</p>`;
  }

  function toggle(card) {
    const open = card.classList.toggle("open");
    card.querySelector(".card-head").setAttribute("aria-expanded", String(open));
  }

  // Event delegation — survives re-renders.
  listEl.addEventListener("click", (e) => {
    const head = e.target.closest(".card-head");
    if (head) toggle(head.closest(".card"));
  });
  listEl.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card-head")) {
      e.preventDefault();
      toggle(e.target.closest(".card"));
    }
  });

  menuEl.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    menuEl.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeCat = tab.dataset.cat;
    render();
  });

  filtersEl.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    filtersEl.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeDiff = chip.dataset.diff;
    render();
  });

  searchEl.addEventListener("input", () => {
    query = searchEl.value.trim().toLowerCase();
    render();
  });

  render();
})();
