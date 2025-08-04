### Project Overview: Chubby Cheeks E-Commerce Platform

**Chubby Cheeks** is an interactive e-commerce web application designed for baby, children, and maternity products, featuring a **virtual try-on experience** for garments. The platform offers a responsive, user-friendly interface with a sidebar navigation menu, dynamic content updates, and webcam integration for virtual try-on functionality. Users can browse product categories, view garment details, and test the virtual try-on feature using their webcam.

### Key Features
1. **Responsive Sidebar Navigation**: An off-canvas menu with categories (Home, Baby Care, New Born, Garments, Games & Ride-ons, Mother Care) that slides in/out, with an overlay for closing.
2. **Dynamic Content Loading**: Content updates dynamically based on the selected category, displaying relevant information or product grids.
3. **Virtual Try-On (Garments Section)**: Users can activate their webcam to view a live feed and simulate trying on garments (basic implementation with video display).
4. **Product Showcase**: Displays a grid of garments with images, names, prices, and "View Details" buttons in the Garments section.
5. **Custom Message Box**: Replaces default browser alerts with a styled modal for user notifications.
6. **Interactive UI**: Includes buttons for login, sign-up, and camera controls, with hover and focus effects for enhanced user experience.

### Technologies Used
- **HTML5**: Structures the webpage, including the header, sidebar, main content, and video elements.
- **Vanilla JavaScript (ES6)**: Handles interactivity, including:
  - Sidebar toggle (open/close).
  - Dynamic content updates based on category selection.
  - Webcam access via WebRTC (`navigator.mediaDevices.getUserMedia`).
  - Custom message box for alerts.
  - Event listeners for buttons and links.
- **Tailwind CSS (CDN)**: Provides utility-first CSS for styling the layout, buttons, product grid, and video feed, ensuring a modern and responsive design.
- **CSS**: Custom styles for:
  - Sidebar animation (`transform`, `transition`).
  - Overlay effects for the sidebar.
  - Video feed styling (responsive sizing, rounded corners, shadow).
- **Google Fonts (Inter)**: Used for consistent typography across the application.
- **WebRTC**: Enables real-time webcam access for the virtual try-on feature.
- **Sample Images**: Placeholder images for garments (referenced via `uploaded:` identifiers, intended to be replaced with actual product images).

### Project Structure
- **`index.html`**: The main file containing:
  - HTML structure for the header, sidebar, overlay, and main content.
  - Inline JavaScript for interactivity.
  - Tailwind CSS CDN and custom CSS for styling.
  - Google Fonts link for the Inter font.
- **No React or Build Tools**: The project is a single HTML file with vanilla JavaScript, making it lightweight but less modular than a React-based setup.

### Key Components
- **Header**: Contains a hamburger menu button, site title ("Chubby Cheeks"), and login/sign-up buttons.
- **Sidebar Menu**: A fixed, off-canvas menu with category links that update the main content when clicked.
- **Overlay**: A semi-transparent background that appears when the sidebar is open, allowing users to close it by clicking outside.
- **Main Content**: Dynamically updates based on the selected category:
  - **Home**: Displays a welcome message.
  - **Garments**: Shows a product grid with dress details and a virtual try-on section (webcam controls and video feed).
  - **Other Categories**: Display placeholder text for Baby Care, New Born, etc.
- **Virtual Try-On**: In the Garments section, users can start/stop the webcam to view a live feed. (Note: The try-on is a basic demo; actual product overlay requires additional logic, e.g., canvas rendering.)
- **Custom Message Box**: A styled modal replaces browser alerts for a better user experience.

### Setup and Usage
1. **Single File Setup**: Save the provided `index.html` and open it in a browser (requires an HTTP server for WebRTC to work, e.g., `npx serve` or a local server like Live Server).
2. **Dependencies**: No npm dependencies; uses Tailwind CSS via CDN and Google Fonts.
3. **Running the App**:
   - Open in a browser to access the homepage.
   - Click the hamburger menu to open the sidebar.
   - Select categories to view content.
   - In the Garments section, click "Open Camera" to start the webcam for virtual try-on (requires camera permission).
   - Click "View Details" on a dress to see a custom message box with product info.
4. **Production Note**: The Tailwind CSS CDN is not recommended for production. For production, install Tailwind CSS locally via npm and a build tool like Vite or Webpack.

### Notes
- **Virtual Try-On Limitation**: The current implementation only displays the webcam feed without product overlay. For a full try-on experience, integrate a canvas element and image processing (e.g., as in the previous React-based project) or libraries like `face-api.js`.
- **Image Handling**: The `dressData` array references uploaded images (e.g., `uploaded:dress1.jpg-...`). Replace these with actual image URLs or a content delivery system.
- **Scalability**: The single-file approach is simple but not ideal for large-scale apps. Consider migrating to a React/Vue framework for modularity and maintainability.
- **Security**: WebRTC requires HTTPS or `localhost` for camera access. Test on a local server or deploy to a secure host.

This project delivers a lightweight, interactive e-commerce platform with a focus on user engagement through a virtual try-on feature, built using vanilla web technologies and Tailwind CSS for rapid styling.
