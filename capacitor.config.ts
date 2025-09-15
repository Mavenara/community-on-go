import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.6ea190e3aaa14c06aa0feaf50adca35f',
  appName: 'The Community News',
  webDir: 'dist',
  server: {
    url: 'https://6ea190e3-aaa1-4c06-aa0f-eaf50adca35f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#0066FF",
      showSpinner: false
    }
  }
};

export default config;