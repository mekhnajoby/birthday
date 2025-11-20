Birthday Website for Akku

A beautiful, fully animated birthday website with pure HTML, CSS, and JavaScript.

Features:
- Animated hero section with floating sparkles
- Falling confetti animation
- Special birthday wishes cards
- Interactive memory lane carousel for photos and videos
- Fully responsive design
- No dependencies required

Deploying to GitHub Pages:

1. Create a new GitHub repository named `username.github.io` (replace `username` with your GitHub username)
   - OR use any repository name and adjust settings accordingly

2. Push this code to your repository:
   ```
   git init
   git add .
   git commit -m "Birthday website for Akku"
   git remote add origin https://github.com/username/repository-name.git
   git branch -M main
   git push -u origin main
   ```

3. Go to your repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Select `main` branch and root folder `/`
6. Click Save

Your site will be live at: `https://username.github.io`

Adding Your Photos:
1. Create a folder called `media` in your repository
2. Add your photos and videos to this folder
3. Update the carousel slides in `index.html`
4. Replace placeholder divs with actual image/video elements:
   ```html
   <img src="media/photo1.jpg" alt="Memory">
   <video src="media/video1.mp4" controls></video>
   ```
5. Push changes to GitHub

Browser Support:
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile friendly
