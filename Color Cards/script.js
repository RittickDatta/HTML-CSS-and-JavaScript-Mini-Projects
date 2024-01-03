function arrangeBoxes() {
  const boxes = document.querySelectorAll('.box');
  console.log(boxes);

  boxes?.forEach((box, index) => {
    setInterval(() => {
      box?.classList.add('box' + (index + 1));
    }, (index + 1) * 1000);
  });
}

window.onload = arrangeBoxes;
