/* ==============================
   pdf-viewer.js
   - PDF 문서 목록 렌더링
   - 문서 카드 클릭 시 iframe 미리보기 변경
================================ */
function renderDocuments(project) {
  const list = document.querySelector('[data-document-list]');
  const viewer = document.querySelector('[data-pdf-viewer]');
  const empty = document.querySelector('[data-pdf-empty]');
  const currentTitle = document.querySelector('[data-current-pdf-title]');
  const openLink = document.querySelector('[data-open-pdf-link]');
  if (!list || !viewer || !empty || !currentTitle || !openLink) return;

  list.innerHTML = project.documents.map((doc, index) => {
    const disabled = doc.status !== 'available';
    const statusText = disabled ? '준비 중' : '열람 가능';
    return `
      <button class="document-button ${disabled ? 'is-disabled' : ''}" type="button" data-doc-index="${index}" ${disabled ? 'disabled' : ''}>
        <strong>${doc.title}</strong>
        <small>${statusText} · ${doc.path.split('/').pop()}</small>
      </button>
    `;
  }).join('');

  const availableDocs = project.documents.filter((doc) => doc.status === 'available');
  if (availableDocs.length === 0) {
    showEmptyPdf('열람 가능한 PDF 문서가 아직 배치되지 않았다.');
    return;
  }

  list.querySelectorAll('[data-doc-index]').forEach((button) => {
    button.addEventListener('click', () => {
      const doc = project.documents[Number(button.dataset.docIndex)];
      selectDocument(doc, button);
    });
  });

  const firstButton = list.querySelector('[data-doc-index]:not([disabled])');
  const firstDocIndex = Number(firstButton.dataset.docIndex);
  selectDocument(project.documents[firstDocIndex], firstButton);

  function selectDocument(doc, button) {
    list.querySelectorAll('.document-button').forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const url = resolvePath(doc.path);
    viewer.src = url;
    viewer.hidden = false;
    empty.hidden = true;
    currentTitle.textContent = doc.title;
    openLink.href = url;
    openLink.classList.remove('is-disabled');
  }

  function showEmptyPdf(message) {
    viewer.hidden = true;
    empty.hidden = false;
    empty.textContent = message;
    currentTitle.textContent = 'PDF 준비 중';
    openLink.removeAttribute('href');
  }
}
