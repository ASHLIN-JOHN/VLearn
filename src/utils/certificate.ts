import { Certificate } from '../types/learning';

export function generateCertificate(certificate: Certificate): string {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Set canvas dimensions
  canvas.width = 800;
  canvas.height = 600;
  
  // Background gradient
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Border
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 8;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
  
  // Inner border
  ctx.strokeStyle = '#666666';
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
  
  // Certificate text
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  
  // Title
  ctx.font = 'bold 48px serif';
  ctx.fillText('Certificate of Completion', canvas.width / 2, 120);
  
  // Subtitle
  ctx.font = '24px serif';
  ctx.fillText('This is to certify that', canvas.width / 2, 180);
  
  // User name
  ctx.font = 'bold 36px serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(certificate.userName, canvas.width / 2, 240);
  
  // Course completion text
  ctx.fillStyle = '#ffffff';
  ctx.font = '24px serif';
  ctx.fillText('has successfully completed', canvas.width / 2, 290);
  
  // Course name
  ctx.font = 'bold 32px serif';
  ctx.fillStyle = '#cccccc';
  ctx.fillText(certificate.courseName, canvas.width / 2, 340);
  
  // Date and score
  ctx.fillStyle = '#ffffff';
  ctx.font = '20px serif';
  ctx.fillText(`Completed on: ${certificate.completionDate}`, canvas.width / 2, 420);
  ctx.fillText(`Final Score: ${certificate.score}%`, canvas.width / 2, 450);
  
  // Signature line
  ctx.font = '18px serif';
  ctx.fillText('Learning Platform Certification', canvas.width / 2, 520);
  
  return canvas.toDataURL('image/png');
}

export function downloadCertificate(certificate: Certificate): void {
  const dataUrl = generateCertificate(certificate);
  const link = document.createElement('a');
  link.download = `${certificate.courseName}_Certificate.png`;
  link.href = dataUrl;
  link.click();
}