const input = document.querySelector("input")
const convert = document.querySelector(".convert")
const length  = document.querySelector(".length")
const volume = document.querySelector(".volume")
const mass = document.querySelector(".mass")

convert.addEventListener("click", () => {
    const inputValue = Number(input.value)
    if (isNaN(inputValue) || inputValue < 0) {
        alert("Please enter a positive number")
        return;
    }

    length.textContent = `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)}`
    volume.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)}`
    mass.textContent = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)}`
})