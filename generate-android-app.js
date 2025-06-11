#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 APIsmartHUB Android App Generator');
console.log('===================================');

// Configuration
const config = {
  packageId: 'com.infinitisoftware.apismarthub',
  appName: 'APIsmartHUB',
  webUrl: 'http://apismarthub.infinitisoftware.com:8000',
  manifestUrl: 'http://apismarthub.infinitisoftware.com:8000/manifest.json',
  iconUrl: 'http://apismarthub.infinitisoftware.com:8000/icon-512.png'
};

// Check if required tools are available
function checkRequirements() {
  console.log('📋 Checking requirements...');
  
  try {
    execSync('node --version', { stdio: 'pipe' });
    console.log('✅ Node.js is available');
  } catch (error) {
    console.error('❌ Node.js is required');
    process.exit(1);
  }
}

// Create manifest for TWA
function createTWAManifest() {
  console.log('📱 Creating TWA manifest...');
  
  const twaManifest = {
    packageId: config.packageId,
    host: config.webUrl.replace(/^https?:\/\//, ''),
    name: config.appName,
    launcherName: config.appName,
    display: 'standalone',
    orientation: 'default',
    themeColor: '#2563eb',
    backgroundColor: '#ffffff',
    startUrl: '/',
    iconUrl: config.iconUrl,
    maskableIconUrl: config.iconUrl,
    monochromeIconUrl: config.iconUrl,
    shortcuts: [
      {
        name: 'Dashboard',
        short_name: 'Dashboard',
        url: '/',
        icons: [{
          src: config.iconUrl.replace('512', '96'),
          sizes: '96x96'
        }]
      },
      {
        name: 'API Management', 
        short_name: 'APIs',
        url: '/api-management',
        icons: [{
          src: config.iconUrl.replace('512', '96'),
          sizes: '96x96'
        }]
      }
    ],
    generatorApp: 'custom-script',
    webManifestUrl: config.manifestUrl,
    fallbackType: 'customtabs',
    features: {
      locationDelegation: { enabled: false },
      playBilling: { enabled: false }
    },
    alphaDependencies: { enabled: false },
    enableNotifications: true,
    splashScreenFadeOutDuration: 300,
    appVersionName: '1.0.0',
    appVersionCode: 1
  };
  
  fs.writeFileSync('twa-manifest.json', JSON.stringify(twaManifest, null, 2));
  console.log('✅ TWA manifest created');
}

// Create Android project structure
function createAndroidProject() {
  console.log('🔨 Creating Android project structure...');
  
  const projectStructure = {
    'app/src/main/AndroidManifest.xml': generateAndroidManifest(),
    'app/src/main/java/com/infinitisoftware/apismarthub/MainActivity.java': generateMainActivity(),
    'app/src/main/res/values/strings.xml': generateStrings(),
    'app/src/main/res/values/colors.xml': generateColors(),
    'app/build.gradle': generateBuildGradle(),
    'build.gradle': generateRootBuildGradle(),
    'gradle.properties': generateGradleProperties(),
    'settings.gradle': generateSettingsGradle()
  };
  
  // Create directories and files
  Object.entries(projectStructure).forEach(([filePath, content]) => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
  });
  
  console.log('✅ Android project structure created');
}

// Generate Android manifest
function generateAndroidManifest() {
  return `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.infinitisoftware.apismarthub">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/Theme.AppCompat.Light.NoActionBar">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:launchMode="singleTop"
            android:screenOrientation="portrait">
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="http"
                    android:host="apismarthub.infinitisoftware.com" />
            </intent-filter>
        </activity>
    </application>
</manifest>`;
}

// Generate MainActivity
function generateMainActivity() {
  return `package com.infinitisoftware.apismarthub;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;
    private static final String BASE_URL = "http://apismarthub.infinitisoftware.com:8000";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        webView = findViewById(R.id.webview);
        setupWebView();
        
        String url = BASE_URL;
        Intent intent = getIntent();
        if (intent != null && intent.getData() != null) {
            url = intent.getData().toString();
        }
        
        webView.loadUrl(url);
    }
    
    private void setupWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setSupportZoom(true);
        settings.setBuiltInZoomControls(true);
        settings.setDisplayZoomControls(false);
        
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (url.startsWith(BASE_URL)) {
                    return false;
                }
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                startActivity(intent);
                return true;
            }
        });
    }
    
    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}`;
}

// Generate other necessary files
function generateStrings() {
  return `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">APIsmartHUB</string>
</resources>`;
}

function generateColors() {
  return `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="colorPrimary">#2563eb</color>
    <color name="colorPrimaryDark">#1d4ed8</color>
    <color name="colorAccent">#3b82f6</color>
</resources>`;
}

function generateBuildGradle() {
  return `android {
    compileSdkVersion 34
    defaultConfig {
        applicationId "com.infinitisoftware.apismarthub"
        minSdkVersion 21
        targetSdkVersion 34
        versionCode 1
        versionName "1.0.0"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'androidx.constraintlayout:constraintlayout:2.1.4'
}`;
}

function generateRootBuildGradle() {
  return `buildscript {
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath "com.android.tools.build:gradle:8.1.0"
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}`;
}

function generateGradleProperties() {
  return `android.useAndroidX=true
android.enableJetifier=true`;
}

function generateSettingsGradle() {
  return `include ':app'`;
}

// Create layout file
function createLayoutFile() {
  const layoutDir = 'app/src/main/res/layout';
  if (!fs.existsSync(layoutDir)) {
    fs.mkdirSync(layoutDir, { recursive: true });
  }
  
  const layoutContent = `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <WebView
        android:id="@+id/webview"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</RelativeLayout>`;
  
  fs.writeFileSync(path.join(layoutDir, 'activity_main.xml'), layoutContent);
}

// Generate installation instructions
function generateInstructions() {
  const instructions = `# APIsmartHUB Android App Build Instructions

## Generated Files
- Android project structure created in current directory
- TWA manifest configuration: twa-manifest.json

## Next Steps

### 1. Install Android Studio
Download and install Android Studio from: https://developer.android.com/studio

### 2. Import Project
1. Open Android Studio
2. Click "Open an existing Android Studio project"
3. Select this directory

### 3. Build APK
1. In Android Studio: Build → Generate Signed Bundle/APK
2. Choose APK
3. Create new keystore or use existing
4. Build release APK

### 4. Alternative: Command Line Build
If you have Android SDK installed:
\`\`\`bash
# Build debug APK
./gradlew assembleDebug

# Build release APK (requires signing)
./gradlew assembleRelease
\`\`\`

### 5. Install on Device
\`\`\`bash
adb install app/build/outputs/apk/debug/app-debug.apk
\`\`\`

## App Details
- Package: com.infinitisoftware.apismarthub
- App Name: APIsmartHUB
- Target URL: http://apismarthub.infinitisoftware.com:8000
- Min SDK: 21 (Android 5.0)
- Target SDK: 34 (Android 14)

## Google Play Store
To upload to Play Store:
1. Generate signed release APK/Bundle
2. Create Google Play Console account ($25)
3. Upload app bundle (.aab preferred)
4. Complete store listing
5. Submit for review

The app will load your web application in a WebView with native Android integration.
`;

  fs.writeFileSync('BUILD_INSTRUCTIONS.md', instructions);
  console.log('✅ Build instructions created');
}

// Main execution
function main() {
  try {
    checkRequirements();
    createTWAManifest();
    createAndroidProject();
    createLayoutFile();
    generateInstructions();
    
    console.log('');
    console.log('🎉 Android app project generated successfully!');
    console.log('📁 Files created in current directory');
    console.log('📖 Read BUILD_INSTRUCTIONS.md for next steps');
    console.log('');
    console.log('Quick start:');
    console.log('1. Install Android Studio');
    console.log('2. Open this project in Android Studio');
    console.log('3. Build → Generate Signed Bundle/APK');
    console.log('4. Install APK on Android device');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();