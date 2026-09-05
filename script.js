const $ = id => document.getElementById(id);
$('date').valueAsDate = new Date();

function getPosts() {
  const local = JSON.parse(localStorage.getItem('my-posts') || '[]');
  return [...local, ...BUILT_IN_POSTS].sort((a,b) => b.date.localeCompare(a.date));
}

function render(filter='') {
  const box = $('posts');
  const posts = getPosts().filter(p =>
    (p.title + p.content).toLowerCase().includes(filter.toLowerCase()));
  box.innerHTML = posts.length ? '' : '<p>No posts yet.</p>';
  posts.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `<h3></h3><small></small><p></p>${i < JSON.parse(localStorage.getItem('my-posts')||'[]').length ? '<br><button>Delete</button>' : ''}`;
    div.querySelector('h3').textContent = p.title;
    div.querySelector('small').textContent = p.date;
    div.querySelector('p').textContent = p.content;
    const btn = div.querySelector('button');
    if (btn) btn.onclick = () => deletePost(p);
    box.appendChild(div);
  });
}

function addPost() {
  const title = $('title').value.trim(), content = $('content').value.trim(), date = $('date').value;
  if (!title || !content) return alert('Add a title and content!');
  const local = JSON.parse(localStorage.getItem('my-posts') || '[]');
  local.unshift({ title, content, date: date || new Date().toISOString().slice(0,10) });
  localStorage.setItem('my-posts', JSON.stringify(local));
  $('title').value = $('content').value = '';
  render($('search').value);
}

function deletePost(post) {
  let local = JSON.parse(localStorage.getItem('my-posts') || '[]');
  local = local.filter(p => !(p.title === post.title && p.date === post.date));
  localStorage.setItem('my-posts', JSON.stringify(local));
  render($('search').value);
}

function exportPosts() {
  const local = JSON.parse(localStorage.getItem('my-posts') || '[]');
  const all = [...local, ...BUILT_IN_POSTS];
  const text = 'const BUILT_IN_POSTS = ' + JSON.stringify(all, null, 2) + ';';
  navigator.clipboard.writeText(text).then(() => alert('Copied! Paste it into posts.js, commit & push to update your live site.'));
}

$('search').oninput = e => render(e.target.value);
render();
