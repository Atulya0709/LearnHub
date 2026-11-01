/*
  LearnHub frontend demo
  All learning data is stored in this browser with localStorage.
  This is a UI prototype: authentication, video delivery and server security
  are intentionally not implemented in this frontend-only version.
*/

const courses = [
  {
    id: 'web-dev', title: 'Complete Web Development', category: 'Development', level: 'Beginner', duration: '8h 20m', lessonsCount: 12,
    instructor: 'Aarav Sharma', initials: 'AS', rating: '4.9', students: '2.4k', icon: '⌘', cover: 'cover-web',
    description: 'Go from your first HTML page to a responsive website. Learn the foundations of the web with hands-on lessons and practical projects.',
    outcomes: ['Structure pages with semantic HTML', 'Style responsive layouts with CSS', 'Add interactions using JavaScript', 'Build and publish a small portfolio website'],
    lessons: [
      ['Welcome to web development', '12 min', 'Learn how websites work and what you will build.'],
      ['HTML: your first page', '28 min', 'Create the structure of a page using headings, links, images and semantic elements.'],
      ['CSS foundations', '35 min', 'Use selectors, the box model, spacing and typography to style your page.'],
      ['Responsive layouts', '42 min', 'Build layouts that adapt to mobile, tablet and desktop screens.'],
      ['JavaScript essentials', '48 min', 'Work with variables, functions, conditions and events.'],
      ['DOM and interactivity', '45 min', 'Select elements and make your interface respond to user actions.']
    ]
  },
  {
    id: 'python', title: 'Python Programming: Zero to Hero', category: 'Programming', level: 'Beginner', duration: '6h 45m', lessonsCount: 10,
    instructor: 'Meera Iyer', initials: 'MI', rating: '4.9', students: '3.1k', icon: '🐍', cover: 'cover-python',
    description: 'Start programming with Python. Understand the core concepts, practise writing clean code, and create small programs of your own.',
    outcomes: ['Understand variables and data types', 'Use conditions, loops and functions', 'Work with lists and dictionaries', 'Create small command-line projects'],
    lessons: [
      ['Meet Python', '10 min', 'Understand Python and set up your first program.'],
      ['Variables and data types', '32 min', 'Store and work with strings, numbers and Boolean values.'],
      ['Operators and expressions', '25 min', 'Perform calculations and compare values.'],
      ['Conditions and decisions', '35 min', 'Use if, elif and else to control program flow.'],
      ['Loops and repetition', '40 min', 'Repeat tasks with for and while loops.'],
      ['Functions', '38 min', 'Organise code into reusable functions.']
    ]
  },
  {
    id: 'ui-design', title: 'UI Design Essentials', category: 'Design', level: 'Beginner', duration: '4h 30m', lessonsCount: 8,
    instructor: 'Riya Kapoor', initials: 'RK', rating: '4.8', students: '1.8k', icon: '✳', cover: 'cover-design',
    description: 'Learn the building blocks of clear, beautiful interfaces. Explore layout, colour, typography and the thinking behind useful design.',
    outcomes: ['Understand visual hierarchy', 'Choose useful colours and type', 'Create consistent spacing systems', 'Design a simple app screen'],
    lessons: [
      ['What makes a good interface?', '18 min', 'Explore usability, clarity and visual communication.'],
      ['Layout and visual hierarchy', '34 min', 'Guide attention with alignment, spacing and scale.'],
      ['Colour and contrast', '29 min', 'Build palettes that are attractive and accessible.'],
      ['Typography basics', '31 min', 'Choose typefaces and create a readable type scale.'],
      ['Designing components', '36 min', 'Create buttons, cards, inputs and reusable patterns.']
    ]
  },
  {
    id: 'data-analytics', title: 'Data Analytics Foundations', category: 'Data', level: 'Intermediate', duration: '7h 10m', lessonsCount: 9,
    instructor: 'Kabir Verma', initials: 'KV', rating: '4.8', students: '1.5k', icon: '▥', cover: 'cover-data',
    description: 'Turn raw information into useful insights. Learn how to ask better questions, organise data and communicate findings clearly.',
    outcomes: ['Understand the analytics workflow', 'Clean and organise datasets', 'Explore data with summary statistics', 'Communicate insights with charts'],
    lessons: [
      ['An introduction to data', '16 min', 'Understand data types and the role of an analyst.'],
      ['Asking useful questions', '25 min', 'Turn a business problem into an analytical question.'],
      ['Cleaning a dataset', '43 min', 'Identify missing, duplicated and inconsistent values.'],
      ['Exploring patterns', '39 min', 'Use summaries and comparisons to find patterns.'],
      ['Visualising your findings', '41 min', 'Choose charts that make your findings clear.']
    ]
  },
  {
    id: 'digital-marketing', title: 'Digital Marketing Starter', category: 'Marketing', level: 'Beginner', duration: '5h 05m', lessonsCount: 7,
    instructor: 'Sana Khan', initials: 'SK', rating: '4.7', students: '980', icon: '↗', cover: 'cover-marketing',
    description: 'Get a practical introduction to online marketing. Learn how content, search, social media and measurement work together.',
    outcomes: ['Understand digital marketing channels', 'Plan useful content', 'Learn basic SEO principles', 'Measure campaign performance'],
    lessons: [
      ['The digital landscape', '20 min', 'See how the main online marketing channels connect.'],
      ['Know your audience', '30 min', 'Build a simple audience profile and customer journey.'],
      ['Content that helps', '34 min', 'Plan content around real audience needs.'],
      ['Search engine basics', '37 min', 'Understand keywords, pages and search intent.'],
      ['Measure what matters', '32 min', 'Use simple metrics to evaluate your work.']
    ]
  },
  {
    id: 'business-skills', title: 'Business & Project Basics', category: 'Business', level: 'Intermediate', duration: '3h 50m', lessonsCount: 6,
    instructor: 'Dev Malhotra', initials: 'DM', rating: '4.8', students: '1.2k', icon: '◈', cover: 'cover-business',
    description: 'Build confidence with the everyday tools of planning, communication and project work. Suitable for students and new professionals.',
    outcomes: ['Set clear project goals', 'Break work into manageable tasks', 'Communicate with a team', 'Review risks and progress'],
    lessons: [
      ['Thinking in projects', '20 min', 'Understand projects, outcomes and constraints.'],
      ['Setting a clear goal', '29 min', 'Write goals that are specific and measurable.'],
      ['Planning the work', '35 min', 'Break a larger task into smaller activities.'],
      ['Working with people', '30 min', 'Share updates and communicate clearly.'],
      ['Review and improve', '26 min', 'Track progress and learn from results.']
    ]
  }
];

const quizQuestions = [
  { q: 'Which choice best describes the purpose of a semantic HTML element?', options: ['To add meaning to page structure', 'To speed up the internet', 'To store passwords', 'To create a database'], answer: 0 },
  { q: 'Which technology is mainly used to style a web page?', options: ['Python', 'CSS', 'MySQL', 'DNS'], answer: 1 },
  { q: 'What does JavaScript commonly add to a website?', options: ['Physical storage', 'Network cables', 'Interactivity', 'A database server'], answer: 2 }
];

const STORAGE = {
  user: 'learnhub_user_v1', enrollments: 'learnhub_enrollments_v1',
  progress: 'learnhub_progress_v1', favorites: 'learnhub_favorites_v1', theme: 'learnhub_theme_v1'
};
const state = {
  page: 'home', currentCourseId: null, currentLessonIndex: 0,
  category: 'All', search: '', level: 'all', authMode: 'login', pendingEnroll: null
};

function readStore(key, fallback) {
  try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
  catch (error) { console.warn('Could not read local storage:', error); return fallback; }
}
function writeStore(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { showToast('Browser storage is unavailable.'); }
}
function getUser() { return readStore(STORAGE.user, null); }
function getEnrollments() { return readStore(STORAGE.enrollments, []); }
function getProgress() { return readStore(STORAGE.progress, {}); }
function getFavorites() { return readStore(STORAGE.favorites, []); }
function getCourse(id) { return courses.find(course => course.id === id); }
function completedFor(courseId) { return getProgress()[courseId] || []; }
function coursePercent(courseId) {
  const course = getCourse(courseId);
  if (!course) return 0;
  return Math.round((completedFor(courseId).length / course.lessons.length) * 100);
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}
function courseCard(course) {
  const saved = getFavorites().includes(course.id);
  return `<article class="course-card" data-open-course="${course.id}" tabindex="0" role="button" aria-label="Open ${escapeHTML(course.title)}">
    <div class="course-cover ${course.cover}"><span class="cover-decoration"></span><span class="cover-symbol">${course.icon}</span><span class="course-tag">${course.category}</span>
      <button class="favorite-btn ${saved ? 'saved' : ''}" data-favorite="${course.id}" aria-label="${saved ? 'Remove from' : 'Add to'} favourites" title="${saved ? 'Remove from' : 'Add to'} favourites">${saved ? '♥' : '♡'}</button>
    </div>
    <div class="course-info"><div class="course-meta"><span>${course.level}</span><span>${course.duration}</span><span>${course.lessonsCount} lessons</span></div>
      <h3>${escapeHTML(course.title)}</h3><p>${escapeHTML(course.description)}</p>
      <div class="course-card-bottom"><span class="instructor"><span class="instructor-avatar">${course.initials}</span>${escapeHTML(course.instructor)}</span><span class="course-rating">★ ${course.rating} <span style="color:var(--muted);font-weight:500">(${course.students})</span></span></div>
    </div></article>`;
}
function renderHome() {
  document.getElementById('featuredCourses').innerHTML = courses.slice(0, 3).map(courseCard).join('');
}
function renderCategories() {
  const categories = ['All', ...new Set(courses.map(course => course.category))];
  document.getElementById('categoryFilters').innerHTML = categories.map(category => `<button class="category-chip ${state.category === category ? 'active' : ''}" data-category="${category}">${category}</button>`).join('');
}
function renderCatalog() {
  renderCategories();
  const term = state.search.toLowerCase();
  const filtered = courses.filter(course => {
    const matchesSearch = `${course.title} ${course.description} ${course.instructor} ${course.category}`.toLowerCase().includes(term);
    const matchesCategory = state.category === 'All' || course.category === state.category;
    const matchesLevel = state.level === 'all' || course.level === state.level;
    return matchesSearch && matchesCategory && matchesLevel;
  });
  document.getElementById('allCourses').innerHTML = filtered.map(courseCard).join('');
  document.getElementById('courseCount').textContent = filtered.length;
  document.getElementById('noCourses').classList.toggle('hidden', filtered.length !== 0);
  document.getElementById('allCourses').classList.toggle('hidden', filtered.length === 0);
}
function renderDashboard() {
  const user = getUser();
  document.getElementById('dashboardGreeting').textContent = user ? `Welcome back, ${user.name.split(' ')[0]}!` : 'Welcome to your learning space!';
  const enrollments = getEnrollments();
  const allCompleted = Object.values(getProgress()).reduce((sum, lessons) => sum + lessons.length, 0);
  const average = enrollments.length ? Math.round(enrollments.reduce((sum, id) => sum + coursePercent(id), 0) / enrollments.length) : 0;
  document.getElementById('dashboardStats').innerHTML = `
    <div class="dashboard-stat"><span class="dashboard-stat-icon">▤</span><div><strong>${enrollments.length}</strong><small>Courses enrolled</small></div></div>
    <div class="dashboard-stat"><span class="dashboard-stat-icon">✓</span><div><strong>${allCompleted}</strong><small>Lessons completed</small></div></div>
    <div class="dashboard-stat"><span class="dashboard-stat-icon">↗</span><div><strong>${average}%</strong><small>Average progress</small></div></div>`;
  document.getElementById('completedCount').textContent = allCompleted;
  document.getElementById('snapshotBar').style.width = `${average}%`;
  document.getElementById('snapshotMessage').textContent = enrollments.length ? `You have made ${average}% average progress across your courses. Keep going!` : 'Start a course to build your learning momentum.';
  const list = enrollments.map(id => getCourse(id)).filter(Boolean);
  document.getElementById('myCourses').innerHTML = list.length ? list.map(course => {
    const percent = coursePercent(course.id);
    const done = completedFor(course.id).length;
    return `<article class="my-course-item"><div class="mini-cover ${course.cover}">${course.icon}</div><div class="my-course-copy"><h3>${escapeHTML(course.title)}</h3><p>${done} of ${course.lessons.length} lessons completed</p><div class="progress-line"><span style="width:${percent}%"></span></div><small class="progress-label">${percent}% complete</small></div><button class="button button-outline" data-open-course="${course.id}">Continue →</button></article>`;
  }).join('') : `<div class="empty-state"><div class="empty-icon">▤</div><h3>Your learning journey starts here</h3><p>You haven’t enrolled in a course yet. Explore the catalog and choose your first course.</p><button class="button button-primary" data-go="catalog">Explore courses →</button></div>`;
}
function renderCourseDetail(courseId) {
  const course = getCourse(courseId);
  if (!course) return navigate('catalog');
  state.currentCourseId = courseId;
  const enrolled = getEnrollments().includes(courseId);
  const done = completedFor(courseId);
  const percent = coursePercent(courseId);
  const lessons = course.lessons.map((lesson, index) => `<div class="lesson-row ${done.includes(index) ? 'completed' : ''}"><span class="lesson-number">${done.includes(index) ? '✓' : String(index + 1).padStart(2, '0')}</span><div class="lesson-row-copy"><strong>${escapeHTML(lesson[0])}</strong><small>${lesson[1]} · ${done.includes(index) ? 'Completed' : 'Lesson'}</small></div><button data-open-lesson="${index}">${enrolled ? 'Open lesson →' : 'Preview →'}</button></div>`).join('');
  document.getElementById('courseDetailContent').innerHTML = `
    <div class="detail-hero"><div class="detail-copy"><span class="eyebrow">${course.category.toUpperCase()} · ${course.level.toUpperCase()}</span><h1>${escapeHTML(course.title)}</h1><p>${escapeHTML(course.description)}</p><div class="detail-meta"><span>★ ${course.rating} rating</span><span>◷ ${course.duration}</span><span>▤ ${course.lessons.length} lessons</span><span>By ${escapeHTML(course.instructor)}</span></div><div class="progress-label">${enrolled ? `${percent}% completed` : 'Beginner-friendly learning path'}</div></div><div class="detail-cover ${course.cover}"><span>${course.icon}</span></div></div>
    <div class="detail-columns"><section class="detail-section"><h2>Course content</h2><div class="lesson-list">${lessons}</div></section><aside class="detail-side-card"><span class="eyebrow">YOUR NEXT STEP</span><h3>${enrolled ? 'Keep your progress going' : 'Ready to get started?'}</h3><p style="font-size:11px;color:var(--muted);line-height:1.7">${enrolled ? 'Your progress is saved in this browser. Continue with the next lesson.' : 'Join this learning path and work through the lessons at your own pace.'}</p><button class="button button-primary" id="enrollCourseBtn" data-enroll="${course.id}">${enrolled ? 'Continue learning →' : 'Enroll for free →'}</button><ul>${course.outcomes.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul><button class="text-link" style="margin-top:12px" data-start-quiz>Try a sample quiz ↗</button></aside></div>`;
}
function renderLesson(courseId, lessonIndex) {
  const course = getCourse(courseId);
  if (!course) return navigate('catalog');
  state.currentCourseId = courseId;
  state.currentLessonIndex = Math.max(0, Math.min(lessonIndex, course.lessons.length - 1));
  const lesson = course.lessons[state.currentLessonIndex];
  const done = completedFor(courseId);
  document.getElementById('backToCourse').dataset.backCourse = courseId;
  document.getElementById('lessonContent').innerHTML = `
    <div class="lesson-layout"><section class="lesson-main"><div class="video-placeholder" id="videoPlaceholder"><button class="video-play" id="previewPlay" aria-label="Play lesson preview">▶</button><p id="videoCaption">LESSON PREVIEW · VIDEO PLAYER PLACEHOLDER</p></div><span class="eyebrow" style="margin-top:22px">LESSON ${state.currentLessonIndex + 1} OF ${course.lessons.length} · ${course.category.toUpperCase()}</span><h1>${escapeHTML(lesson[0])}</h1><p>${escapeHTML(lesson[2])} This lesson is part of <strong>${escapeHTML(course.title)}</strong>. Use the course outline to move between topics and mark each lesson complete as you study.</p><div class="lesson-actions"><button class="button button-primary" id="completeLessonBtn">${done.includes(state.currentLessonIndex) ? '✓ Completed' : 'Mark as complete'}</button><button class="button button-outline" id="nextLessonBtn">${state.currentLessonIndex === course.lessons.length - 1 ? 'Back to course' : 'Next lesson →'}</button></div><div class="lesson-note"><strong>Learning tip</strong><p>Pause after this topic and try explaining the key idea in your own words. A quick recap helps the concept stick.</p></div></section>
    <aside class="lesson-sidebar"><span class="eyebrow">COURSE OUTLINE</span><h3>${escapeHTML(course.title)}</h3>${course.lessons.map((item, index) => `<div class="sidebar-lesson ${index === state.currentLessonIndex ? 'active' : ''} ${done.includes(index) ? 'done' : ''}" data-open-lesson="${index}"><span class="side-lesson-number">${done.includes(index) ? '✓' : index + 1}</span><span>${escapeHTML(item[0])}</span></div>`).join('')}</aside></div>`;
}
function navigate(page) {
  const allowed = ['home', 'catalog', 'dashboard', 'course', 'lesson'];
  if (!allowed.includes(page)) page = 'home';
  state.page = page;
  document.querySelectorAll('.page').forEach(section => section.classList.toggle('active', section.dataset.pageSection === page));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.page === page || (page === 'course' && link.dataset.page === 'catalog') || (page === 'lesson' && link.dataset.page === 'dashboard')));
  document.getElementById('mainContent').focus({ preventScroll: true });
  document.getElementById('mainNav').classList.remove('open');
  document.getElementById('mobileMenuBtn').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'home') renderHome();
  if (page === 'catalog') renderCatalog();
  if (page === 'dashboard') renderDashboard();
}
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}
function openAuth(mode = 'login') {
  setAuthMode(mode);
  document.getElementById('authModal').classList.remove('hidden');
  document.getElementById('authEmail').focus();
}
function closeModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => modal.classList.add('hidden'));
}
function setAuthMode(mode) {
  state.authMode = mode;
  const register = mode === 'register';
  document.getElementById('authTitle').textContent = register ? 'Create your account' : 'Welcome back';
  document.getElementById('authSubtitle').textContent = register ? 'A few details and you’re ready to learn.' : 'Sign in to continue your learning journey.';
  document.getElementById('authEyebrow').textContent = register ? 'START YOUR LEARNING JOURNEY' : 'WELCOME TO LEARNHUB';
  document.getElementById('nameField').classList.toggle('hidden', !register);
  document.getElementById('authName').required = register;
  document.getElementById('authSubmit').innerHTML = register ? 'Create account <span>→</span>' : 'Sign in <span>→</span>';
  document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.authMode === mode));
  document.getElementById('authError').textContent = '';
}
function updateAccountArea() {
  const user = getUser();
  const area = document.getElementById('accountArea');
  if (!user) {
    area.innerHTML = '<button class="button button-primary button-small" id="openAuthBtn">Sign in</button>';
    return;
  }
  const initials = user.name.split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase();
  area.innerHTML = `<div class="account-menu"><button class="account-chip" id="accountMenuBtn" title="Account menu"><span>${escapeHTML(initials)}</span><b>${escapeHTML(user.name.split(' ')[0])}</b>⌄</button><div class="account-dropdown hidden" id="accountDropdown"><button data-go="dashboard">My learning</button><button id="signOutBtn">Sign out</button></div></div>`;
}
function toggleFavorite(courseId) {
  let favorites = getFavorites();
  favorites = favorites.includes(courseId) ? favorites.filter(id => id !== courseId) : [...favorites, courseId];
  writeStore(STORAGE.favorites, favorites);
  renderHome();
  if (state.page === 'catalog') renderCatalog();
  showToast(favorites.includes(courseId) ? 'Added to your favourites.' : 'Removed from your favourites.');
}
function enroll(courseId) {
  if (!getUser()) { state.pendingEnroll = courseId; openAuth('register'); return; }
  const ids = getEnrollments();
  if (!ids.includes(courseId)) ids.push(courseId);
  writeStore(STORAGE.enrollments, ids);
  renderCourseDetail(courseId);
  showToast('You’re enrolled! Your learning journey begins now.');
}
function markLessonComplete() {
  const courseId = state.currentCourseId;
  const user = getUser();
  if (!user) { openAuth('login'); return; }
  const progress = getProgress();
  const done = progress[courseId] || [];
  if (!done.includes(state.currentLessonIndex)) done.push(state.currentLessonIndex);
  progress[courseId] = done;
  writeStore(STORAGE.progress, progress);
  renderLesson(courseId, state.currentLessonIndex);
  showToast('Lesson marked as complete. Nice work!');
}
function openQuiz() {
  document.getElementById('quizQuestions').innerHTML = quizQuestions.map((question, index) => `<div class="quiz-question"><strong>${index + 1}. ${escapeHTML(question.q)}</strong>${question.options.map((option, optionIndex) => `<label class="quiz-option"><input type="radio" name="question-${index}" value="${optionIndex}" required /> ${escapeHTML(option)}</label>`).join('')}</div>`).join('');
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizForm').classList.remove('hidden');
  document.getElementById('quizModal').classList.remove('hidden');
}

// Navigation, cards and buttons (event delegation keeps dynamically rendered UI interactive).
document.addEventListener('click', event => {
  const target = event.target;
  const close = target.closest('[data-close-modal]');
  if (close) { closeModals(); return; }
  if (target.classList.contains('modal-backdrop')) { closeModals(); return; }

  const go = target.closest('[data-go]');
  if (go) { navigate(go.dataset.go); return; }
  const nav = target.closest('[data-page]');
  if (nav && nav.classList.contains('nav-link')) { navigate(nav.dataset.page); return; }

  const favorite = target.closest('[data-favorite]');
  if (favorite) { event.stopPropagation(); toggleFavorite(favorite.dataset.favorite); return; }
  const category = target.closest('[data-category]');
  if (category) { state.category = category.dataset.category; renderCatalog(); return; }
  const openCourse = target.closest('[data-open-course]');
  if (openCourse) {
    if (target.closest('button[data-favorite]')) return;
    renderCourseDetail(openCourse.dataset.openCourse); navigate('course');
    return;
  }
  const openLesson = target.closest('[data-open-lesson]');
  if (openLesson) {
    if (!getEnrollments().includes(state.currentCourseId)) { showToast('Enroll in this course to open its lessons.'); return; }
    const index = Number(openLesson.dataset.openLesson);
    renderLesson(state.currentCourseId, index); navigate('lesson'); return;
  }
  const enrollButton = target.closest('[data-enroll]');
  if (enrollButton) { enroll(enrollButton.dataset.enroll); return; }
  if (target.id === 'backToCourse') { renderCourseDetail(target.dataset.backCourse); navigate('course'); return; }
  if (target.id === 'completeLessonBtn') { markLessonComplete(); return; }
  if (target.id === 'nextLessonBtn') {
    const course = getCourse(state.currentCourseId);
    if (state.currentLessonIndex >= course.lessons.length - 1) { renderCourseDetail(course.id); navigate('course'); }
    else { renderLesson(course.id, state.currentLessonIndex + 1); navigate('lesson'); }
    return;
  }
  if (target.id === 'previewPlay') {
    document.getElementById('videoCaption').textContent = 'VIDEO CONTENT WILL BE CONNECTED IN A FUTURE BACKEND STAGE';
    showToast('This is a frontend player placeholder.'); return;
  }
  if (target.closest('[data-start-quiz]')) { openQuiz(); return; }
  if (target.id === 'openAuthBtn') { openAuth('login'); return; }
  if (target.matches('[data-auth-mode]')) { setAuthMode(target.dataset.authMode); return; }
  if (target.id === 'accountMenuBtn') { document.getElementById('accountDropdown').classList.toggle('hidden'); return; }
  if (target.id === 'signOutBtn') { localStorage.removeItem(STORAGE.user); updateAccountArea(); renderDashboard(); showToast('You have signed out.'); return; }
  if (target.id === 'themeToggle') {
    document.body.classList.toggle('dark');
    writeStore(STORAGE.theme, document.body.classList.contains('dark') ? 'dark' : 'light');
    return;
  }
  if (target.id === 'mobileMenuBtn') {
    const navElement = document.getElementById('mainNav');
    navElement.classList.toggle('open');
    target.setAttribute('aria-expanded', navElement.classList.contains('open') ? 'true' : 'false');
    return;
  }
  if (target.id === 'clearFilters') {
    state.search = ''; state.category = 'All'; state.level = 'all';
    document.getElementById('courseSearch').value = '';
    document.getElementById('levelFilter').value = 'all';
    renderCatalog(); return;
  }
});

document.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.course-card[role="button"]')) {
    event.preventDefault();
    renderCourseDetail(event.target.dataset.openCourse); navigate('course');
  }
  if (event.key === 'Escape') closeModals();
});

document.getElementById('courseSearch').addEventListener('input', event => { state.search = event.target.value.trim(); renderCatalog(); });
document.getElementById('levelFilter').addEventListener('change', event => { state.level = event.target.value; renderCatalog(); });
document.getElementById('authForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('authEmail').value.trim().toLowerCase();
  const password = document.getElementById('authPassword').value;
  const name = document.getElementById('authName').value.trim();
  const error = document.getElementById('authError');
  if (!email || !password || password.length < 6) { error.textContent = 'Enter a valid email and a password of at least 6 characters.'; return; }
  if (state.authMode === 'register' && name.length < 2) { error.textContent = 'Please enter your name (at least 2 characters).'; return; }
  // Demo sign-in only: no password is stored or checked by a server.
  const existing = readStore('learnhub_demo_profiles_v1', []);
  let profile = existing.find(item => item.email === email);
  if (state.authMode === 'register') {
    profile = { name, email };
    const updated = [...existing.filter(item => item.email !== email), profile];
    writeStore('learnhub_demo_profiles_v1', updated);
  } else if (!profile) {
    profile = { name: email.split('@')[0].replace(/[._-]/g, ' '), email };
  }
  writeStore(STORAGE.user, profile);
  updateAccountArea();
  closeModals();
  renderDashboard();
  showToast(`Welcome${profile.name ? `, ${profile.name.split(' ')[0]}` : ''}!`);
  if (state.pendingEnroll) {
    const courseId = state.pendingEnroll; state.pendingEnroll = null; enroll(courseId); navigate('course');
  }
});
document.getElementById('quizForm').addEventListener('submit', event => {
  event.preventDefault();
  const answers = quizQuestions.map((question, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    return selected ? Number(selected.value) : -1;
  });
  const score = answers.reduce((total, answer, index) => total + (answer === quizQuestions[index].answer ? 1 : 0), 0);
  const result = document.getElementById('quizResult');
  result.innerHTML = `<strong>${score} / ${quizQuestions.length} correct</strong><p>${score === quizQuestions.length ? 'Excellent work! You got every answer right.' : 'Good effort. Review the lessons and try again to improve your score.'}</p><button class="text-link" id="retryQuiz">Try again ↻</button>`;
  result.classList.remove('hidden');
  document.getElementById('quizForm').classList.add('hidden');
});
document.addEventListener('click', event => {
  if (event.target.id === 'retryQuiz') openQuiz();
});

// Initial page setup.
document.getElementById('currentYear').textContent = new Date().getFullYear();
if (readStore(STORAGE.theme, 'light') === 'dark') document.body.classList.add('dark');
updateAccountArea();
renderHome();
renderCatalog();
renderDashboard();
