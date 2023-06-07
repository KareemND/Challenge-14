const commentForm = document.querySelector('#comment-form');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const content = document.querySelector('#content').value.trim();

  if (content) {
    fetch(`/api/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
      .then((response) => {
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to add comment');
        }
      })
      .catch((err) => console.log(err));
  }
});
