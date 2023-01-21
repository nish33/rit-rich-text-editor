const RitTextEditorStates = {
  editorContainer: "",
  controlStatus: {},
};
const RitTextEditorContent = `
<!-- Editor Container -->
<div class="rit-editor">
    <!-- Editor Controls -->
    <div class="rit-editor--controls">
        <button class="rit-editor--controls__btn" data-status="bold" data-controls="bold" title="Bold">
            <i class="fas fa-bold"></i>
        </button>
        <button class="rit-editor--controls__btn" data-status="italic" data-controls="italic" title="Italic">
            <i class="fas fa-italic"></i>
        </button>
        <button class="rit-editor--controls__btn" data-status="underline" data-controls="underline" title="Underline">
            <i class="fas fa-underline"></i>
        </button>
        <button class="rit-editor--controls__btn" data-status="ul" data-controls="insertUnorderedList" title="Unordered List">
            <i class="fas fa-list-ul"></i>
        </button>
        <button class="rit-editor--controls__btn" data-status="ol" data-controls="insertOrderedList" title="Ordered List">
            <i class="fas fa-list-ol"></i>
        </button>
        <button class="rit-editor--controls__btn" data-controls="createLink" title="Insert Hyperlink">
            <i class="fas fa-link"></i>
        </button>
        <button class="rit-editor--controls__btn" data-controls="unlink" title="Remove Hyperlink">
            <i class="fas fa-unlink"></i>
        </button>
    </div>
    <!-- Editor Controls End -->

    <!-- Editor Content -->
    <div class="rit-editor--content" contenteditable="true" spellcheck="true">
    </div>
    <!-- Editor Content End -->
</div>
<!-- Editor Container End -->
`;

const RitTextEditor = async (id, name = "") => {
  RitTextEditorStates.editorContainer = id;

  const container = document.getElementById(id);
  container.innerHTML = `
    <textarea id="${id}_textarea" name="${name}" hidden></textarea>
    ${RitTextEditorContent}
  `;

  const controlBtns = container.querySelectorAll(
    "button.rit-editor--controls__btn"
  );
  controlBtns.forEach((el) => {
    if (el.hasAttribute("data-status")) {
      RitTextEditorStates.controlStatus[el.dataset["status"]] = false;
    }
  });

  const contentContainer = document.querySelector(`#${id} .rit-editor--content`);
  contentContainer.innerHTML = "";
};