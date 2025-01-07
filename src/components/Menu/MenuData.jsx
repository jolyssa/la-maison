import menuSVG from '../../assets/menu.svg'

export const convertSVGToPDF = async () => {
  try {
    // Create a new Image object
    const img = new Image();
    img.src = menuSVG;
    
    // Wait for the image to load
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    // Create a canvas with the exact dimensions of the SVG
    const canvas = document.createElement('canvas');
    canvas.width = 800;  // SVG viewBox width
    canvas.height = 1100; // SVG viewBox height
    
    // Get the canvas context and draw the image
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#F8F7F3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    // Create download link
    const link = document.createElement('a');
    link.download = 'menu.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error converting to image:', error);
    throw error;
  }
}