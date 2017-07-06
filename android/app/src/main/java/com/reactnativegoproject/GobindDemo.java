package com.reactnativegoproject;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import gobinddemo.Gobinddemo;

public class GobindDemo extends ReactContextBaseJavaModule {
    public GobindDemo(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "GobindDemo";
    }

    @ReactMethod
    public void sum(int a, int b, Callback errorCallback, Callback successCallback) {
        try {
            long sum = Gobinddemo.sum(Long.valueOf(a), Long.valueOf(b));
            successCallback.invoke((int)sum);
        } catch (Exception e){
            errorCallback.invoke(e.getMessage());
        }
    }

    @ReactMethod
    public void fibonacci(int n, Callback errorCallback, Callback successCallback) {
        try {
            long fib = Gobinddemo.fibonacci(Long.valueOf(n));
            successCallback.invoke((int)fib);
        } catch (Exception e){
            errorCallback.invoke(e.getMessage());
        }
    }
}
