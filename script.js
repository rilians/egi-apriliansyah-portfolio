const projectNotes = {
  misi: {
    kicker: 'FREELANCE / FULL-STACK DEVELOPMENT · EDUCATIONAL TECHNOLOGY', title: 'Misi Warga Cilik',
    liveUrl: 'https://misi-warga-cilik.vercel.app/',
    summary: 'A mobile-first educational web application built in a freelance technical collaboration to support a PGSD student’s final research. The product turns learning content into an approachable, interactive experience for primary-school children.',
    context: 'The concept needed to become a usable web experience with clear orientation for young learners, learning objectives, interactive digital comics, and quizzes that could keep track of learning progress.',
    work: ['Built the web application from the ground up using Next.js, React, and Tailwind CSS.', 'Implemented responsive, mobile-first layouts and child-friendly navigation and interaction patterns.', 'Developed the main menu, usage guide, and learning-objectives pages.', 'Built an interactive digital comic reader and quiz modules with state management to track learning progress.', 'Managed routing and cross-page navigation, then deployed the application on Vercel.'],
    outcome: 'Delivered a functional, responsive web application that translates the educational concept into an interactive product and is ready for direct testing with its intended primary-school audience. User-impact metrics have not been claimed here.',
    learning: 'A good educational interface should make the next step obvious, while keeping the technology quiet enough for the learning experience to remain at the center.'
  },
  event: {
    kicker: 'PROJECT COORDINATION / LEADERSHIP', title: 'Technology Seminar & Festival',
    summary: 'A university technology event coordinated across multiple committees. My role was to help turn a broad event goal into a workable plan, keep the moving parts visible, and follow through from preparation to event day.',
    context: 'A multi-division event required shared timelines, clear ownership, budget awareness, and fast communication when operational issues appeared.',
    work: ['Coordinated 25 committee members across divisions.', 'Organized task assignments, timelines, and follow-up actions.', 'Managed an IDR 45 million budget allocation.', 'Supported delivery for more than 500 attendees.'],
    outcome: 'The event was delivered with 500+ attendees. The work strengthened my practical understanding of coordination, accountability, stakeholder communication, and making decisions under time pressure.',
    learning: 'A timeline only works when every owner understands the next action — and knows where to raise a blocker.'
  },
  thesis: {
    kicker: 'SOFTWARE & DATA / ACADEMIC RESEARCH', title: 'Digital Promotion Intelligence',
    summary: 'My final project explores how historical digital-promotion data can be translated into a classification result and a human-readable recommendation.',
    context: 'The work combines the C4.5 decision-tree algorithm with Natural Language Generation (NLG) to classify relative promotion effectiveness and produce explanatory recommendations.',
    work: ['Designed a system concept around historical promotion data.', 'Applied a decision-tree approach for classification.', 'Connected model output to generated natural-language explanations.', 'Considered how results can help users interpret past promotion activity.'],
    outcome: 'The project brought data processing, model evaluation, system design, and explanatory output into one academic software project.',
    learning: 'A useful analytical system should not stop at a result; it should help a person understand what that result means.'
  },
  development: {
    kicker: 'SOFTWARE DEVELOPMENT / INTERNSHIP', title: 'Full-Stack Application Work',
    summary: 'During my Junior Full-Stack Programmer internship, I worked with application features across frontend and backend tasks and collaborated with other developers on bug resolution.',
    context: 'Application work requires translating expected behaviour into features, testing outcomes, and making sure issues are clearly communicated to the team.',
    work: ['Built and improved frontend and backend features using PHP and SQL.', 'Collaborated to identify, analyse, and fix bugs.', 'Supported feature testing and follow-up improvements.', 'Worked within a team development process.'],
    outcome: 'The internship gave me hands-on exposure to software delivery and helped me understand technical dependencies behind project plans.',
    learning: 'A well-described issue shortens the path from a problem report to a useful fix.'
  },
  bem: {
    kicker: 'ORGANIZATIONAL LEADERSHIP', title: 'Student Executive Board',
    summary: 'As Vice President of the university Student Executive Board, I helped coordinate programmes and maintain communication across teams and university stakeholders.',
    context: 'A broad student organisation depends on cross-team alignment, predictable communication, and follow-up when plans or priorities change.',
    work: ['Oversaw programmes across four ministries and more than 30 board members.', 'Facilitated recurring coordination and progress discussions.', 'Helped communicate the aspirations of 1,000+ students to university leadership.', 'Followed up on timelines and potential delivery risks.'],
    outcome: 'The role strengthened my ability to listen across groups, surface issues, communicate with stakeholders, and keep collective work moving.',
    learning: 'Leadership is not only about setting direction; it is also about making it easier for others to contribute.'
  },
  content: {
    kicker: 'CONTENT & COMMUNICATION', title: 'Digital Content Production',
    summary: 'As a Content Creator & Video Editor Assistant Intern, I supported the planning and production of social media content in collaboration with a creative team.',
    context: 'Content delivery involves more than editing: it needs a clear message, coordinated assets, a production calendar, and consistent follow-through.',
    work: ['Supported social media content planning and production.', 'Edited visual and audio materials for digital publication.', 'Worked with a creative team on content calendars.', 'Helped track publication timelines.'],
    outcome: 'The internship added a creative and audience-aware perspective to my technical and coordination experience.',
    learning: 'Good communication is a process: plan the message, make it clear, then deliver it on time.'
  }
};

const dialog = document.getElementById('caseDialog');
const dialogContent = document.getElementById('dialogContent');
const closeDialog = () => { if (dialog.open) dialog.close(); };

document.querySelectorAll('.case-open').forEach(button => {
  button.addEventListener('click', () => {
    const note = projectNotes[button.dataset.case];
    if (!note) return;
    dialogContent.innerHTML = `
      <div class="dialog-kicker">${note.kicker}</div>
      <h2 class="dialog-title" id="dialogTitle">${note.title}</h2>
      <p class="dialog-summary">${note.summary}</p>
      <div class="dialog-columns">
        <section class="dialog-section"><h4>The context</h4><p>${note.context}</p><h4 style="margin-top:22px">What I learned</h4><p><em>${note.learning}</em></p></section>
        <section class="dialog-section"><h4>My contribution</h4><ul>${note.work.map(item => `<li>${item}</li>`).join('')}</ul><h4 style="margin-top:22px">Outcome</h4><p>${note.outcome}</p></section>
      </div>
      ${note.liveUrl ? `<div class="dialog-live-link"><a class="button button-primary" href="${note.liveUrl}" target="_blank" rel="noopener noreferrer">Open the live project <span>↗</span></a></div>` : ''}`;
    dialog.showModal();
  });
});
document.getElementById('dialogClose').addEventListener('click', closeDialog);
document.getElementById('dialogCloseBottom').addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });

// Filter selected work by category.
const filterButtons = [...document.querySelectorAll('.filter-button')];
const projectCards = [...document.querySelectorAll('.project-card')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  projectCards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    const show = filter === 'all' || categories.includes(filter);
    card.classList.toggle('is-hidden', !show);
  });
}));

// Mobile navigation.
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
menuToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));

// Page reading progress and year.
const progressBar = document.getElementById('readingProgress');
function updateProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  const progress = max > 0 ? (doc.scrollTop / max) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Gentle reveal; content remains visible for reduced-motion settings or older browsers.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll('.section-heading, .project-card, .principle, .experience-item, .education-card, .credential-card, .skills-band, .contact-panel, .gallery-card, .gallery-intro-row, .gallery-bottom-note, .creative-card, .creative-intro-row, .creative-disclaimer');
  targets.forEach(target => target.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(target => observer.observe(target));
}



// Motion and interaction polish: subtle pointer light, scroll-aware navigation, photo gallery.
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector('.site-header');
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sectionTargets = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
function updateHeaderState() {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 18);
}
window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

if (!motionReduced && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const heroArt = document.querySelector('.hero-art');
  if (heroArt) {
    heroArt.addEventListener('pointermove', (event) => {
      const rect = heroArt.getBoundingClientRect();
      heroArt.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
      heroArt.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    });
    heroArt.addEventListener('pointerleave', () => {
      heroArt.style.setProperty('--pointer-x', '50%');
      heroArt.style.setProperty('--pointer-y', '45%');
    });
  }
}

if ('IntersectionObserver' in window && sectionTargets.length) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-25% 0px -62% 0px', threshold: 0 });
  sectionTargets.forEach(section => navObserver.observe(section));
}

const galleryCards = [...document.querySelectorAll('.gallery-card')];
galleryCards.forEach(card => {
  const img = card.querySelector('.gallery-photo-img');
  if (!img) return;
  const updatePhotoState = () => {
    const available = img.complete && img.naturalWidth > 0;
    card.classList.toggle('has-photo', available);
    card.classList.toggle('is-empty', !available);
  };
  img.addEventListener('load', updatePhotoState);
  img.addEventListener('error', updatePhotoState);
  if (img.complete) updatePhotoState();
});

const galleryLightbox = document.getElementById('galleryLightbox');
const galleryLightboxImage = document.getElementById('galleryLightboxImage');
const galleryLightboxTitle = document.getElementById('galleryLightboxTitle');
const galleryLightboxCaption = document.getElementById('galleryLightboxCaption');
const closeGalleryLightbox = () => { if (galleryLightbox?.open) galleryLightbox.close(); };
let toastTimeout;
function showPortfolioToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 3600);
}
document.querySelectorAll('.gallery-open').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.gallery-card');
    const image = card?.querySelector('.gallery-photo-img');
    if (!card || !image) return;
    if (!card.classList.contains('has-photo')) {
      showPortfolioToast(`Add your photo at ${card.dataset.filename} to activate this frame.`);
      return;
    }
    galleryLightboxImage.src = image.currentSrc || image.src;
    galleryLightboxImage.alt = image.alt || card.dataset.title || 'Portfolio photo';
    galleryLightboxTitle.textContent = card.dataset.title || 'A moment worth keeping.';
    galleryLightboxCaption.textContent = card.dataset.caption || '';
    if (!galleryLightbox.open) galleryLightbox.showModal();
  });
});
document.getElementById('galleryLightboxClose')?.addEventListener('click', closeGalleryLightbox);
galleryLightbox?.addEventListener('click', event => {
  if (event.target === galleryLightbox) closeGalleryLightbox();
});
galleryLightbox?.addEventListener('close', () => { if (galleryLightboxImage) galleryLightboxImage.src = ''; });


// Visual Stories: filter real landing-page projects and open accessible project notes.
const creativeFilterButtons = [...document.querySelectorAll('.creative-filter-button')];
const creativeCards = [...document.querySelectorAll('.creative-card')];
creativeFilterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.creativeFilter;
  creativeFilterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  creativeCards.forEach(card => {
    const show = filter === 'all' || card.dataset.creativeCategory === filter;
    card.classList.toggle('is-hidden', !show);
  });
}));

const creativeNotes = {
  alexander: {
    type: 'Editorial design / historical storytelling',
    title: 'Alexander — The Limit of Ambition',
    description: 'A self-initiated landing page that reframes a historical figure through an editorial lens. The design pairs an obsidian, marble, and muted-gold palette with clear typographic hierarchy, compact historical facts, and a sequence of visual explorations. The aim is to balance an atmospheric first impression with a narrative visitors can follow.',
    url: 'https://rilians.github.io/alexander/',
    noteTitle: 'Project context',
    noteBody: 'Independent historical/editorial design exploration. The page is presented as a portfolio project, not a commissioned history publication.'
  },
  brighton: {
    type: 'Sports identity / campaign and editorial design',
    title: 'Brighton — Same Sea, Bolder Tomorrows',
    description: 'An unofficial visual-identity concept built around Brighton’s coastal setting and supporter culture. The landing page gathers campaign-style posters, identity explorations, football culture, and tactical/editorial graphics under a consistent ocean-inspired art direction.',
    url: 'https://rilians.github.io/brighton/',
    noteTitle: 'Independent concept / not affiliated',
    noteBody: 'An unofficial fan/concept project. It is not affiliated with or endorsed by Brighton & Hove Albion; relevant club marks and identity elements remain the property of their respective owners.'
  },
  phantomhive: {
    type: 'Dark editorial / fictional archive experience',
    title: 'Ciel — The Phantomhive Archive',
    description: 'Ciel — The Phantomhive Archive is a fan-made landing-page concept shaped like a collector’s archive, with hero artwork titled “The Price of a Soul”. Ornate frames, dramatic contrast, chapter-based content, and a restrained gothic palette build an atmospheric experience around a fictional contract and its consequences.',
    url: 'https://rilians.github.io/the-phantomhive-archive/',
    noteTitle: 'Fan-made concept / rights notice',
    noteBody: 'An unofficial fan-made portfolio study, not affiliated with the series, publisher, or rights holders. Characters and underlying intellectual property belong to their respective owners.'
  }
};

const creativeDialog = document.getElementById('creativeDialog');
const creativeDialogTitle = document.getElementById('creativeDialogTitle');
const creativeDialogType = document.getElementById('creativeDialogType');
const creativeDialogDescription = document.getElementById('creativeDialogDescription');
const creativeDialogArt = document.getElementById('creativeDialogArt');
const creativeDialogLiveLink = document.getElementById('creativeDialogLiveLink');
const creativeDialogNoteTitle = document.getElementById('creativeDialogNoteTitle');
const creativeDialogNoteBody = document.getElementById('creativeDialogNoteBody');
function closeCreativeDialog() { if (creativeDialog?.open) creativeDialog.close(); }
document.querySelectorAll('[data-creative-open]').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.creative-card');
    const note = card ? creativeNotes[card.dataset.creativeId] : null;
    const stage = card?.querySelector('.design-art-stage');
    if (!card || !note || !stage || !creativeDialog) return;
    creativeDialogTitle.textContent = note.title;
    creativeDialogType.textContent = note.type;
    creativeDialogDescription.textContent = note.description;
    creativeDialogArt.replaceChildren(stage.cloneNode(true));
    creativeDialogArt.dataset.kind = card.dataset.creativeCategory;
    if (creativeDialogLiveLink) creativeDialogLiveLink.href = note.url;
    if (creativeDialogNoteTitle) creativeDialogNoteTitle.textContent = note.noteTitle;
    if (creativeDialogNoteBody) creativeDialogNoteBody.textContent = note.noteBody;
    if (!creativeDialog.open) creativeDialog.showModal();
  });
});
document.getElementById('creativeDialogClose')?.addEventListener('click', closeCreativeDialog);
creativeDialog?.addEventListener('click', event => { if (event.target === creativeDialog) closeCreativeDialog(); });
creativeDialog?.addEventListener('close', () => { if (creativeDialogArt) creativeDialogArt.replaceChildren(); });
