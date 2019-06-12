let input_text = document.querySelector("#input")
let output_text = document.querySelector("#output")
let key = document.querySelector("#key")
let encrypt_button = document.querySelector("#encrypt")
let decrypt_button = document.querySelector("#decrypt")

encrypt_button.onclick = () => {
  let output = crypto.encrypt(input_text.value, key.value)
  output_text.value = output
}
decrypt_button.onclick = () => {
  let output = crypto.decrypt(input_text.value, key.value)
  output_text.value = output
}