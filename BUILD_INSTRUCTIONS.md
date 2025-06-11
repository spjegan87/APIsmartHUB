# APIsmartHUB Android App Build Instructions

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
```bash
# Build debug APK
./gradlew assembleDebug

# Build release APK (requires signing)
./gradlew assembleRelease
```

### 5. Install on Device
```bash
adb install app/build/outputs/apk/debug/app-debug.apk
```

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
