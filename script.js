// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn
noBtn.addEventListener("mouseover", () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const btnRect = noBtn.getBoundingClientRect();
  
  const maxMoveX = Math.min(150, (screenWidth - btnRect.right) / 2);
  const maxMoveY = Math.min(150, (screenHeight - btnRect.bottom) / 2);
  
  const moveX = (Math.random() - 0.5) * maxMoveX * 2;
  const moveY = (Math.random() - 0.5) * maxMoveY * 2;
  
  const newLeft = btnRect.left + moveX;
  const newTop = btnRect.top + moveY;
  
  // Kui läheb üle serva, pööra suund ümber
  const finalMoveX = (newLeft < 50 || newLeft + btnRect.width > screenWidth - 50) 
    ? -moveX : moveX;
  const finalMoveY = (newTop < 50 || newTop + btnRect.height > screenHeight - 50) 
    ? -moveY : moveY;

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${finalMoveX}px, ${finalMoveY}px)`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";

});
