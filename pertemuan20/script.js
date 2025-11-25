const welcomeSection = document.querySelector('#welcome-section');
console.log(welcomeSection);

const myButton = document.querySelector('#action-button');
console.log(myButton);

const firstParagraph = document.querySelector('.description');
const firstCard = document.querySelector('.card');

console.log(firstParagraph);
console.log(firstCard);

const allParagraphs = document.querySelectorAll('.description');

console.log(allParagraphs);
console.log(allParagraphs.length);
console.log(allParagraphs[0]);
console.log(allParagraphs[1]);

const allCards = document.querySelectorAll('.card');
console.log(allCards.length);

allCards.forEach(card => {
  console.log(card.textContent);
});

allParagraphs.forEach(para => {
  console.log(para.textContent);
});

const paragraphsInWelcome = welcomeSection.querySelectorAll('p');

paragraphsInWelcome.forEach((para, index) => {
  console.log(`Paragraf ke-${index + 1}: ${para.textContent}`);
});

const message = document.querySelector('#message');
message.textContent = 'Halo Pemula!';

const status = document.querySelector('#status');
status.textContent = 'Status: Online';

const content = document.querySelector('#content');

content.innerHTML = `
  <h2>Konten Baru</h2>
  <p>Ini adalah konten yang diubah</p>
  <button>Tombol Baru</button>
`;

const message2 = document.querySelector('#message');

message2.textContent = '<em>Italic</em>';
message2.innerHTML = '<em>Italic</em>';
