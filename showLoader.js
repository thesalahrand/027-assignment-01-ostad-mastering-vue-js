const showLoader = (element) => {
  element.innerHTML = `<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`
}

export default showLoader