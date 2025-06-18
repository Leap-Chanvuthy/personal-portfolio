export const enProjects = [
  {
    id: 1,
    title: "Real Estate Platform",
    subtitle: "Capstone Project | Web & Mobile Real Estate System",
    body: `
  <p><strong>1. Project Introduction, Objective, Overview, and Literature Review</strong></p>
  <br/>
  <p>This project is a <strong>comprehensive digital real estate management system</strong> developed as a capstone project by a dedicated team. It includes a <strong>responsive website</strong>, a <strong>mobile application</strong>, and a robust <strong>backoffice admin dashboard</strong>.</p>

  <p><strong>Objective:</strong> To build an all-in-one platform that streamlines real estate operations, simplifies user interaction, and enhances management for agents, users, and administrators.</p>

  <p><strong>Overview:</strong> The system handles everything from property listings and advanced filtering to review systems, secure login with OTP, and full admin control. It targets both end-users and backend users to ensure a smooth experience across all layers.</p>

  <p><strong>Literature Review:</strong> The platform’s structure is influenced by well-established platforms like Zillow and local competitors. We analyzed their workflows and identified improvements to build a more efficient and localized real estate ecosystem.</p>

  <br/>

  <p><strong>2. Team Members and Responsibilities</strong></p>
  <br/>
  <ul>
    <li><strong>Mr. Kong Kannika</strong> – Advisor and Project Manager</li>
    <li><strong>Mr. Phat Panhareact</strong> – Lead Developer</li>
    <li><strong>Mr. Cheang Thornsopanha</strong> – Mobile Developer</li>
    <li><strong>Mr. Leap Chanvuthy</strong> – Web Developer</li>
    <li><strong>Mr. Lim Bunnan Vannuth</strong> – Backend Developer</li>
    <li><strong>Mr. Kong Phirom</strong> – Backend Developer</li>
    <li><strong>Mr. Sean David</strong> – Web Developer</li>
  </ul>

  <br/>

  <p><strong>3. Tools and Technologies</strong></p>
  <br/>
  <p>The project uses modern and scalable technologies including:</p>
  <ul>
    <li>Frontend: React, Tailwind CSS</li>
    <li>Mobile App: Flutter</li>
    <li>Backend: Laravel, MySQL</li>
    <li>State Management: Redux Toolkit</li>
    <li>APIs: Google Maps, Twilio (OTP), Resend (Email), Crisp (Chat)</li>
    <li>DevOps: Docker, GitHub</li>
    <li>Other: NodeMailer, Axios, React Icons</li>
  </ul>

  <br/>

  <p><strong>4. Functional and Non-Functional Requirements</strong></p>
  <br/>

  <p><strong>Functional Requirements:</strong></p>
  <ul>
    <li>User registration, login with 2FA (OTP)</li>
    <li>Property creation and filtering</li>
    <li>Dashboard for agents and users</li>
    <li>Review and rating for agents and properties</li>
    <li>Bookmark/favorite system</li>
    <li>Admin management of users and content</li>
  </ul>

  <p><strong>Non-Functional Requirements:</strong></p>
  <ul>
    <li>High responsiveness across devices</li>
    <li>Secure architecture with role-based access</li>
    <li>Scalable backend API services</li>
    <li>Good performance and SEO support</li>
  </ul>

  <br/>

  <p><strong>5. Features of the Website, App, and Backoffice System</strong></p>
  <br/>
  <ul>
    <li><strong>Website:</strong> Property search, filtering, user login/signup, profile, reviews, bookmarks</li>
    <li><strong>Mobile App:</strong> Same features as website optimized for mobile view, push notifications</li>
    <li><strong>Backoffice:</strong> Admin dashboard for property approval, user management, CMS settings, reports</li>
  </ul>

  <br/>

  <p><strong>6. How This Project Makes Life Easier</strong></p>
  <br/>
  <p>The system saves time for property buyers and agents by providing instant access to listings, efficient filters, and secure communication tools. For admins, the CMS simplifies the management of users, data, and operations, making real estate handling more organized, modern, and transparent.</p>
`
    ,
    tags: ["React", "Fillament", "Laravel", "Flutter", "Team Project", "Capstone", "CADT"],
    images: [
      "/projects/real-estate/thumbnail-1.png",
      "/projects/real-estate/thumbnail.png",
      "/projects/real-estate/team.png",
      "/projects/real-estate/website-1.png",
      "/projects/real-estate/website-2.png",
      "/projects/real-estate/website-3.png",
      "/projects/real-estate/website-4.png",
      "/projects/real-estate/back-office-1.png",
      "/projects/real-estate/back-office-2.png",
      "/projects/real-estate/back-office-3.png",
      "/projects/real-estate/back-office-4.png"
    ],
    githubRepo: [
      {
        title: "Frontend Repo",
        link: "https://github.com/Leap-Chanvuthy/real-estate-frontend"
      },
      {
        title: "Backend Repo",
        link: "https://github.com/Leap-Chanvuthy/real-estate-backend"
      },
      {
        title: "Mobile Repo",
        link: "N/A"
      }
    ]
  }, {
    id: 2,
    title: "Inventory & Production Management System",
    subtitle: "Custom-built Inventory & Production Management System + Web App for SMEs",
    body: `<h2><strong>Inventory &amp; Production Management System</strong></h2><p><br></p><h3><strong>1. Project Introduction</strong></h3><p><br></p><p>The <strong>Inventory and Production Management System</strong> is a fully custom-built web application developed to empower manufacturing businesses, especially small and medium enterprises (SMEs), to manage their inventory and production workflows more effectively. This system was designed and implemented under the GIZ-ICONE program, in collaboration with local Cambodian businesses such as <strong>Toeuk Somrong</strong>, a producer of traditional bottled drinks.</p><p>The platform offers a comprehensive set of features essential for manufacturing operations, including:</p><ul><li>Inventory tracking for raw materials and finished goods</li><li>Production order management</li><li>Purchase invoice and sales tracking (quotes and invoices)</li><li>Automated Telegram Bot notifications for real-time updates</li><li>Advanced reporting and analytics dashboard</li><li>Exportable reports for external analysis</li><li>Full <strong>Khmer language localization</strong> for non-English speaking users</li><li>Responsive design for desktop, tablet, and mobile use</li></ul><p>The system was designed with a user-friendly interface and prioritizes accessibility for Cambodian entrepreneurs, addressing the gap left by global tools like QuickBooks that are often too complex and not localized.</p><p><br></p><h3><strong>2. Problematic</strong></h3><p><br></p><p>SMEs in Cambodia, particularly in provinces like <strong>Siem Reap</strong>, <strong>Battambang</strong>, and <strong>Banteay Meanchey</strong>, often face difficulties adapting to advanced inventory or ERP systems due to their complexity and lack of Khmer language support.</p><p>Existing tools are typically built for enterprise-level users with technical backgrounds, making them inaccessible to local business owners. The lack of intuitive design and culturally relevant language support has left a digital gap in the Cambodian SME market.</p><p>This custom-built system bridges that gap by offering an easy-to-use, Khmer-localized, and purpose-driven solution that enhances production efficiency and transparency.</p><p><br></p><h3><strong>3. Project Planning</strong></h3><p><br></p><p>The development and implementation of this system followed a structured 11-month timeline, from <strong>August 2024 to June 2025</strong>, with clearly defined phases:</p><ul><li><strong>Phase 1: Requirement Study</strong> – 2 Weeks</li><li>Analysis of business needs, existing system limitations, and digital maturity</li><li><strong>Phase 2: System Design</strong> – 2 Weeks</li><li>Database structure, UX/UI wireframing, system architecture planning</li><li><strong>Phase 3: Implementation</strong> – 34 Weeks</li><li>Backend &amp; frontend development, API integration, Telegram Bot setup</li><li><strong>Phase 4: Testing</strong> – 2 Weeks</li><li>Unit testing, integration testing, performance &amp; security validation</li><li><strong>Phase 5: Documentation &amp; Deployment</strong> – 2 Weeks</li><li>User manuals, system documentation, server configuration, go-live</li><li><strong>Phase 6: Training</strong> – Ongoing</li><li>Business owner training under the GIZ-ICONE program</li><li><strong>Phase 7: Maintenance &amp; Support</strong> – Ongoing</li><li>Continuous monitoring, updates, and bug fixes</li></ul><p><br></p><h3><strong>4. Role &amp; Responsibilities</strong></h3><p><br></p><ul><li><strong>Mr. Pheak Reaksmey</strong> – Project Advisor, GIZ-ICONE Program</li><li><strong>Mr. Leap Chanvuthy</strong> – Lead Developer, Fullstack Developer, Technical Trainer</li><li><strong>John Kimleang</strong> – Frontend Developer</li><li><strong>Kong Tiven</strong> – Frontend Developer</li><li><strong>Chhun Chandavit</strong> – Frontend Developer</li></ul><p><br></p><h3><strong>5. Functional &amp; Non-Functional Requirements</strong></h3><p><br></p><p>Functional Requirements:</p><ul><li>Track raw materials and finished product stock levels</li><li>Create and manage production orders</li><li>Generate purchase and sales invoices</li><li>Real-time alerts via Telegram bot</li><li>Role-based access control (admin, manager, staff)</li><li>Export reports in Excel/PDF format</li><li>Generate analytics dashboards for decision-making</li><li><br></li></ul><p>Non-Functional Requirements:</p><ul><li>Khmer language support throughout the system</li><li>Accessible on multiple devices (desktop, mobile, tablet)</li><li>Secure login with JWT and Google OAuth2</li><li>High system performance with optimized database queries</li><li>Reliable backup and recovery mechanisms</li></ul><p><br></p><h3><strong>6. Tools &amp; Technologies</strong></h3><p><br></p><ul><li><strong>Frontend</strong>: React.js, TailwindCSS, React Icons</li><li><strong>Backend</strong>: Laravel (PHP), MySQL, Laravel Excel</li><li><strong>Authentication</strong>: JWT, Google OAuth2, Role-based Access Control (RBAC)</li><li><strong>APIs</strong>: RESTful APIs, Google Maps API</li><li><strong>Dev Tools</strong>: Git, Postman, CI/CD pipelines</li><li><strong>Server Environment</strong>: Linux (Ubuntu-based) VPS</li></ul><p><br></p><h3><strong>7. Activities &amp; Milestones</strong></h3><p><br></p><ul><li>Requirements gathering and digital maturity assessment</li><li>System architecture and design finalization</li><li>UI/UX development and frontend implementation</li><li>Backend API development and database structuring</li><li>Integration with Telegram for real-time updates</li><li>Role-based access and user permissions setup</li><li>System testing (unit, integration, UAT)</li><li>On-site and virtual user training sessions</li><li>Deployment and system go-live</li><li>Post-deployment support and maintenance</li><li><br></li></ul><h3><strong>8. Perspective</strong></h3><p><br></p><p>This project reflects the power of <strong>digitally empowering local SMEs in Cambodia</strong> through custom solutions designed for their actual needs. By delivering a Khmer-localized, responsive, and intuitive inventory and production system, we’ve helped eliminate barriers caused by generic global software tools.</p><p>Beyond Toeuk Somrong, this platform is now positioned as a <strong>scalable solution</strong> that can be tailored for other Cambodian manufacturers and SMEs who face similar challenges. It demonstrates how thoughtful design, local language support, and smart automation (like Telegram alerts) can dramatically improve day-to-day business operations.</p><p>This case proves that <strong>digital transformation for SMEs doesn't have to be complex—it just needs to be relevant, accessible, and purposeful.</strong></p>`
    ,
    tags: ["React", "Laravel", "Freelance Project", "SMEs", "GIZ-ICONE"],
    images: [
      "/projects/inventory/inventory-thumbnail.png",
      "/projects/inventory/inventory-1.png",
      "/projects/inventory/inventory-2.png",
      "/projects/inventory/inventory-3.png",
      "/projects/inventory/inventory-4.png",
      "/projects/inventory/inventory-5.png",
      "/projects/inventory/inventory-6.png",
      "/projects/inventory/inventory-7.png",
      "/projects/inventory/inventory-8.png",
      "/projects/inventory/inventory-9.png",
      "/projects/inventory/inventory-10.png",
      "/projects/inventory/inventory-11.png",
      "/projects/inventory/inventory-12.png",
      "/projects/inventory/inventory-13.png",
      "/projects/inventory/inventory-14.png"
    ],
    githubRepo: [
      {
        title: "N/A",
        link: "N/A"
      }
    ]
  }, {
    id: 3,
    title: "Book Sharing Platform",
    subtitle: "A Community-Driven Book Sharing Platform for Local & International Readers",
    body: `<h3><strong>1. Project Introduction, Objective, Overview, and Literature Review</strong></h3><p><br></p><p><strong>Project Title:</strong> <em>Schoolio – Online Book Sharing Platform</em></p><p><br></p><p><strong>Introduction:</strong></p><p>Schoolio is an online platform created to foster a global community of book enthusiasts by simplifying the process of sharing and discovering books. The project was developed as a capstone project with the goal of creating a smooth and engaging digital reading experience for both local and international users.</p><p><br></p><p><strong>Objective:</strong></p><p>The primary objective of Schoolio is to expand the book-sharing community by providing a platform where users can effortlessly find, download, and upload books. It aims to encourage a culture of knowledge sharing and improve access to a wide range of books.</p><p><br></p><p><strong>Overview:</strong></p><p>Schoolio provides a user-friendly interface where readers can browse books using advanced search and filtering, customize their profiles, and share their own digital book collections. It supports secure user authentication, responsive design, and features that enhance user engagement and contribution.</p><p><br></p><p><strong>Literature Review:</strong></p><p>Inspired by platforms such as Wattpad, Open Library, and Goodreads, Schoolio incorporates best practices from existing book-sharing ecosystems. However, it focuses on ease of use, minimal barriers to entry, and streamlined sharing features that make it more accessible for a diverse range of users.</p><p><br></p><h3><strong>2. Team Members and Responsibilities</strong></h3><p><br></p><ul><li>Mr. Leap Chanvuthy - Fullstack Developer &amp; Project Manager</li></ul><p><br></p><h3><strong>3. Tools and Technologies</strong></h3><p><br></p><p>The development stack includes modern technologies for scalability and user experience:</p><ul><li><strong>Frontend:</strong> React, Tailwind CSS</li><li><strong>Backend:</strong> Firebase (Backend as a Service)</li><li><strong>Authentication:</strong> Google OAuth 2.0</li><li><strong>Storage:</strong> Firebase Cloud Firestore (for book file uploads)</li><li><strong>State Management:</strong> Redux Toolkit</li><li><strong>DevOps:</strong> GitHub, Docker</li></ul><h3><br></h3><h3><strong>4. Functional and Non-Functional Requirements</strong></h3><p><br></p><p><strong>Functional Requirements:</strong></p><ul><li>User registration and login</li><li>Book listing with search and filtering</li><li>Upload and download book functionality</li><li>Profile customization</li><li>Bookmark favorite books</li><li>Responsive book detail pages</li></ul><p><br></p><p><strong>Non-Functional Requirements:</strong></p><ul><li>Mobile-first responsive design</li><li>Secure authentication with token-based access</li><li>Optimized for fast loading</li><li>Scalable architecture for future feature growth</li></ul><h3><br></h3><h3>5. Features of the Website</h3><ul><li><strong>Good-looking UI platform:</strong> Designed with clean aesthetics and user-friendly navigation</li><li><strong>Responsive Design:</strong> Works seamlessly across desktop, tablet, and mobile devices</li><li><strong>Login/Sign-Up System:</strong> Secure access to platform features</li><li><strong>Book Listing with Search and Filter:</strong> Helps users quickly find books based on title, category, or tags</li><li><strong>Upload Book:</strong> Users can share their own books with others in the community</li><li><strong>Profile Customization:</strong> Readers can personalize their accounts, manage uploads, and view reading history</li></ul><p><br></p><h3><strong>6. How This Project Makes Life Easier</strong></h3><p><br></p><p>Schoolio simplifies the way readers access and share books by providing an intuitive platform that reduces friction in finding valuable content. It supports community-driven growth where users contribute and benefit from shared knowledge. For students, casual readers, or lifelong learners, Schoolio promotes inclusiveness, easy access, and the spirit of sharing in the digital reading world.</p><p><br></p><p><br></p><h3><strong>Visit Live Demo</strong>: <a href="https://schoolio.vercel.app/login" rel="noopener noreferrer" target="_blank">https://schoolio.vercel.app</a></h3>`,
    tags: ["React", "Firebase", "Vercel", "Google OAuth 2.0", "Cloud Firestore", "Tailwind CSS", "Books"],
    images: [
      "/projects/book-platform/book-thumbnail.svg",
      "/projects/book-platform/book-1.png",
      "/projects/book-platform/book-2.png",
      "/projects/book-platform/book-3.png",
      "/projects/book-platform/book-4.png",
      "/projects/book-platform/book-5.png",
      "/projects/book-platform/book-6.png",
      "/projects/book-platform/book-7.png",
    ],
    githubRepo: [
      {
        title: "Project Repo",
        link: "https://github.com/Leap-Chanvuthy/Schoolio"
      }
    ]
  },
];
