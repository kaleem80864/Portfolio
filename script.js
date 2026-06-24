// Android Developer Portfolio - Core JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Phone Mockup - Simulated Clock
    const updatePhoneTime = () => {
        const phoneTimeElement = document.getElementById('phone-time');
        if (phoneTimeElement) {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // 12-hour format
            phoneTimeElement.textContent = `${hours}:${minutes} ${ampm}`;
        }
    };
    updatePhoneTime();
    setInterval(updatePhoneTime, 30000); // update every 30 seconds

    // 2. Phone Mockup - Project Switcher Data
    const projects = {
        'task-manager': {
            title: 'TaskFlow',
            tagline: 'Modern Productivity Task Manager',
            icon: '📋',
            color: '#4285F4', // Google Blue
            screenHtml: `
                <div class="app-screen-task">
                    <div class="app-header" style="background: #4285F4;">
                        <span>TaskFlow</span>
                        <span class="app-header-icon">🔍</span>
                    </div>
                    <div class="app-body">
                        <div class="app-card-stat">
                            <div class="stat-num">5</div>
                            <div class="stat-label">Tasks Pending Today</div>
                        </div>
                        <div class="task-list">
                            <div class="task-item done">
                                <span class="task-check">✓</span>
                                <span class="task-name">Review Hilt dependency graph</span>
                            </div>
                            <div class="task-item">
                                <span class="task-check">○</span>
                                <span class="task-name">Refactor Room Database migration</span>
                            </div>
                            <div class="task-item">
                                <span class="task-check">○</span>
                                <span class="task-name">Write UI tests using Espresso</span>
                            </div>
                            <div class="task-item">
                                <span class="task-check">○</span>
                                <span class="task-name">Design Jetpack Compose dashboard</span>
                            </div>
                        </div>
                        <div class="app-fab" style="background: #4285F4;">+</div>
                    </div>
                </div>
            `,
            techStack: ['Kotlin', 'Jetpack Compose', 'Room', 'Coroutines', 'Hilt'],
            desc: 'A high-performance Android productivity application designed with offline-first architecture. Utilizes Coroutines and Room database for seamless offline state, Hilt for dependency injection, and Jetpack Compose for custom UI elements.',
            github: 'https://github.com/android-dev/taskflow'
        },
        'weather-app': {
            title: 'AeroWeather',
            tagline: 'Real-time Weather & Alerts',
            icon: '🌤️',
            color: '#00D2FF', // Cyan
            screenHtml: `
                <div class="app-screen-weather">
                    <div class="app-header" style="background: linear-gradient(135deg, #00C6FF, #0072FF);">
                        <span>AeroWeather</span>
                        <span class="app-header-icon">⚙️</span>
                    </div>
                    <div class="app-body weather-bg">
                        <div class="weather-temp-container">
                            <div class="weather-icon-large">🌤️</div>
                            <div class="weather-temp">72°F</div>
                            <div class="weather-desc">Partly Cloudy</div>
                            <div class="weather-loc">San Francisco, CA</div>
                        </div>
                        <div class="weather-forecast">
                            <div class="forecast-day"><span>Mon</span><span>🌤️</span><span>72°</span></div>
                            <div class="forecast-day"><span>Tue</span><span>🌧️</span><span>64°</span></div>
                            <div class="forecast-day"><span>Wed</span><span>⛈️</span><span>58°</span></div>
                        </div>
                    </div>
                </div>
            `,
            techStack: ['Kotlin', 'MVI Architecture', 'Retrofit', 'Flow', 'Moshi'],
            desc: 'A weather application utilizing an MVI (Model-View-Intent) pattern, fetching data from a REST API using Retrofit and Flow. It provides push notifications for severe weather conditions and handles networking states gracefully with full offline caching.',
            github: 'https://github.com/android-dev/aeroweather'
        },
        'social-app': {
            title: 'ConnectUs',
            tagline: 'Decentralized Social Circle',
            icon: '💬',
            color: '#EC4899', // Pink
            screenHtml: `
                <div class="app-screen-social">
                    <div class="app-header" style="background: #EC4899;">
                        <span>ConnectUs</span>
                        <span class="app-header-icon">💬</span>
                    </div>
                    <div class="app-body">
                        <div class="feed-item">
                            <div class="feed-user">
                                <span class="feed-avatar">🐱</span>
                                <div>
                                    <div class="feed-username">Alex Rivera</div>
                                    <div class="feed-time">2h ago</div>
                                </div>
                            </div>
                            <div class="feed-content">Just finished setting up GitHub Actions for the Android project! CI/CD pipelines are running perfectly. 🚀</div>
                            <div class="feed-actions"><span>❤️ 24</span> <span>💬 5</span></div>
                        </div>
                        <div class="feed-item">
                            <div class="feed-user">
                                <span class="feed-avatar">🦊</span>
                                <div>
                                    <div class="feed-username">Sarah Chen</div>
                                    <div class="feed-time">4h ago</div>
                                </div>
                            </div>
                            <div class="feed-content">Jetpack Compose makes building lists so much faster compared to RecyclerView. Loving the declarative syntax.</div>
                            <div class="feed-actions"><span>❤️ 42</span> <span>💬 12</span></div>
                        </div>
                    </div>
                </div>
            `,
            techStack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Clean Architecture', 'Paging 3'],
            desc: 'A social feed Android application built following Clean Architecture guidelines. Connects to a real-time Firestore database and uses Paging 3 to efficiently stream lists. Features user profiles, real-time message rooms, and media sharing.',
            github: 'https://github.com/android-dev/connectus'
        }
    };

    const projectCards = document.querySelectorAll('.project-card-trigger');
    const phoneScreenInner = document.getElementById('phone-screen-inner');
    const phoneHomeBtn = document.getElementById('phone-home-btn');
    const projectTitleEl = document.getElementById('project-detail-title');
    const projectTaglineEl = document.getElementById('project-detail-tagline');
    const projectDescEl = document.getElementById('project-detail-desc');
    const projectTechStackEl = document.getElementById('project-detail-tech');
    const projectGithubLink = document.getElementById('project-detail-github');

    const loadProjectIntoPhone = (projectId) => {
        const data = projects[projectId];
        if (!data) return;

        // Add fading transition animation to phone screen
        phoneScreenInner.classList.add('switching');
        
        setTimeout(() => {
            // Update mockup screen
            phoneScreenInner.innerHTML = data.screenHtml;
            phoneScreenInner.classList.remove('switching');

            // Update external info panel
            projectTitleEl.textContent = data.title;
            projectTaglineEl.textContent = data.tagline;
            projectDescEl.textContent = data.desc;
            
            // Update tech stack badges
            projectTechStackEl.innerHTML = '';
            data.techStack.forEach(tech => {
                const span = document.createElement('span');
                span.className = 'tech-badge';
                span.textContent = tech;
                projectTechStackEl.appendChild(span);
            });

            // Update details links
            projectGithubLink.href = data.github;
        }, 200);

        // Highlight active trigger card
        projectCards.forEach(card => {
            if (card.dataset.project === projectId) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    };

    // Add click listeners to project list items
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            loadProjectIntoPhone(projectId);
        });
    });

    // Home Button resets to simulated Home Screen
    if (phoneHomeBtn) {
        phoneHomeBtn.addEventListener('click', () => {
            phoneScreenInner.classList.add('switching');
            setTimeout(() => {
                phoneScreenInner.innerHTML = `
                    <div class="phone-home-screen">
                        <div class="phone-widget">
                            <div class="widget-time" id="widget-time">10:42</div>
                            <div class="widget-date" id="widget-date">Monday, June 22</div>
                        </div>
                        <div class="phone-app-grid">
                            <div class="phone-app-icon project-card-trigger" data-project="task-manager">
                                <span class="app-icon-img">📋</span>
                                <span class="app-icon-label">TaskFlow</span>
                            </div>
                            <div class="phone-app-icon project-card-trigger" data-project="weather-app">
                                <span class="app-icon-img">🌤️</span>
                                <span class="app-icon-label">AeroWeather</span>
                            </div>
                            <div class="phone-app-icon project-card-trigger" data-project="social-app">
                                <span class="app-icon-img">💬</span>
                                <span class="app-icon-label">ConnectUs</span>
                            </div>
                        </div>
                    </div>
                `;
                
                // Re-bind listeners inside the home screen
                const internalIcons = phoneScreenInner.querySelectorAll('.phone-app-icon');
                internalIcons.forEach(icon => {
                    icon.addEventListener('click', () => {
                        const projectId = icon.dataset.project;
                        loadProjectIntoPhone(projectId);
                    });
                });

                // Update clock inside the widget
                const updateWidgetTime = () => {
                    const wTime = document.getElementById('widget-time');
                    const wDate = document.getElementById('widget-date');
                    if (wTime && wDate) {
                        const now = new Date();
                        let hours = now.getHours();
                        const minutes = String(now.getMinutes()).padStart(2, '0');
                        wTime.textContent = `${hours}:${minutes}`;
                        
                        const options = { weekday: 'long', month: 'long', day: 'numeric' };
                        wDate.textContent = now.toLocaleDateString('en-US', options);
                    }
                };
                updateWidgetTime();

                phoneScreenInner.classList.remove('switching');
            }, 200);
        });
    }

    // Load initial project on startup
    if (projectCards.length > 0) {
        loadProjectIntoPhone(projectCards[0].dataset.project);
    }

    // 3. Contact Form Interactive Feedback
    const contactForm = document.getElementById('contact-form');
    const formSubmitBtn = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const message = document.getElementById('form-message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            // Simulate Android Installation Progress for fun UI feedback
            const originalText = formSubmitBtn.innerHTML;
            formSubmitBtn.disabled = true;
            formSubmitBtn.style.position = 'relative';
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += 20;
                formSubmitBtn.innerHTML = `Sending Broadcast... ${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(interval);
                    formSubmitBtn.innerHTML = `✓ Message Dispatched Successfully!`;
                    formSubmitBtn.style.backgroundColor = '#3DDC84';
                    formSubmitBtn.style.color = '#0B0F19';
                    
                    // Show a toast message like Android
                    showToast('Message intent sent successfully!');

                    setTimeout(() => {
                        contactForm.reset();
                        formSubmitBtn.disabled = false;
                        formSubmitBtn.innerHTML = originalText;
                        formSubmitBtn.style.backgroundColor = '';
                        formSubmitBtn.style.color = '';
                    }, 3000);
                }
            }, 300);
        });
    }

    // Helper for Toast notifications
    const showToast = (message) => {
        let toast = document.getElementById('android-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'android-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    };

    // 4. Smooth scroll for Navigation links
    const navLinks = document.querySelectorAll('header nav a, .hero-cta a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(href);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 5. Scroll active states for navigation highlighting
    const sections = document.querySelectorAll('section');
    const headerNavLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 100;
            const height = sec.offsetHeight;
            if (top >= offset && top < offset + height) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        headerNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});
