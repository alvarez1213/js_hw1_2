const img = document.getElementById('cookie')
const clickCountTag = document.getElementById('clicker__counter')
const clickAvgTag = document.getElementById('clicker__avg')

let clickCount = 0
img.onclick = () => {
  
  if (clickCount % 2 === 0) {
    img.width += 20
    img.height += 20
  } else {
    img.width -= 20
    img.height -= 20
  }
  
  clickCount++
  clickCountTag.textContent = String(clickCount)
}


let avgClicks = 0
let avgClicksNow = 0

const itrId = setInterval(() => {
  avgClicksNow = clickCount - avgClicks  
  clickAvgTag.textContent = String(avgClicksNow)
  avgClicks = clickCount
}, 1000);


