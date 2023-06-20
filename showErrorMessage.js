const showErrorMessage = (element, msg) => {
  element.innerHTML = `<p class="text-danger text-center text-capitalize">${msg}</p>`
}

export default showErrorMessage