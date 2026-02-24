// Modal functionality for gallery
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');
const galleryImages = document.querySelectorAll('.gallery-grid img');

const people = {
  'cj.jpg': { name: 'Ceejii', age: 20, birthday: 'Jan 1, 2003', quote: 'Stay focused mga nigger', hobbies: 'Gaming, racism' },
  'reniel.jpg': { name: 'Reniel', age: 21, birthday: 'Feb 14, 2002', quote: 'Damn I wanna die so badly', hobbies: 'Coding, Art, I miss him' },
  'steven.jpg': { name: 'Steven', age: 19, birthday: 'Mar 3, 2004', quote: 'Keep learning!', hobbies: 'Music, Reading' },
  'dom.jpg': { name: 'Eve', age: 202, birthday: 'Apr 10, 2001', quote: 'Level up every day!', hobbies: 'Gaming, racism' },
  'gracio.jpg': { name: 'Gracio', age: 20, birthday: 'May 5, 2003', quote: 'Dream big!', hobbies: 'Sports, Art' },
  'mark.jpg': { name: 'Mark', age: 21, birthday: 'Jun 22, 2002', quote: 'Never give up!', hobbies: 'Coding, Music' },
  'peter.jpg': { name: 'Peter', age: 23, birthday: 'Jul 17, 2000', quote: 'Stay positive!', hobbies: 'Photography, Gaming' },
  'josh.jpg': { name: 'Juicee', age: 100, birthday: 'Aug 8, 2003', quote: 'Moew', hobbies: 'Gaming, and hating nigger' }
};

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const info = people[img.src.split('/').pop()];
    modalContent.innerHTML = `
      <span class="modal-close">&times;</span>
      <h3>${info.name}</h3>
      <p><strong>Age:</strong> ${info.age}</p>
      <p><strong>Birthday:</strong> ${info.birthday}</p>
      <p><strong>Quote:</strong> "${info.quote}"</p>
      <p><strong>Hobbies:</strong> ${info.hobbies}</p>
      <img src="${img.src}" style="width:200px;border-radius:10px;margin-top:10px;">
    `;
    modal.style.display = 'flex';

    // Rebind close button
    document.querySelector('.modal-close').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});