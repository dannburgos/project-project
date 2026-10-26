// Parte un texto en sus líneas reales (las que se ven en pantalla) para
// animarlas una por una. Cada línea queda como:
// <span class="story-line"><span class="story-line__text">…</span>
// <i class="story-line__block"></i></span>
// El texto original se guarda para volver a armarlo cuando cambia el ancho.

const LINE_CLASS = 'story-line';

export function splitTextIntoLines(element: HTMLElement) {
  if (!element.dataset.text) {
    element.dataset.text = (element.textContent ?? '')
      .trim()
      .replace(/\s+/g, ' ');
  }
  const words = element.dataset.text.split(' ');
  element.replaceChildren(
    ...words.flatMap((word, index) => {
      const span = document.createElement('span');
      span.textContent = word;
      return index === 0 ? [span] : [document.createTextNode(' '), span];
    })
  );

  const lines: string[][] = [];
  let lastTop: number | null = null;
  element.querySelectorAll('span').forEach(span => {
    if (span.offsetTop !== lastTop) {
      lines.push([]);
      lastTop = span.offsetTop;
    }
    lines[lines.length - 1].push(span.textContent ?? '');
  });

  element.replaceChildren(
    ...lines.map(line => {
      const wrapper = document.createElement('span');
      wrapper.className = LINE_CLASS;
      const text = document.createElement('span');
      text.className = `${LINE_CLASS}__text`;
      text.textContent = line.join(' ');
      const block = document.createElement('i');
      block.className = `${LINE_CLASS}__block`;
      wrapper.append(text, block);
      return wrapper;
    })
  );
}

export function restoreSplitText(element: HTMLElement) {
  if (element.dataset.text) element.textContent = element.dataset.text;
}
