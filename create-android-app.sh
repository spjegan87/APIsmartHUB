#!/bin/bash

# APIsmartHUB Android App Creation Script
# This script automates the process of creating an Android app using Bubblewrap

set -e

echo "🚀 APIsmartHUB Android App Creation"
echo "===================================="

# Check if required tools are installed
check_requirements() {
    echo "📋 Checking requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
        exit 1
    fi
    
    # Check Java
    if ! command -v java &> /dev/null; then
        echo "❌ Java is not installed. Please install JDK 8 or higher."
        exit 1
    fi
    
    # Check if Bubblewrap is installed
    if ! command -v bubblewrap &> /dev/null; then
        echo "📦 Installing Bubblewrap CLI..."
        npm install -g @bubblewrap/cli
    fi
    
    echo "✅ All requirements satisfied"
}

# Deploy the web app (if needed)
deploy_webapp() {
    echo "🌐 Preparing web app..."
    
    # Build the web app
    echo "Building web application..."
    npm run build
    
    echo "📝 Please deploy your web app to a public URL and update the manifest URL below"
    echo "Recommended platforms:"
    echo "  - Vercel: npm i -g vercel && vercel --prod"
    echo "  - Netlify: npm i -g netlify-cli && netlify deploy --prod --dir=dist"
    echo "  - Or use your existing domain: http://apismarthub.infinitisoftware.com"
}

# Create Android project
create_android_project() {
    read -p "Enter your deployed web app URL (e.g., https://yourdomain.com): " WEB_URL
    
    if [[ -z "$WEB_URL" ]]; then
        echo "❌ Web URL is required"
        exit 1
    fi
    
    echo "📱 Creating Android project..."
    
    # Create project directory
    mkdir -p apismarthub-android
    cd apismarthub-android
    
    # Initialize Bubblewrap project with predefined values
    cat > twa-manifest.json << EOF
{
  "packageId": "com.infinitisoftware.apismarthub",
  "host": "${WEB_URL#*://}",
  "name": "APIsmartHUB",
  "launcherName": "APIsmartHUB",
  "display": "standalone",
  "orientation": "default",
  "themeColor": "#2563eb",
  "backgroundColor": "#ffffff",
  "startUrl": "/",
  "iconUrl": "${WEB_URL}/icon-512.png",
  "maskableIconUrl": "${WEB_URL}/icon-512.png",
  "monochromeIconUrl": "${WEB_URL}/icon-512.png",
  "shortcuts": [
    {
      "name": "Dashboard",
      "short_name": "Dashboard",
      "url": "/",
      "icons": [
        {
          "src": "${WEB_URL}/icon-96.png",
          "sizes": "96x96"
        }
      ]
    },
    {
      "name": "API Management",
      "short_name": "APIs",
      "url": "/api-management",
      "icons": [
        {
          "src": "${WEB_URL}/icon-96.png",
          "sizes": "96x96"
        }
      ]
    }
  ],
  "generatorApp": "bubblewrap-cli",
  "webManifestUrl": "${WEB_URL}/manifest.json",
  "fallbackType": "customtabs",
  "features": {
    "locationDelegation": {
      "enabled": false
    },
    "playBilling": {
      "enabled": false
    }
  },
  "alphaDependencies": {
    "enabled": false
  },
  "enableNotifications": true,
  "splashScreenFadeOutDuration": 300,
  "signingKey": {
    "path": "./apismarthub-release-key.keystore",
    "alias": "apismarthub"
  },
  "appVersionName": "1.0.0",
  "appVersionCode": 1
}
EOF
    
    echo "✅ Android project configuration created"
}

# Generate keystore for signing
generate_keystore() {
    echo "🔐 Creating signing keystore..."
    
    if [[ ! -f "apismarthub-release-key.keystore" ]]; then
        echo "Generating new keystore..."
        keytool -genkey -v -keystore apismarthub-release-key.keystore -alias apismarthub -keyalg RSA -keysize 2048 -validity 10000 \
                -dname "CN=APIsmartHUB, OU=Infiniti Software, O=Infiniti Software, L=Unknown, S=Unknown, C=IN" \
                -storepass apismarthub123 -keypass apismarthub123
        echo "✅ Keystore created successfully"
    else
        echo "✅ Keystore already exists"
    fi
}

# Build the Android app
build_android_app() {
    echo "🔨 Building Android app..."
    
    # Initialize the project if not done
    if [[ ! -d "app" ]]; then
        bubblewrap init --manifest twa-manifest.json
    fi
    
    # Build the app
    bubblewrap build --skipPwaValidation
    
    echo "✅ Android app built successfully"
}

# Generate signed APK
generate_signed_apk() {
    echo "✍️ Generating signed APK..."
    
    # Find the unsigned APK
    UNSIGNED_APK=$(find . -name "*unsigned*.apk" -o -name "*release*.apk" | head -1)
    
    if [[ -z "$UNSIGNED_APK" ]]; then
        echo "❌ Could not find unsigned APK"
        exit 1
    fi
    
    # Sign the APK
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore apismarthub-release-key.keystore \
              -storepass apismarthub123 -keypass apismarthub123 "$UNSIGNED_APK" apismarthub
    
    # Align the APK
    if command -v zipalign &> /dev/null; then
        zipalign -v 4 "$UNSIGNED_APK" APIsmartHUB-release.apk
        echo "✅ Signed and aligned APK created: APIsmartHUB-release.apk"
    else
        mv "$UNSIGNED_APK" APIsmartHUB-release.apk
        echo "✅ Signed APK created: APIsmartHUB-release.apk"
        echo "⚠️ zipalign not found - APK not aligned (install Android SDK build-tools for optimization)"
    fi
}

# Generate App Bundle (recommended for Play Store)
generate_app_bundle() {
    echo "📦 Generating App Bundle for Play Store..."
    
    # Check if bundletool is available
    if ! command -v bundletool &> /dev/null; then
        echo "📥 Downloading bundletool..."
        curl -L "https://github.com/google/bundletool/releases/latest/download/bundletool-all.jar" -o bundletool.jar
        alias bundletool='java -jar bundletool.jar'
    fi
    
    # Build app bundle
    bubblewrap build --bundletool
    
    echo "✅ App Bundle created successfully"
}

# Main execution
main() {
    echo "Starting Android app creation process..."
    
    check_requirements
    deploy_webapp
    create_android_project
    generate_keystore
    build_android_app
    generate_signed_apk
    generate_app_bundle
    
    echo ""
    echo "🎉 Android app creation completed!"
    echo "================================================"
    echo "📱 Files created:"
    echo "  - APIsmartHUB-release.apk (for direct installation)"
    echo "  - app/build/outputs/bundle/release/app-release.aab (for Play Store)"
    echo ""
    echo "📋 Next steps:"
    echo "  1. Test the APK on an Android device"
    echo "  2. Upload the .aab file to Google Play Console"
    echo "  3. Fill out the Play Store listing"
    echo "  4. Submit for review"
    echo ""
    echo "🔐 Keystore details:"
    echo "  - File: apismarthub-release-key.keystore"
    echo "  - Alias: apismarthub"
    echo "  - Store Password: apismarthub123"
    echo "  - Key Password: apismarthub123"
    echo ""
    echo "⚠️ Keep the keystore file secure - you'll need it for app updates!"
}

# Run the script
main "$@"