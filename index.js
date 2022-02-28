const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  var selectorPara = `#${faq.id} p`;
  var selectorSubHead = `#${faq.id} .subHead`;

  const subHead = document.querySelector(selectorSubHead);
  const heading = document.querySelector(`${selectorSubHead} h2`);
  const arrow = document.querySelector(`${selectorSubHead} img`);
  const para = document.querySelector(selectorPara);

  subHead.addEventListener("click", function (e) {
    heading.classList.toggle("activeH2");
    arrow.classList.toggle("activeArrow");
    para.classList.toggle("activePara");
  });
});
