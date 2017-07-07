### Introduction

this is a demo with how to build go library to react-native project 

### dependencies

install android studio: https://developer.android.com/studio/index.html


install gomobile: https://github.com/golang/go/wiki/Mobile


install react-native: https://facebook.github.io/react-native/docs/getting-started.html


install xcode in app store



### config

download project 

    git clone https://github.com/ReactNativeGoMobileLab/ReactNativeGoDemo

cd and install npm dependencies

    cd ReactNativeGoDemo
    npm install

config go in android
    
    # edit GOPATH 
    vim android/gobinddemo/build.gradle
    
config go in ios

    cd ios
    gomobile bind -target=ios github.com/ReactNativeGoMobileLab/gobinddemo
    open ios/ReactNativeGoProject.xcodeproj
    # and then drag and drop Gobinddemo.framework bundle to the Xcode project
    
### run

run ios
    
    react-native run-ios

run android

    react-native run-android
