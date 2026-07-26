import { ImageResponse } from 'next/og';
import { join } from 'path';
import { readFile } from 'fs/promises';

export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default async function Icon() {
  try {
    const logoPath = join(process.cwd(), 'public', 'images', 'Araspa-LOGO.png');
    const logoData = await readFile(logoPath);
    const base64Logo = logoData.toString('base64');

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
          }}
        >
          <img
            src={`data:image/png;base64,${base64Logo}`}
            style={{ 
              width: '80%', 
              height: '80%', 
              objectFit: 'contain' 
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error('Failed to generate icon', error);
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ffffff',
            color: '#000000',
            fontSize: 100,
            fontWeight: 'bold',
          }}
        >
          ARA
        </div>
      ),
      { ...size }
    );
  }
}
