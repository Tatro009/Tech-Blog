// Handle new post form submission
document.getElementById('new-post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create post');
      }
    }
  });
  
  // Handle comment submission
  document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const content = form.querySelector('textarea[name="content"]').value.trim();
      const postId = form.getAttribute('data-post-id');
  
      if (content) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ content, post_id: postId }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to submit comment');
        }
      }
    });
  });
  
  // Handle post deletion
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete post');
      }
    });
  });
  